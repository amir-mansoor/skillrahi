import LearnScreen from "./LearnScreen";
export default async function LearnPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/learn`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1>Something went wrong</h1>;
  }

  const paths = await res.json();

  return <LearnScreen paths={paths} />;
}
