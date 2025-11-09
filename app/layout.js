import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
// import { SessionProvider } from "next-auth/react";
import { Providers } from "./sessionProvider";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skill Rahi | Learn Skills and Grow with AI Tools",
  description: "Skill Rahi helps you learn digital skills, explore AI tools, and grow your career online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        {/* Google Search Console Meta Tag */}
       <meta name="google-site-verification" content="9yHnDG1gaKMkOWpEoijiQ_6l1muMdb-nSp3han7Ipz8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
