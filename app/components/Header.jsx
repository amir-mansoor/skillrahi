"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseclient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, profile, setProfile, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Sign out from Supabase Auth
      await supabase.auth.signOut();

      // Clear local context state
      setUser(null);
      setProfile(null);

      // redirect to homepage
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
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
        {user ? (
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger>{profile?.name}</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
