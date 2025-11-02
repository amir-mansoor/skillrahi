import BlogContent from "./BlogContent";

export async function generateMetadata() {
  return {
    title: "Blog Title",
    description: "Blog description",
  };
}

export default async function BlogDetailPage() {
  const post = {
    id: 1,
    title: "Hello world",
    description: "This is description",
    created_at: "2025-10-31 14:32:01.808144+00",
    content: "# Blog Title Goes Here Markdown",
    slug: "hello-slug",
    author: "Admin",
  };

  return <BlogContent post={post} />;
}
