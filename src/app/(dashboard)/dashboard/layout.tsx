import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "dashboard",
  description: "dashboard",
};

export default function Layout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <section>
      {header}
      {children}
    </section>
  );
}
