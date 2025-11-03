import LessonPage from "./LessonPage";

// shared data fetcher
async function getPath(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/learn/${id}`,
    {
      cache: "no-store", // important
    }
  );

  if (!res.ok) throw new Error("Path not found");

  return res.json(); // json() here works
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const path = await getPath(id);

  return {
    title: path.title,
    description: path.description,
  };
}

export default async function LearnDetailPage({ params }) {
  const { id } = await params;
  const path = await getPath(id);
  return <LessonPage path={path} />;
}
