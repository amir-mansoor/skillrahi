import axios from "axios";
import BlogScreen from "./BlogScreen";
export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {});
  const blogs = await res.json();

  return <BlogScreen blogs={blogs} />;
}
