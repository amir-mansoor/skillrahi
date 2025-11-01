"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import "highlight.js/styles/github-dark.min.css";
import rehypeHighlight from "rehype-highlight";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import remarkGfm from "remark-gfm";

const rehypeHighlightWithAutoDetect = (options) =>
  rehypeHighlight({ ...options, detect: true });

const LessonPage = ({ lesson }) => {
  const { id } = useParams();
  const { user } = useAuth();

  const [status, setStatus] = useState(null);

  const [saving, setSaving] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!id || !user || initialized) return;
    setInitialized(true);

    const fetchLessonAndProgress = async () => {
      // 🟢 Fetch or initialize progress
      const { data: progressData, error: progressError } = await supabase
        .from("user_progress")
        .select("status")
        .eq("user_id", user.id)
        .eq("item_id", id)
        .eq("type", "learn")
        .maybeSingle();

      if (progressError) console.error(progressError.message);

      if (progressData) {
        setStatus(progressData.status);
      } else {
        // ✅ Create "started" progress entry safely
        const { error: insertError } = await supabase
          .from("user_progress")
          .upsert(
            {
              user_id: user.id,
              item_id: id,
              type: "learn",
              status: "started",
            },
            { onConflict: "user_id,item_id,type" }
          );

        if (insertError) console.error("Insert error:", insertError.message);
        setStatus("started");
      }
    };

    fetchLessonAndProgress();
  }, [id, user, initialized]);

  // 🟢 Mark as Complete
  const handleMarkComplete = async () => {
    if (!user) return alert("Please login to save progress.");
    setSaving(true);

    const { error } = await supabase.from("user_progress").upsert(
      {
        user_id: user.id,
        item_id: id,
        type: "learn",
        status: "completed",
      },
      { onConflict: "user_id,item_id,type" }
    );

    setSaving(false);
    if (error) {
      console.error("Error saving progress:", error.message);
      return alert("Something went wrong while saving progress.");
    }

    setStatus("completed");
  };

  if (!lesson)
    return (
      <p className="text-center py-20 text-gray-500">
        Lesson not found or has been removed.
      </p>
    );

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{lesson.title}</h1>

      {/* Meta Info */}
      <p className="text-gray-500 mb-6">
        Category:{" "}
        <span className="font-medium text-gray-700">{lesson.category}</span> |{" "}
        Difficulty:{" "}
        <span className="font-medium text-gray-700">{lesson.difficulty}</span>
      </p>

      {/* Short Description */}
      <p className="text-gray-700 mb-8 leading-relaxed">{lesson.description}</p>

      {/* Markdown Content */}
      <article className="prose prose-blue max-w-none mb-10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlightWithAutoDetect]}
        >
          {lesson.content}
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
