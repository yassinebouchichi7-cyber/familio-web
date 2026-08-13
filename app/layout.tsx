import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Familio — The Operating System for Modern Families",
  description:
    "A private command center for your household. Coordinate, reward, and connect — elegantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}