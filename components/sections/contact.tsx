"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

const CONTACT_LINKS = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: SITE.location, href: "#" },
  { icon: Github, label: "GitHub", href: SITE.github },
  { icon: Linkedin, label: "LinkedIn", href: SITE.linkedin },
  { icon: Code2, label: "LeetCode", href: SITE.leetcode },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS environment variables are not configured.");
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell py-28">
      <SectionHeading
        eyebrow="11 · Contact"
        title="Let's build something"
        description="Open to backend engineering roles, internships, and freelance full stack work."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Card className="flex h-full flex-col justify-between gap-8">
            <div className="space-y-4">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-3 rounded-lg p-2 text-sm text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-primary-400">
                    <c.icon className="h-4 w-4" />
                  </span>
                  {c.label}
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.06]">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
                className="h-48 w-full grayscale invert-[.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <Card>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="focus-ring rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="focus-ring rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600"
                  placeholder="you@company.com"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="subject" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="focus-ring rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600"
                  placeholder="Role, project, or opportunity"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="focus-ring resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600"
                  placeholder="Tell me a bit about what you're looking for"
                />
              </div>

              <div className="sm:col-span-2">
                <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                  {status === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === "sent" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status === "sent" ? "Message sent" : "Send Message"}
                </Button>
                {status === "error" && (
                  <p className="mt-3 text-xs text-red-400">
                    Something went wrong — email {SITE.email} directly, or check the EmailJS
                    environment variables in .env.local.
                  </p>
                )}
              </div>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
