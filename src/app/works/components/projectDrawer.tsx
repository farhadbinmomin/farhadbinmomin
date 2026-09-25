"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import projectMess from "@/app/works/mess/data/mess.json";
import projectOpenSchool from "@/app/works/open-school/data/openSchool.json";
const projects = {
  mess: projectMess,
  openSchool: projectOpenSchool,
} as const;
type ProjectName = keyof typeof projects;
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FileText,
} from "lucide-react";

export const colors = {
  bgcolor1: "#0F172A", // Primary background color
  bgcolor2: "#1E293B", // Secondary background/accent surface
  fontcolor1: "#F8FAFC", // Main headings and primary text
  fontcolor2: "#94A3B8", // Secondary text/subtitles
  bordercolor1: "#334155", // Primary borders
  bordercolor2: "#475569", // Secondary/hover borders
};

export default function ProjectDrawer({ projectName }: { projectName: ProjectName }) {
  const project = projects[projectName]; // For now, we only have the Multi-Mess project data. This can be extended to support multiple projects in the future.
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Sync state with localStorage on initial mount
  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem("drawer-collapsed");
    if (savedState !== null) {
      setIsCollapsed(savedState === "true");
    }
  }, []);

  const toggleDrawer = () => {
    setIsCollapsed((prev) => {
      const nextState = !prev;
      localStorage.setItem("drawer-collapsed", String(nextState));
      return nextState;
    });
  };

  // Prevent layout shift during initial load
  if (!isMounted) {
    return (
      <aside className="w-64 shrink-0 border-r border-[#334155] bg-[#0F172A]" />
    );
  }

  return (
    <aside
      className={`relative shrink-0 border-r border-[#334155] bg-[#0F172A] transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Collapse / Expand Toggle Button */}
      <button
        onClick={toggleDrawer}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#334155] bg-[#1E293B] text-[#F8FAFC] shadow-md transition-colors hover:border-[#475569] hover:bg-[#334155]"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3.5 w-3.5 text-[#94A3B8]" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5 text-[#94A3B8]" />
        )}
      </button>

      <div className="sticky top-0 p-4">
        {/* Header section */}
        <Link
          href={project.href}
          className="group relative flex items-center gap-3 overflow-hidden rounded-md p-2 transition-colors hover:bg-[#1E293B]"
        >
          {!isCollapsed ? (
            <div className="truncate">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#94A3B8]">
                Project
              </p>
              <h2 className="mt-0.5 truncate text-base font-semibold text-[#F8FAFC]">
                {project.shortTitle}
              </h2>
            </div>
          ) : (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#1E293B] font-bold text-[#F8FAFC]">
              {project.shortTitle?.[0] || "P"}
            </div>
          )}

          {/* Tooltip when collapsed */}
          {isCollapsed && (
            <div className="absolute left-full ml-3 hidden rounded bg-[#1E293B] px-2.5 py-1 text-xs font-medium text-[#F8FAFC] border border-[#334155] shadow-lg group-hover:block z-50 whitespace-nowrap">
              {project.shortTitle}
            </div>
          )}
        </Link>

        <nav className="mt-6 space-y-1">
          {/* Overview Link */}
          <Link
            href="/works/mess"
            className={`group relative flex items-center rounded-md p-2 text-sm transition-colors ${
              pathname === "/works/mess"
                ? "bg-[#1E293B] font-medium text-[#F8FAFC]"
                : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
            }`}
          >
            <LayoutDashboard className="h-4 w-4 shrink-0 text-[#94A3B8]" />

            {!isCollapsed && <span className="ml-3 truncate">Overview</span>}

            {/* Tooltip when collapsed */}
            {isCollapsed && (
              <div className="absolute left-full ml-3 hidden rounded bg-[#1E293B] px-2.5 py-1 text-xs font-medium text-[#F8FAFC] border border-[#334155] shadow-lg group-hover:block z-50 whitespace-nowrap">
                Overview
              </div>
            )}
          </Link>

          <div className="my-3 border-t border-[#334155]" />

          {/* Dynamic Navigation Items */}
          {project.navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center rounded-md p-2 text-sm transition-colors ${
                  active
                    ? "bg-[#1E293B] font-medium text-[#F8FAFC]"
                    : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                }`}
              >
                <FileText className="h-4 w-4 shrink-0 text-[#94A3B8]" />

                {!isCollapsed && (
                  <span className="ml-3 truncate">{item.title}</span>
                )}

                {/* Tooltip when collapsed */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 hidden rounded bg-[#1E293B] px-2.5 py-1 text-xs font-medium text-[#F8FAFC] border border-[#334155] shadow-lg group-hover:block z-50 whitespace-nowrap">
                    {item.title}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
