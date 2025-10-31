import Link from "next/link";
import { BookOpen, PenSquare, Clock } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      slug: "best-free-resources-for-students",
      title: "📚 Best Free Resources for Students in Pakistan",
      excerpt:
        "Find 100% free websites, tools, and communities to level up your digital skills — all focused on Pakistani learners.",
      date: "Oct 2025",
      readTime: "3 min read",
    },
    {
      slug: "how-to-build-portfolio-without-job",
      title: "💼 How to Build a Portfolio Without a Job",
      excerpt:
        "No job yet? No problem. Learn how to create real projects, showcase your work, and attract clients or employers.",
      date: "Oct 2025",
      readTime: "4 min read",
    },
    {
      slug: "my-first-freelancing-experience",
      title: "💬 My First Freelancing Experience (Urdu + English)",
      excerpt:
        "A short story about how I got my first order as a student — tips, mistakes, and lessons from Pakistan’s freelancing world.",
      date: "Nov 2025",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20 px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          📖 SkillRahi Blog
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Read short, practical articles in Urdu + English — learn, grow, and
          get inspired.
        </p>
        <Link
          href="/write"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all"
        >
          <PenSquare className="w-5 h-5" /> Write an Article
        </Link>
      </div>

      {/* Blog List */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
              <span>{post.date}</span>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-indigo-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
