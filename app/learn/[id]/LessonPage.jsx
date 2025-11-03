"use client";

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github-dark.min.css";
import rehypeHighlight from "rehype-highlight";
import { Button } from "@/components/ui/button";

import remarkGfm from "remark-gfm";

const rehypeHighlightWithAutoDetect = (options) =>
  rehypeHighlight({ ...options, detect: true });

const LessonPage = ({ path }) => {
  const [status, setStatus] = useState(null);

  const [saving, setSaving] = useState(false);

  // 🟢 Mark as Complete
  const handleMarkComplete = async () => {};

  if (!path)
    return (
      <p className="text-center py-20 text-gray-500">
        Lesson not found or has been removed.
      </p>
    );

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{path.title}</h1>

      {/* Meta Info */}
      <p className="text-gray-500 mb-6">
        Category:{" "}
        <span className="font-medium text-gray-700">{path.category}</span> |{" "}
        Difficulty:{" "}
        <span className="font-medium text-gray-700">{path.difficulty}</span>
      </p>

      {/* Short Description */}
      <p className="text-gray-700 mb-8 leading-relaxed">{path.description}</p>

      {/* Markdown Content */}
      <article className="prose prose-blue max-w-none mb-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlightWithAutoDetect]}
        >
          {path.content}
        </ReactMarkdown>
      </article>

      {/* Progress Button */}
      {status === "completed" ? (
        <Button disabled className="bg-green-600 text-white cursor-pointer">
          ✅ Completed
        </Button>
      ) : (
        <Button
          onClick={handleMarkComplete}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        >
          {saving ? "Saving..." : "Mark as Complete"}
        </Button>
      )}
    </section>
  );
};

export default LessonPage;
