import Link from "next/link";
const HomeProjects = () => {
  return (
    /* 🧩 Featured Projects Section */

    <div className="mt-32 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900">
        🧩 Practice What You Learn
      </h2>
      <p className="text-gray-600 mt-3">
        Small hands-on projects to test your skills and build your portfolio.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">
            Portfolio Website
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Create your first portfolio site using HTML & CSS.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
          >
            View Details →
          </Link>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">To-Do App</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Practice JavaScript by building a simple task manager.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
          >
            View Details →
          </Link>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">
            AI Poster Generator
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Use AI tools like Canva & ChatGPT to generate creative posters.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
