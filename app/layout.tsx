import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sick of life",
  description: "sick of life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="overflow-hidden"
        style={{ fontFamily: "CloisterBlack, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
