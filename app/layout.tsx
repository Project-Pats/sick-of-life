import type { Metadata } from "next";
import { Fira_Code } from "@next/font/google";
import localFont from "@next/font/local";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const cloisterBlack = localFont({
  src: "../public/fonts/CloisterBlack.ttf",
  variable: "--font-cloister-black",
});

import "./globals.css";
import Header from "./Header";

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
        className={`${firaCode.variable} ${cloisterBlack.variable} font-mono`}
      >
        <div className="flex flex-col justify-center items-center min-h-screen w-full max-w-2xl mx-auto">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
