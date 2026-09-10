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
  title: "Bhargav HJ | Full Stack Developer",
  description:
    "Portfolio of Bhargav HJ — Full Stack Developer specializing in React, React Native, TypeScript, Node.js, and modern web applications.",
  keywords: [
    "Bhargav HJ",
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Bhargav HJ" }],
  creator: "Bhargav HJ",
  metadataBase: new URL("https://bhargavhj.vercel.app"),
  openGraph: {
    title: "Bhargav HJ | Full Stack Developer",
    description:
      "Portfolio of Bhargav HJ — Full Stack Developer building modern web and mobile applications.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
