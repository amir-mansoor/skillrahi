import ProjectDetailPage from "./ProjectDetailPage";

export async function generateMetadata() {
  return {
    title: "My Project ",
    description: "My Project description",
  };
}

export default async function ProjectDetail() {
  const project = {
    id: 1,
    category: "AI",
    difficulty: "Hard",
    title: "AI Face Detection",
    description: "Hello world",
    content: "# Markdown Content will be renderd",
  };

  return <ProjectDetailPage project={project} />;
}
