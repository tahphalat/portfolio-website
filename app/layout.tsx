import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import BackButton from "./components/BackButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phalat Lorratthanan | Portfolio",
  description: "Portfolio site built from the provided Figma references.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-surface-muted)] text-[var(--color-text)]`}
      >
        <NavBar />
        <main className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col px-6 pb-20 pt-16 md:px-10">
          <BackButton className="mb-3 self-start" />
          {children}
        </main>
      </body>
    </html>
  );
}
