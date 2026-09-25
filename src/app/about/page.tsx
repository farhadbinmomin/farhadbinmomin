"use client";

import { colors } from "@/assets/lib/colors";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen w-full antialiased"
      style={{
        backgroundColor: colors.bgcolor1,
        color: colors.fontcolor1,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-12 lg:py-32">
        {/* Header / Title Block */}
        <header
          className="border-b pb-12"
          style={{ borderColor: colors.bordercolor1 }}
        >
          <p
            className="mb-6 font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: colors.fontcolor2 }}
          >
            System Architecture & Design
          </p>

          <h1
            className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: colors.fontcolor1 }}
          >
            I Design Systems <br />
            <span
              className="italic font-serif"
              style={{ color: colors.fontcolor2 }}
            >
              with purpose.
            </span>
          </h1>
        </header>

        {/* Main Content Grid */}
        <div className="mt-16 grid gap-16 md:grid-cols-12">
          {/* Left Column: Metadata & Details (3 Cols) */}
          <aside className="md:col-span-4 space-y-12">
            {/* Index / Meta info */}
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
                style={{ color: colors.fontcolor2 }}
              >
                Focus Areas
              </h2>
              <ul
                className="space-y-2 text-sm"
                style={{ color: colors.fontcolor1 }}
              >
                <li>Data Architecture</li>
                <li>Multi-Tenant Engines</li>
                <li>Business Systems</li>
                <li>User Experience</li>
              </ul>
            </div>

            {/* Academic Background */}
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
                style={{ color: colors.fontcolor2 }}
              >
                Education
              </h2>
              <p
                className="text-base font-medium"
                style={{ color: colors.fontcolor1 }}
              >
                Computer Science Engineering
              </p>
              <p className="mt-1 text-xs" style={{ color: colors.fontcolor2 }}>
                Jagannath University, Dhaka
              </p>
            </div>
          </aside>

          {/* Right Column: Main Narrative (8 Cols with vertical divider) */}
          <section
            className="md:col-span-8 md:border-l md:pl-12 space-y-8 text-base sm:text-lg leading-relaxed"
            style={{
              borderColor: colors.bordercolor1,
              color: colors.fontcolor2,
            }}
          >
            <p
              className="text-xl sm:text-2xl font-normal leading-snug"
              style={{ color: colors.fontcolor1 }}
            >
              <span
                className="text-4xl font-serif mr-1 float-left leading-none"
                style={{ color: colors.fontcolor1 }}
              >
                I
              </span>
              am a designer with a focus on building meaningful user experiences
              through structured logic and intentional software engineering.
            </p>

            <p>
              I enjoy working on projects where architecture, data modeling, and
              real-world business requirements converge. My goal is always to
              translate complex, messy operational needs into simple, reliable
              software engines.
            </p>

            <p>
              Driven by continuous learning, I strive to stay at the forefront
              of core engineering practices while maintaining a deep respect for
              clean code, deliberate constraints, and meaningful collaboration.
            </p>

            {/* Classic Signature / Footer Note */}
            <div
              className="pt-8 border-t mt-12 flex justify-between items-center"
              style={{ borderColor: colors.bordercolor1 }}
            >
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: colors.fontcolor2 }}
              >
                Est. Jagannath Univ.
              </span>
              <span
                className="text-xs font-serif italic"
                style={{ color: colors.fontcolor2 }}
              >
                Designed for clarity & efficiency
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
