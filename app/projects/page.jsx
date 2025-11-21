import ProjectsScreen from "./ProjectsScreen";

export const metadata = {
  title: "Learn By Projects",
  description: "Learn through projects on hands practice",
};
export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: "no-store",
  });
  const projects = await res.json();

  return <ProjectsScreen projects={projects} />;
}
