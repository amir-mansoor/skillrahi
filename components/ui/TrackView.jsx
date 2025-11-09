"use client";

import { useEffect } from "react";

export default function TrackView() {
  useEffect(() => {
    const hasTracked = localStorage.getItem("view_tracked");
    if (hasTracked) return; // already tracked this session

    fetch("/api/track", { method: "POST" });
    localStorage.setItem("view_tracked", "true");
  }, []);

  return null;
}
