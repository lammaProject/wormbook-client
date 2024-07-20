import FormLogin from "@/src/app/(login)/login/_components/FormLogin/FormLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  if (cookies().has("access_token")) return redirect("/dashboard");
  return <FormLogin />;
}
