export default function Footer() {
  return (
    <footer className="mt-32 bg-gray-50 border-t py-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
        <p className="font-semibold text-gray-800 text-lg">
          Skill<span className="text-yellow-500">Rahi</span>
        </p>
        <p className="mt-2">Learn. Build. Earn — together</p>
        {/* <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://discord.gg/skillrahi"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/skillrahi"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="mailto:hello@skillrahi.pk"
            className="text-blue-600 hover:underline"
          >
            Contact
          </a>
        </div> */}
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} SkillRahi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
