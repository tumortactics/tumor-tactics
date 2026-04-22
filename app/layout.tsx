import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Tumor Tactics",
  description:
    "A nonprofit educational initiative bringing cancer biology to life through strategic, engaging gameplay for middle and high school students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
