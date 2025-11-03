import axios from "axios";
import BlogScreen from "./BlogScreen";
export default async function BlogPage() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
  const blogs = res.data;

  return <BlogScreen blogs={blogs} />;
}
