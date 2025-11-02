"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      try {
        const res = await axios.post("/api/register", {
          name,
          email,
          password,
        });

        // signIn does NOT throw -> it always resolves
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false, // <- important
        });

        if (result?.error) {
          toast.error(result.error);
          return; // stop here, dont redirect
        }

        // success
        router.push("/");
      } catch (err) {
        // axios errors come here
        toast.error(
          err?.response?.data?.error || err?.message || "Something went wrong"
        );
      }
    } else {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // <- important
      });

      if (result?.error) {
        toast.error(result.error);
        return; // stop here, dont redirect
      }
      toast.success("Login Successfull");
      router.push("/");
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
};

export default AuthScreen;
