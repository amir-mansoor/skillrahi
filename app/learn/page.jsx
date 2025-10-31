import React from "react";

const LearnPage = () => {
  const paths = [
    {
      title: "🌐 Web Development",
      description:
        "Learn HTML, CSS, JavaScript, and React — build real-world projects and launch your portfolio.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "💼 Freelancing Starter",
      description:
        "Learn how to build your profile, find clients, and start earning online through Fiverr and Upwork.",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "🤖 AI Tools for Students",
      description:
        "Master ChatGPT, Notion AI, and automation tools to learn and work smarter — not harder.",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "🎨 Design Basics",
      description:
        "Get started with Canva, Figma, and learn how to design creative content for social media.",
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "🐍 Python",
      description:
        "Start your programming journey with Python — easy to learn, powerful to use, and perfect for data or AI.",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-24 px-6 py-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          📘 Explore Learning Paths
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
          Choose your path and start learning practical, in-demand skills — all
          for free.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {paths.map((path, index) => (
          <div
            key={index}
            className="group border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all rounded-2xl p-6 hover:-translate-y-1"
          >
            {/* Gradient bar */}
            <div
              className={`h-2 w-20 bg-gradient-to-r ${path.color} rounded-full mb-4`}
            ></div>

            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {path.title}
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {path.description}
            </p>

            <button className="cursor-pointer mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-sm">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
