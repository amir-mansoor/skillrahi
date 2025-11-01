import { supabase } from "@/lib/supabaseclient";
import BlogContent from "./BlogContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("blog")
    .select("title, description")
    .eq("slug", slug)
    .single();

  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  // ✅ only fetch one time
  const { data: post } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", slug)
    .single();

  return <BlogContent post={post} />;
}
