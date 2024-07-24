import type { Metadata } from "next";
import { ReactNode } from "react";
import { api } from "@/src/app/lib/api/Api";

export const metadata: Metadata = {
  title: "admin",
  description: "admin",
};

export default async function Layout({
  children,
  notAdmin,
}: Readonly<{
  children: ReactNode;
  notAdmin: ReactNode;
}>) {
  const { data } = await api("server", "profile", "getProfile");
  if (data && data.role !== "admin") return notAdmin;
  return <section>{children}</section>;
}
