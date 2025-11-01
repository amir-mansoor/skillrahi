import React from "react";
import { Users, MessageSquare, Trophy, Rocket } from "lucide-react";

export const metadata = {
  title: "Community",
  description:
    "Join the SkillRahi Community. Meet other learners, get help fast, share your projects, and grow your digital skills ",
};

const CommunityPage = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          👥 Join the SkillRahi Community
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Meet other learners, get help fast, share your projects, and grow your
          digital skills — together from Pakistan 🇵🇰.
        </p>

        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-indigo-700 transition-all"
        >
          💬 Join our Discord
        </a>
      </div>

      {/* Why Join Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-20">
        {[
          {
            icon: <MessageSquare className="w-8 h-8 text-indigo-600 mx-auto" />,
            title: "Get Help Fast",
          },
          {
            icon: <Rocket className="w-8 h-8 text-indigo-600 mx-auto" />,
            title: "Share Progress",
          },
          {
            icon: <Users className="w-8 h-8 text-indigo-600 mx-auto" />,
            title: "Find Teammates",
          },
          {
            icon: <Trophy className="w-8 h-8 text-indigo-600 mx-auto" />,
            title: "Join Weekly Sessions",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all rounded-2xl p-6"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800 mt-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Future Features Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-10 shadow-inner text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          🌟 Coming Soon
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              title: "🏆 Leaderboard",
              desc: "See top learners and contributors.",
            },
            {
              title: "🎓 Mentorship",
              desc: "Get guided by advanced learners and professionals.",
            },
            {
              title: "🏫 Campus Ambassadors",
              desc: "Represent SkillRahi in your university.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {f.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
