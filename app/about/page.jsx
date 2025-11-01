import { Heart, Target, Users } from "lucide-react";

export const metadata = {
  title: "About SkillRahi",
  description: "Making digital learning easier for  students.",
};

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">
          👋 About SkillRahi
        </h1>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Empowering Pakistani students to learn digital skills for free — built
          by students, for students 🇵🇰
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">💬 Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Hey! I'm <span className="font-semibold">Qazi</span> — a BS Computer
          Science student who started{" "}
          <span className="font-semibold">SkillRahi</span> to make digital
          learning accessible for everyone in Pakistan.
          <br />
          <br />
          While learning web development and freelancing myself, I realized that
          most students struggle to find the right roadmap and free resources.
          That’s when the idea of SkillRahi was born — a platform where students
          can learn, build, and grow together 💡
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-10 shadow-inner mb-16 text-center">
        <Target className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🎯 Our Mission
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold">
            Making digital learning easier for Pakistani students.
          </span>
          <br />
          We believe every student — regardless of background or city — deserves
          access to quality learning paths, mentorship, and opportunities to
          grow in the digital world.
        </p>
      </div>

      {/* Contribution Section */}
      <div className="text-center">
        <Users className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🤝 Contribute or Mentor
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Are you a student, teacher, or developer who wants to give back? You
          can contribute by writing guides, mentoring learners, or helping us
          improve the platform.
        </p>
        <a
          href="mailto:qazimansor89@gmail.com"
          className="inline-block mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all"
        >
          💌 Contact Us
        </a>
      </div>

      {/* Footer Quote */}
      <div className="text-center mt-20">
        <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
        <p className="text-gray-600 italic">
          “SkillRahi is built with ❤️ by students — for students.”
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
