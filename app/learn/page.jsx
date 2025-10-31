"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseclient";

const LearnPage = () => {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaths = async () => {
      const { data, error } = await supabase
        .from("learn")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.log("Error fetching learn paths:", error);
      else setPaths(data);

      setLoading(false);
    };
    fetchPaths();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-600">
        Loading learning paths...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto mt-24 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          📘 Explore Learning Paths
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          Choose your path and start learning practical, in-demand skills — all
          for free.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {paths.map((path) => (
          <div
            key={path.id}
            className="group border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all rounded-2xl p-6 hover:-translate-y-1"
          >
            {/* Gradient bar (based on category color logic) */}
            <div
              className={`h-2 w-20 bg-gradient-to-r ${
                path.category === "Web Dev"
                  ? "from-blue-500 to-indigo-600"
                  : path.category === "AI Tools"
                  ? "from-purple-500 to-pink-600"
                  : path.category === "Freelancing"
                  ? "from-green-500 to-emerald-600"
                  : path.category === "Design"
                  ? "from-rose-500 to-orange-500"
                  : "from-yellow-400 to-orange-500"
              } rounded-full mb-4`}
            ></div>

            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {path.title}
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {path.description}
            </p>

            <Link href={`/learn/${path.id}`}>
              <button className="cursor-pointer mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-sm">
                Start Learning
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
