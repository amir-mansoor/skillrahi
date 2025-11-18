"use client";

import { useEffect } from "react";

export default function TrackView() {
  useEffect(() => {
    const startTime = Date.now();

    // Create new session ID for this visit (every reload = new session)
    if (!sessionStorage.getItem("session_id")) {
      sessionStorage.setItem("session_id", crypto.randomUUID());
    }

    const sessionId = sessionStorage.getItem("session_id");

    const handleUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);

      const payload = JSON.stringify({
        sessionId,
        timeSpent,
      });

      // sendBeacon = reliable on close (won't show errors)
      navigator.sendBeacon("/api/track", payload);
    };

    // Trigger ONLY when user leaves
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
}
