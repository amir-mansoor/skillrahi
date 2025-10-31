"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseclient";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { profile, setUser } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className="shadow-sm sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Skill<span className="text-yellow-500">Rahi</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/learn" className="hover:text-blue-600 transition-colors">
            Learn
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/community"
            className="hover:text-blue-600 transition-colors"
          >
            Community
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Auth Section */}
        {profile ? (
          <div className="flex items-center gap-3">
            <span className="text-gray-700">👋 {profile.name}</span>
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            <Link href="/auth">Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
