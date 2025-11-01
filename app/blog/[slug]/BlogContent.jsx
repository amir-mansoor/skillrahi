"use client";
import { supabase } from "@/lib/supabaseclient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

const BlogContent = ({ post }) => {
  if (!post)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Post not found 😢</h2>
        <Link
          href="/blog"
          className="text-indigo-600 font-semibold hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  return (
    <div className="max-w-3xl mx-auto mt-20 px-6 py-12">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-indigo-600 hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {post.title}
      </h1>
      <p className="text-gray-600 text-lg mb-6">{post.description}</p>

      <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          {new Date(post.created_at).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
            day: "numeric",
          })}
        </div>
        {post.author && (
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" /> {post.author}
          </div>
        )}
      </div>

      {/* Markdown Content */}
      <article className="prose prose-indigo max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogContent;
