import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
// import { SessionProvider } from "next-auth/react";
// import { Providers } from "./sessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SkillRahi – Learn. Build. Grow.",
    template: "%s | SkillRahi",
  },
  description:
    "A digital learning hub for students. Learn coding, freelancing, and practical projects for free.",
  keywords: [
    "SkillRahi",
    "Pakistan",
    "learn coding free",
    "freelancing",
    "digital skills",
  ],
  authors: [{ name: "Qazi", url: "https://skillrahi.vercel.app" }],
  creator: "Qazi",
  metadataBase: new URL("https://skillrahi.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
          <Toaster />
          <Header />
          {children}
          <Footer />
        
      </body>
    </html>
  );
}
