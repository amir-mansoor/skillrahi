import { supabase } from "@/lib/supabaseclient";
import LessonPage from "./LessonPage";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const { data: post } = await supabase
    .from("learn")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) return { title: "Not found" };

  return {
    title: post.title + " - SkillRahi",
    description: post.description,
  };
}

export default async function LearnDetailPage({ params }) {
  const { id } = await params;

  const { data: post } = await supabase
    .from("learn")
    .select("*")
    .eq("id", id)
    .single();

  return <LessonPage lesson={post} />;
}
