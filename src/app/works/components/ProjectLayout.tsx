import ProjectDrawer from "@/app/works/components/projectDrawer";

type ProjectLayoutProps = {
  children: React.ReactNode;
  projectName: "mess" | "openSchool";
};

export default function ProjectLayout({ children, projectName }: ProjectLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <ProjectDrawer projectName={projectName} />

      <main className="min-w-0 flex-1">
        <div className="mx-auto max-w-5xl px-8 py-12">{children}</div>
      </main>
    </div>
  );
}
