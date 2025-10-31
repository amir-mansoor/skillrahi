"use client";

import { supabase } from "@/lib/supabaseclient";
import { useEffect, useState } from "react";
import Link from "next/link";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setProjects(data);
    };

    fetchProjects();
  }, []);

  // Group projects by category
  const groupedProjects = projects.reduce((acc, proj) => {
    if (!acc[proj.category]) acc[proj.category] = [];
    acc[proj.category].push(proj);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          🚀 Practice Projects
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          Build simple, real-world projects to strengthen your skills and grow
          your portfolio. Practice what you learn — step by step.
        </p>
      </div>

      {/* Project Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(groupedProjects).map(([category, items]) => (
          <div
            key={category}
            className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {category}
            </h2>

            <div className="space-y-4">
              {items.map((proj) => (
                <Link
                  href={`/projects/${proj.id}`}
                  key={proj.id}
                  className="block border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all"
                >
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {proj.title}
                  </h3>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                      proj.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : proj.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {proj.difficulty}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-900">
          💪 Keep Building. Keep Growing.
        </h2>
        <p className="text-gray-600 mt-3">
          Share your project links in our community — get feedback, help others,
          and inspire new learners!
        </p>
        <a
          href="https://discord.gg/skillrahi"
          target="_blank"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          Join Discord Community
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
