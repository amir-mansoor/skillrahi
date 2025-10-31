"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    let action;
    if (isLogin) {
      action = supabase.auth.signInWithPassword({ email, password });
    } else {
      action = supabase.auth.signUp({ email, password });
    }

    const { error, data } = await action;
    if (!isLogin) {
      await supabase.from("users").insert([
        {
          id: data.user.id,
          name,
          email: data.user.email,
        },
      ]);
    }
    if (error) toast.error(error.message);
    else {
      setMessage(
        isLogin
          ? "✅ Logged in successfully!"
          : "✅ Sign-up successful! Please check your email."
      );
      if (isLogin) router.push("/projects");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back 👋" : "Join SkillRahi 🚀"}
        </h1>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <Input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-5"
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-5"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-5"
          />

          <Button
            type="submit"
            className="w-full py-5 text-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">{message}</p>
        )}

        <p className="text-center mt-6 text-sm text-gray-500">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create an account" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
}
