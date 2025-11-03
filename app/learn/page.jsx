import axios from "axios";
import LearnScreen from "./LearnScreen";
export default async function LearnPage() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/learn`);
  const paths = res.data;

  return <LearnScreen paths={paths} />;
}
