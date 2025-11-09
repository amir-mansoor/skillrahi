import Link from "next/link";

const ArticlesForHero = () => {
  return (
    <div className="mt-32 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900">📰 From the Blog</h2>
      <p className="text-gray-600 mt-3">
        Quick guides and stories to help you learn and grow faster.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">
            How to Start Freelancing as a Student
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Step-by-step guide to setting up your first Fiverr gig.
          </p>
          <Link
            href="/blog/how-to-start-freelancing-as-a-student"
            className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">
            Best Free Coding Resources in 2025
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            A curated list of the best free platforms for students.
          </p>
          <Link
            href="/blog/best-free-coding-resources-in-2025"
            className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">
            How to Use AI Tools for Studying
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Simple ways to use ChatGPT & Notion AI to study smarter.
          </p>
          <Link
            href="/blog"
            className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlesForHero;
