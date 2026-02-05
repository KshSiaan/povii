import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Povii",
  description: "Study Partner AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased min-h-dvh w-dvw overflow-x-hidden flex flex-col justify-start items-center bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
