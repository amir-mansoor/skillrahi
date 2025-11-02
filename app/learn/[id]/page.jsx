import LessonPage from "./LessonPage";

export async function generateMetadata() {
  return {
    title: "Title of the lesson",
    description: "description of the lesson",
  };
}

export default async function LearnDetailPage() {
  const post = {
    title: "This is the title",
    description: "This is the description",
    content: "# hello world",
    difficulty: "Hard",
  };

  return <LessonPage lesson={post} />;
}
