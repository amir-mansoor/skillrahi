"use client";

import { useState } from "react";

import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { Button } from "@/components/ui/button";
import remarkGfm from "remark-gfm";

const ProjectDetailPage = ({ project }) => {
  const { id } = useParams();

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🟢 Mark as Complete
  const handleMarkComplete = async () => {};

  if (!project)
    return <p className="text-center py-20 text-gray-500">Loading...</p>;

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{project.title}</h1>
      <p className="text-gray-500 mb-6">
        Category: {project.category} | Difficulty: {project.difficulty}
      </p>

      <p className="text-gray-700 mb-8">{project.description}</p>

      <article className="prose prose-blue max-w-none mb-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {project.content}
        </ReactMarkdown>
      </article>

      {status === "completed" ? (
        <Button disabled className="bg-green-600 text-white cursor-pointer">
          ✅ Completed
        </Button>
      ) : (
        <Button
          onClick={handleMarkComplete}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        >
          {loading ? "Saving..." : "Mark as Complete"}
        </Button>
      )}
    </section>
  );
};

export default ProjectDetailPage;
