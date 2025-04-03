import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "wormbook",
  description: "wormbook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={"html-bg"} lang="en">
      <body>{children}</body>
    </html>
  );
}
