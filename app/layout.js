import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rimshacomix Portfolio",
  description: "Portfolio of Rimsha Konain (RimshaComix) - Showcasing web development projects, technical skills, and creative works.",
  keywords: ["Web Developer", "Full Stack", "RimshaComix", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Rimsha Konain C" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[arial]`}
      >
        {children}
      </body>
    </html>
  );
}
