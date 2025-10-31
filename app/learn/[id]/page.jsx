"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();
      if (!error) setProject(data);
    };
    fetchProject();
  }, [id]);

  if (!project) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{project.title}</h1>
      <p className="text-gray-500 mb-6">
        Category: {project.category} | Difficulty: {project.difficulty}
      </p>

      <p className="text-gray-700 mb-8">{project.description}</p>

      <article className="prose prose-blue">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </article>
    </section>
  );
}
