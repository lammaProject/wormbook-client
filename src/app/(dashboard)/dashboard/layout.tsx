import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "dashboard",
  description: "dashboard",
};

export default function Layout({
  header,
  body,
}: Readonly<{
  header: ReactNode;
  body: ReactNode;
}>) {
  return (
    <section>
      {header}
      {body}
    </section>
  );
}
