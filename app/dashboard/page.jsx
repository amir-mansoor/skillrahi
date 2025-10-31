"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "@/lib/supabaseclient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LogOut, BookOpen, FolderOpen, Edit } from "lucide-react";

export default function DashboardPage() {
  const { user, profile, loading, setProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || "",
    email: profile?.email || "",
    password: "",
  });
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [progress, setProgress] = useState({ projects: [], learn: [] });
  const [progressLoading, setProgressLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user?.id) return;
      setProgressLoading(true);

      // 1️⃣ Fetch user progress
      const { data: progressData, error } = await supabase
        .from("user_progress")
        .select("item_id, type, status, updated_at")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching progress:", error);
        setProgressLoading(false);
        return;
      }

      // 2️⃣ Separate by type
      const projectIds = progressData
        .filter((i) => i.type === "project")
        .map((i) => i.item_id);

      const learnIds = progressData
        .filter((i) => i.type === "learn")
        .map((i) => i.item_id);

      // 3️⃣ Fetch titles from both tables
      const [projectsRes, learnRes] = await Promise.all([
        projectIds.length
          ? supabase.from("projects").select("id, title").in("id", projectIds)
          : { data: [] },
        learnIds.length
          ? supabase.from("learn").select("id, title").in("id", learnIds)
          : { data: [] },
      ]);

      // 4️⃣ Merge titles back with progress data
      const projects = progressData
        .filter((i) => i.type === "project")
        .map((p) => ({
          ...p,
          title:
            projectsRes.data?.find((proj) => proj.id === p.item_id)?.title ||
            "Untitled Project",
        }));

      const learn = progressData
        .filter((i) => i.type === "learn")
        .map((l) => ({
          ...l,
          title:
            learnRes.data?.find((lesson) => lesson.id === l.item_id)?.title ||
            "Untitled Lesson",
        }));

      setProgress({ projects, learn });
      setProgressLoading(false);
    };

    fetchProgress();
  }, [user]);

  const handleSave = async () => {
    setSaving(true);
    setErrorMsg("");

    try {
      // 1️⃣ Update custom `users` table
      const { error: dbError } = await supabase
        .from("users")
        .update({
          name: formData.name,
          email: formData.email,
        })
        .eq("id", user.id);

      if (dbError) throw dbError;

      // 2️⃣ Update Supabase Auth email/password
      const updates = {};
      if (formData.email && formData.email !== user.email)
        updates.email = formData.email;
      if (formData.password) updates.password = formData.password;

      console.log(updates);

      if (Object.keys(updates).length > 0) {
        const { error: authError } = await supabase.auth.updateUser(updates);

        if (authError) throw authError;
      }

      // 3️⃣ Update local context state
      setProfile({
        ...profile,
        name: formData.name,
        email: formData.email,
      });

      setOpen(false);
    } catch (err) {
      console.error("Update error:", err.message);
      setErrorMsg(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
      </div>
    );

  if (!user)
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          You’re not logged in ⚠️
        </h2>
        <Link href="/auth">
          <Button>Login to Continue</Button>
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          <Card className="p-6 text-center relative">
            <Avatar className="h-16 w-16 mx-auto mb-3">
              <AvatarFallback>
                {profile?.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">
              {profile?.name || "Student"}
            </h2>
            <p className="text-gray-500 text-sm">{profile?.email}</p>
            <p className="text-gray-400 text-xs mt-1">
              Joined:{" "}
              {profile?.created_at
                ? new Date(profile.created_at).toLocaleDateString()
                : "—"}
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-4 flex gap-2 mx-auto"
              onClick={() => setOpen(true)}
            >
              <Edit className="h-4 w-4" /> Edit Profile
            </Button>
          </Card>

          <Card className="p-6">
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold">
                Quick Links
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-3">
              <Link href="/projects">
                <Button variant="outline" className="w-full flex gap-2">
                  <FolderOpen className="h-4 w-4" /> Explore Projects
                </Button>
              </Link>
              <Link href="/learn">
                <Button variant="outline" className="w-full flex gap-2">
                  <BookOpen className="h-4 w-4" /> Learning Paths
                </Button>
              </Link>
            </div>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Welcome back, {profile?.name || "Student"} 👋
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Manage your learning and projects from one place.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                My Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              {progressLoading ? (
                <p className="text-gray-500">Loading your progress...</p>
              ) : progress.projects.length === 0 &&
                progress.learn.length === 0 ? (
                <p className="text-gray-500">No progress tracked yet.</p>
              ) : (
                <div className="space-y-6">
                  {progress.projects.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Projects ({progress.projects.length})
                      </h3>
                      <ul className="space-y-2">
                        {progress.projects.map((p) => (
                          <li key={p.item_id}>
                            <Link
                              href={`/projects/${p.item_id}`}
                              className="text-blue-600 hover:underline"
                            >
                              {p.title}
                            </Link>{" "}
                            —{" "}
                            <span
                              className={`${
                                p.status === "completed"
                                  ? "text-green-600 font-medium"
                                  : "text-yellow-600"
                              }`}
                            >
                              {p.status}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {progress.learn.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Learning Paths ({progress.learn.length})
                      </h3>
                      <ul className="space-y-2">
                        {progress.learn.map((l) => (
                          <li key={l.item_id}>
                            <Link
                              href={`/learn/${l.item_id}`}
                              className="text-blue-600 hover:underline"
                            >
                              {l.title}
                            </Link>{" "}
                            —{" "}
                            <span
                              className={`${
                                l.status === "completed"
                                  ? "text-green-600 font-medium"
                                  : "text-yellow-600"
                              }`}
                            >
                              {l.status}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Edit Profile Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-3">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your email"
              />
            </div>
            <div className="pt-4 border-t">
              <Label htmlFor="password">Change Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="New password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank if you don’t want to change password.
              </p>
            </div>
            {errorMsg && (
              <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" /> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
