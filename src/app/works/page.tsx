"use client";

import Link from "next/link";
import { useState } from "react";

export const colors = {
  bgcolor1: "#070B14",
  bgcolor2: "#0F172A",
  cardBg: "#111C30",
  fontcolor1: "#F8FAFC",
  fontcolor2: "#94A3B8",
  bordercolor1: "#1E293B",
  bordercolor2: "#334155",
  accent: "#38BDF8",
  accentGlow: "rgba(56, 189, 248, 0.15)",
};

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: "Building" | "Designing" | "Exploring" | string;
  href: string;
}

const projects: Project[] = [
  {
    id: "multi-mess",
    title: "Multi-Mess Platform",
    tagline: "Tenant-Oriented Community Management",
    description:
      "Comprehensive digital suite for tracking resident memberships, daily meal counts, shared expenses, deposits, and automated monthly accounts.",
    technologies: ["TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    status: "Designing",
    href: "/works/mess",
  },
  {
    id: "open-school",
    title: "Open School",
    tagline: "Competency-Based Learning System",
    description:
      "A learning system designed around continuous learning and competency evaluation rather than traditional examination-based education.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    status: "Designing",
    href: "/works/open-school",
  },
  {
    id: "talk-ai",
    title: "Talk with AI",
    tagline: "Conversational Mobile Learning",
    description:
      "An intelligent mobile companion app focused on immersive dialogue practice, real-time feedback, and dynamic progress tracking.",
    technologies: ["Expo", "React Native", "TypeScript", "OpenAI API"],
    status: "Exploring",
    href: "/works/mess",
  },
];

export default function WorksPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main
      className="min-h-screen w-full antialiased selection:bg-sky-500/30 selection:text-sky-200"
      style={{
        color: colors.fontcolor1,
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:py-28">
        {/* Header Section */}
        <header className="mb-20">
          <h1
            className=" text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: colors.fontcolor1 }}
          >
            Architecting
            <br />
            <span style={{ color: colors.fontcolor2 }}> Digital System</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: colors.fontcolor2 }}
          >
            Engineering robust multi-tenant architectures, cloud systems, and
            native mobile applications with clean code and high performance.
          </p>
        </header>

        {/* Bento/Modern Stack Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300"
                style={{
                  backgroundColor: colors.cardBg,
                  borderColor: isHovered
                    ? colors.bordercolor2
                    : colors.bordercolor1,
                  boxShadow: isHovered
                    ? `0 20px 40px -15px ${colors.accentGlow}, inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`
                    : "0 4px 20px -2px rgba(0, 0, 0, 0.3)",
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                {/* Subtle top light bar effect on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-.5 transition-opacity duration-300"
                  style={{
                    backgroundColor: colors.accent,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
                  {/* Left Column: Info */}
                  <div className="max-w-2xl">
                    {/* Meta row: Index & Status */}
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-semibold tracking-wider"
                        style={{ color: colors.fontcolor2 }}
                      >
                        0{index + 1}
                      </span>
                      <span
                        className="h-1 w-1 rounded-full"
                        style={{ backgroundColor: colors.bordercolor2 }}
                      />
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider"
                        style={{ color: colors.fontcolor2 }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor:
                              project.status.toLowerCase() === "building"
                                ? "#34D399"
                                : project.status.toLowerCase() === "designing"
                                  ? "#FBBF24"
                                  : "#38BDF8",
                          }}
                        />
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mt-4">
                      <h2
                        className="text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-200"
                        style={{
                          color: isHovered ? colors.accent : colors.fontcolor1,
                        }}
                      >
                        {project.title}
                      </h2>
                      <p
                        className="mt-1 text-xs font-medium uppercase tracking-widest"
                        style={{ color: colors.fontcolor2 }}
                      >
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-4 text-sm leading-relaxed sm:text-base"
                      style={{ color: colors.fontcolor2 }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border px-3 py-1 font-mono text-[11px] font-medium tracking-wide"
                          style={{
                            backgroundColor: colors.bgcolor2,
                            borderColor: colors.bordercolor1,
                            color: colors.fontcolor2,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Interactive CTA Button */}
                  <div className="flex items-center self-end md:self-center">
                    <Link
                      href={project.href}
                      className="relative inline-flex items-center gap-3 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                      style={{
                        backgroundColor: isHovered
                          ? colors.bgcolor1
                          : colors.bgcolor2,
                        borderColor: isHovered
                          ? colors.accent
                          : colors.bordercolor2,
                        borderWidth: "1px",
                        borderStyle: "solid",
                        color: isHovered
                          ? colors.fontcolor1
                          : colors.fontcolor2,
                        boxShadow: isHovered
                          ? `0 0 20px ${colors.accentGlow}`
                          : "none",
                      }}
                    >
                      <span>Explore</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
