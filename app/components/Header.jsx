"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (mobileMenuRef.current) {
      setMenuHeight(mobileMenuRef.current.scrollHeight);
    }
  }, [mobileMenuRef, isMobileMenuOpen]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/auth" });
  };

  const navLinks = [
    { href: "/learn", label: "Learn" },
    { href: "/projects", label: "Projects" },
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contributors", label: "Contributors" },
  ];

  return (
    <header className="shadow-sm sticky top-0 bg-white/80 backdrop-blur-md z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Skill<span className="text-yellow-500">Rahi</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Auth Section */}
        <div className="hidden md:flex items-center gap-3">
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>{session.user.name}</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
                <span onClick={handleLogout} className="w-full">
                  <DropdownMenuItem className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </span>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              <Link href="/auth">Login</Link>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu with transition */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ maxHeight: isMobileMenuOpen ? `${menuHeight}px` : "0px" }}
      >
        <nav className="flex flex-col space-y-2 py-4 px-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* <div className="mt-2">
            {session?.user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth"
                className="block py-2 px-4 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
