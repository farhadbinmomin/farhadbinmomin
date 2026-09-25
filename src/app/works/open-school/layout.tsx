import ProjectLayout from "../components/ProjectLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProjectLayout projectName="openSchool">{children}</ProjectLayout>;
}
