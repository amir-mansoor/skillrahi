import { supabase } from "@/lib/supabaseclient";
import ProjectDetailPage from "./ProjectDetailPage";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (!project) return { title: "Not found" };

  return {
    title: project.title + " - SkillRahi",
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();
  return <ProjectDetailPage project={project} />;
}
