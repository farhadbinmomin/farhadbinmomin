import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { colors } from "@/assets/lib/colors";
import ContactMenu from "@/components/ContactMenu";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FBM",
  description: "Farhad Bin Momin's Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="relative min-h-full max-w-4xl mx-auto flex flex-col p-4
      
        "
        style={{
          backgroundColor: colors.bgcolor1,
          color: colors.fontcolor1,
        }}
      >
        <Header />
        {children}
        {/* Sticky container stays within the max-w-4xl boundary */}
        <div className="sticky bottom-4 align-self-end ml-auto z-50">
          <ContactMenu />
        </div>
      </body>
    </html>
  );
}
