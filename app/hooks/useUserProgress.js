"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { useAuth } from "@/app/context/AuthContext";

export function useUserProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState({ projects: [], learn: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    (async () => {
      setLoading(true);

      const { data } = await supabase
        .from("user_progress")
        .select("item_id, type, status, updated_at")
        .eq("user_id", user.id);

      const projectIds = data
        .filter((i) => i.type === "project")
        .map((i) => i.item_id);
      const learnIds = data
        .filter((i) => i.type === "learn")
        .map((i) => i.item_id);

      const [projectsRes, learnRes] = await Promise.all([
        projectIds.length
          ? supabase.from("projects").select("id,title").in("id", projectIds)
          : { data: [] },
        learnIds.length
          ? supabase.from("learn").select("id,title").in("id", learnIds)
          : { data: [] },
      ]);

      setProgress({
        projects: data
          .filter((i) => i.type === "project")
          .map((i) => ({
            ...i,
            title: projectsRes.data?.find((p) => p.id === i.item_id)?.title,
          })),
        learn: data
          .filter((i) => i.type === "learn")
          .map((i) => ({
            ...i,
            title: learnRes.data?.find((l) => l.id === i.item_id)?.title,
          })),
      });

      setLoading(false);
    })();
  }, [user]);

  return { progress, loading };
}
