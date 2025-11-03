import ProjectDetailPage from "./ProjectDetailPage";

// shared data fetcher
async function getPath(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
    {
      cache: "no-store", // important
    }
  );

  if (!res.ok) throw new Error("Path not found");

  return res.json(); // json() here works
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getPath(id);

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function LearnDetailPage({ params }) {
  const { id } = await params;
  const project = await getPath(id);
  return <ProjectDetailPage project={project} />;
}
