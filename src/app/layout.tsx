import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johnny Tan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-beige">{children}</body>
    </html>
  );
}
