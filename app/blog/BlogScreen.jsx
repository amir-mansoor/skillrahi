"use client";

import Link from "next/link";
import { Clock } from "lucide-react";

export default function BlogScreen({ blogs }) {
  console.log(blogs);
  if (blogs.length === 0)
    return (
      <div className="text-center py-20 text-gray-500">
        No blog blogs found. Try adding one in Supabase.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto mt-20 px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          📖 SkillRahi Blog
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Read short, practical articles — learn, grow, and get inspired.
        </p>
        {/* <Link
          href="/write"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all"
        >
          <PenSquare className="w-5 h-5" /> Write an Article
        </Link> */}
      </div>

      {/* Blog List */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {blog.description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />{" "}
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <span>3–5 min read</span>
            </div>

            <Link
              href={`/blog/${blog.slug}`}
              className="inline-block mt-4 text-indigo-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
