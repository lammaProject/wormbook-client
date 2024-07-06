import type { Metadata } from "next";
import "../styles/globals.scss";

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
    <html data-theme="dark" lang="en">
      <body>{children}</body>
    </html>
  );
}
