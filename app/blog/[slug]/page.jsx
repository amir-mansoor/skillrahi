import BlogContent from "./BlogContent";

// shared data fetcher
async function getPath(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
    {
      cache: "no-store", // important
    }
  );

  if (!res.ok) throw new Error("blog not found");

  return res.json(); // json() here works
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getPath(slug);

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function LearnDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getPath(slug);

  return <BlogContent blog={blog} />;
}
