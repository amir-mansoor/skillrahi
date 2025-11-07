import Image from "next/image";
import contributors from "../data/contributors.json";

export default function ContributorsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">SkillRahi Contributors</h1>

      <p className="text-gray-600 mb-10">
        These awesome people helped build the SkillRahi content and projects.
      </p>

      {contributors.length === 0 && (
        <p className="text-gray-500">
          No contributors yet — you can be the first!
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {contributors.map((c, i) => (
          <a
            key={i}
            href={`https://github.com/${c.github}`}
            target="_blank"
            className="flex flex-col items-center gap-3 border rounded-xl p-5 hover:shadow-md transition"
          >
            <Image
              src={c.avatar}
              alt={c.name}
              className="rounded-full border"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500">Lessons: {c.lessons ?? 0}</p>
            <p className="text-sm text-gray-500">Projects: {c.projects ?? 0}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
