import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
  title: "Bhargav HJ — Full Stack · Mobile · IoT",
  description: "Cinematic portfolio of Bhargav HJ, a Full Stack Developer working across React, Next.js, React Native, TypeScript, Node.js and IoT/BLE.",
  keywords: ["Bhargav HJ","Full Stack Developer","React","React Native","Next.js","TypeScript","Node.js","IoT","BLE"],
  authors: [{ name: "Bhargav HJ" }],
  creator: "Bhargav HJ",
  metadataBase: new URL("https://bhargavhj.vercel.app"),
  openGraph: { title: "Bhargav HJ — Full Stack · Mobile · IoT", description: "Full Stack, mobile and connected-product portfolio.", type: "website", locale: "en_IN" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return <html lang="en"><body className={geistSans.variable+" "+geistMono.variable}>{children}</body></html>
}
