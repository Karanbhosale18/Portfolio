import { Github, Linkedin, Code2, Mail, Download } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

const socials = [
  { icon: Github, href: SITE.github, label: "GitHub" },
  { icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Code2, href: SITE.leetcode, label: "LeetCode" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Karan Bhosale
          </p>
          <p className="mt-1 text-sm text-zinc-500">Java Backend Developer, Mumbai, India</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-xs text-zinc-500 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-primary-400/50 hover:text-white"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={SITE.resumePath}
            download
            aria-label="Download resume"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-primary-400/50 hover:text-white"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-6">
        <p className="section-shell text-center font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} Karan Bhosale | Software Developer.
        </p>
      </div>
    </footer>
  );
}
