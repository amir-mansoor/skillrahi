"use client";

import { useState } from "react";
import Link from "next/link";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      category: "AI",
      difficulty: "Hard",
      title: "AI Face Detection",
    },
  ]);

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
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {project.category}
            </h2>

            <div className="space-y-4">
              <Link
                href={`/projects/${project.id}`}
                className="block border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all"
              >
                <h3 className="font-semibold text-gray-800 text-lg">
                  {project.title}
                </h3>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    project.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : project.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {project.difficulty}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
