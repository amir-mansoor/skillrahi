export const metadata = {
  title: "SkillRahi Blog – Learn, Build & Grow Digitally",
  description:
    "Read short, practical articles in Urdu + English for students in Pakistan. Learn freelancing, coding, and digital skills with SkillRahi.",
  openGraph: {
    title: "SkillRahi Blog – Learn, Build & Grow Digitally",
    description:
      "Free learning resources and blogs for Pakistani students to level up their tech and freelancing skills.",
    url: "https://skillrahi.vercel.app/blog",
    siteName: "SkillRahi",
    images: [
      {
        url: "/og-image.png", // create this later
        width: 1200,
        height: 630,
        alt: "SkillRahi Blog",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@skillrahi",
    title: "SkillRahi Blog",
    description:
      "Free learning and freelancing resources for Pakistani students.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}
