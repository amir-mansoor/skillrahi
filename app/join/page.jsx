"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import AlertComponent from "../components/Alert";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function JoinPage() {
  const { profile } = useAuth();
  const [name, setName] = useState(profile.name || "");
  const [email, setEmail] = useState(profile.email || "");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", status: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ message: "", status: "" });

    if (!name || !email) {
      setAlert({
        message: "Please enter both your name and email.",
        status: "error",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("subscribers")
      .insert([{ name, email }]);
    setLoading(false);

    if (error) {
      setAlert({
        message: "Something went wrong. Try again later.",
        status: "error",
      });
      toast.error("Something went wrong");
    } else {
      setAlert({
        message: `Thanks for joining SkillRahi, ${name}!`,
        status: "success",
      });
      setName("");
      setEmail("");
      toast.success("You have subscribed our newsletter");
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Join <span className="text-blue-600">SkillRahi</span> for Free 🎓
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-md">
            Become part of Pakistan’s fastest-growing student tech community.
            Learn practical skills, build real projects, and grow together.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✅ Free learning paths for students</li>
            <li>✅ Community help & project feedback</li>
            <li>✅ AI, Freelancing, and Web Dev content</li>
          </ul>
        </div>

        {/* Right Side Card */}
        <Card className="shadow-lg border-blue-100">
          <CardHeader>
            {alert.message && (
              <AlertComponent message={alert.message} status={alert.status} />
            )}
            <CardTitle className="text-center text-2xl font-bold text-gray-800">
              Get Started 🚀
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg font-semibold"
            >
              <Link href="https://discord.gg/skillrahi" target="_blank">
                💬 Join Discord Community
              </Link>
            </Button>

            <div className="flex items-center gap-2 my-4">
              <div className="h-[1px] bg-gray-300 flex-1" />
              <span className="text-gray-400 text-sm">or</span>
              <div className="h-[1px] bg-gray-300 flex-1" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-6 text-base"
              />
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-6 text-base"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-lg font-semibold disabled:opacity-50"
              >
                {loading ? "Joining..." : "📬 Get Email Updates"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-3">
              No spam. Only helpful student resources & opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
