import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/aurora-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam's Portfolio",
  description: "Next.js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased`}
      >

        <AuroraBackground>

            {children}

        </AuroraBackground>

      </body>
    </html>
  );
}
