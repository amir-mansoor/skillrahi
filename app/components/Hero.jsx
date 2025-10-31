import Image from "next/image";
import Link from "next/link";
import HomeProjects from "./HomeProjects";
import ArticlesForHero from "./ArticlesForHero";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 text-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      {/* Headline */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          Learn. Build. Earn —{" "}
          <span className="text-blue-600">together from Pakistan 🇵🇰</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-gray-600">
          Free, practical learning paths for students who want to grow their
          digital skills.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/learn"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            🚀 Start Learning
          </Link>
          <Link
            href="/community"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:text-white "
          >
            💬 Join Community
          </Link>
        </div>
      </div>

      {/* 🌱 Learning Paths */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800">
            🌐 Web Development
          </h3>
          <p className="text-gray-600 mt-2">
            Learn HTML, CSS, JavaScript, and React — build your first websites
            and projects.
          </p>
          <Link
            href="/learn/web-development"
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            Start Path →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800">
            💼 Freelancing Starter
          </h3>
          <p className="text-gray-600 mt-2">
            Learn how to get your first clients, write gigs, and earn online
            through freelancing.
          </p>
          <Link
            href="/learn/freelancing"
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            Start Path →
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-800">
            🤖 AI Tools for Students
          </h3>
          <p className="text-gray-600 mt-2">
            Master free AI tools to boost your productivity, learning, and
            creativity.
          </p>
          <Link
            href="/learn/ai-tools"
            className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          >
            Start Path →
          </Link>
        </div>
      </div>

      {/* 👥 Community Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          👥 Join Our Learning Community
        </h2>
        <p className="text-gray-600 mt-3">
          Meet learners like you — get help, share projects, and grow together.
        </p>
        <Link
          href="https://discord.gg/skillrahi"
          target="_blank"
          className="inline-block mt-6 bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-md"
        >
          💬 Join Discord
        </Link>
      </div>

      <HomeProjects />
      <ArticlesForHero />
    </section>
  );
};

export default Hero;
