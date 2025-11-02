// import { redirectIfLogin } from "@/lib/auth_redirect";
import AuthScreen from "./AuthScreen";

export const metadata = {
  title: "SkillRahi - Intro the unknown",
  description: "Login don't account have yet",
};

export default async function AuthPage() {
  return <AuthScreen />;
}
