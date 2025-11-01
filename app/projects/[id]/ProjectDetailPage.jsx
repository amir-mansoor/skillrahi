"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";

const ProjectDetailPage = ({ project }) => {
  const { id } = useParams();
  const { user } = useAuth();

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false); // ✅ prevent re-run

  useEffect(() => {
    if (!id || !user || initialized) return; // ✅ skip reruns
    setInitialized(true);

    const fetchData = async () => {
      // 🟢 2. Fetch or insert progress
      const { data: progressData, error: progressError } = await supabase
        .from("user_progress")
        .select("status")
        .eq("user_id", user.id)
        .eq("item_id", id)
        .eq("type", "project")
        .maybeSingle();

      if (progressError) console.error(progressError.message);

      if (progressData) {
        setStatus(progressData.status);
      } else {
        // ✅ Safe upsert instead of insert
        const { error: insertError } = await supabase
          .from("user_progress")
          .upsert(
            {
              user_id: user.id,
              item_id: id,
              type: "project",
              status: "started",
            },
            { onConflict: "user_id,item_id,type" }
          );

        if (insertError) console.error("Insert error:", insertError.message);
        setStatus("started");
      }
    };

    fetchData();
  }, [id, user, initialized]);

  // 🟢 Mark as Complete
  const handleMarkComplete = async () => {
    if (!user) {
      alert("Please login to save progress.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("user_progress").upsert(
      {
        user_id: user.id,
        item_id: id,
        type: "project",
        status: "completed",
      },
      { onConflict: "user_id,item_id,type" }
    );

    setLoading(false);

    if (error) {
      console.error("Error saving progress:", error.message);
      alert("Something went wrong while saving progress.");
      return;
    }

    setStatus("completed");
  };

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
        <ReactMarkdown>{project.content}</ReactMarkdown>
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
