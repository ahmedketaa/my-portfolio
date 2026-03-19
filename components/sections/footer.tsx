"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

type FooterProps = {
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
};

export function Footer({ socialLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          {/* name + copyright */}
          <p className="text-sm text-muted-foreground">
            © {year} Ahmed Mostafa
          </p>

          {/* social links */}
          <div className="flex items-center gap-4">
            {socialLinks.github && (
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}

            {socialLinks.linkedin && (
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}

            {socialLinks.email && (
              <Link
                href={`mailto:${socialLinks.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}