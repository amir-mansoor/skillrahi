import axios from "axios";
import ProjectsScreen from "./ProjectsScreen";

export const metadata = {
  title: "Learn By Projects",
  description: "Learn through projects on hands practice",
};
export default async function ProjectsPage() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`
  );
  const projects = res.data;

  return <ProjectsScreen projects={projects} />;
}
