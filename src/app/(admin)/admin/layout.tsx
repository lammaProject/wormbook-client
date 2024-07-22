import type { Metadata } from "next";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { api } from "@/src/app/lib/api/Api";

export const metadata: Metadata = {
  title: "admin",
  description: "admin",
};

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data } = await api("server").profile.getProfile();
  if (data && data.role !== "admin") return redirect("/dashboard");
  return <section>{children}</section>;
}
