"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { SITE } from "@/lib/constants";
import { Users, GitFork, BookMarked, UserPlus } from "lucide-react";

type GhProfile = {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
};

type Repo = {
  name: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, { duration: 1.4, ease: "easeOut" });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView, value, motionVal, rounded]);

  return <span ref={ref}>{display}</span>;
}

export function GithubStats() {
  const [profile, setProfile] = useState<GhProfile | null>(null);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadGitHub() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${SITE.githubUsername}`),
          fetch(`https://api.github.com/users/${SITE.githubUsername}/repos`)
        ]);

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error("Failed");
        }

        const profileData = await profileRes.json();
        const repoData = await reposRes.json();

        setProfile(profileData);
        setRepos(repoData);

      } catch (err) {
        setError(true);
        console.error(err);
      }
    }

    loadGitHub();
  }, []);


  const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
  );

  const totalForks = repos.reduce(
      (sum, repo) => sum + repo.forks_count,
      0
  );

  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);


  const stats = [
    {
      label: "Followers",
      value: profile?.followers ?? 0,
      icon: Users,
    },
    {
      label: "Following",
      value: profile?.following ?? 0,
      icon: UserPlus,
    },
    {
      label: "Repositories",
      value: profile?.public_repos ?? 0,
      icon: BookMarked,
    },
    {
      label: "Stars",
      value: totalStars,
      icon: GitFork,
    },
  ];

  return (
    <section id="github" className="section-shell py-28">
      <SectionHeading
        eyebrow="05 · Open Source"
        title="GitHub activity"
        description="Live GitHub profile statistics, repository insights, and programming languages fetched directly from the GitHub API."
      />

      <Reveal>
        <Card className="mb-8 flex flex-wrap items-center gap-6">
          {profile?.avatar_url && (
            <Image
              src={profile.avatar_url}
              alt={SITE.name}
              width={72}
              height={72}
              className="rounded-full border border-white/10"
            />
          )}
          <div className="flex-1">
            <p className="font-display text-lg font-semibold text-white">@{SITE.githubUsername}</p>
            <p className="text-sm text-zinc-400">
              {error ? "GitHub data unavailable right now — view the profile directly." : profile?.bio || "Backend developer building in the open."}
            </p>
          </div>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-white/15 px-5 py-2 font-mono text-xs text-zinc-300 hover:border-primary-400/50 hover:text-white"
          >
            View Profile
          </a>
        </Card>
      </Reveal>

      <div className="mb-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {stats
          .map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <Card className="text-center">
                <s.icon className="mx-auto mb-2 h-5 w-5 text-primary-400" />
                <p className="font-display text-2xl font-semibold text-white">
                  <Counter value={s.value} />
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {s.label}
                </p>
              </Card>
            </Reveal>
          ))}
      </div>

      <div className="mt-6">
        <Reveal delay={0.15}>
          <Card>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Languages Used
            </p>

            <div className="space-y-3">
              {Object.entries(languages).length > 0 ? (
                  Object.entries(languages).map(([language, count]) => (
                      <div
                          key={language}
                          className="flex items-center justify-between border-b border-zinc-800 pb-2"
                      >
                        <span className="text-zinc-200">{language}</span>

                        <span className="font-mono text-sm text-primary-400">
                {count} repos
              </span>
                      </div>
                  ))
              ) : (
                  <p className="text-sm text-zinc-500">
                    No language data available.
                  </p>
              )}
            </div>
          </Card>
        </Reveal>
      </div>

    </section>
  );
}
