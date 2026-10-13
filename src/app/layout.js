import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

const SITE_URL = "https://bhargavhj.iotkit.in"

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bhargav HJ",
  url: SITE_URL,
  jobTitle: "Full Stack Developer | React Native Developer",
  email: "bhargavhj7@gmail.com",
  telephone: "+91 8310320913",
  sameAs: [
    "https://linkedin.com/in/bhargav-hj-b0a9b7283",
    "https://github.com/bhargav7014",
  ],
}

export const viewport = {
  themeColor: "#020706",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bhargav HJ — Full Stack · Mobile · IoT Developer",
    template: "%s | Bhargav HJ",
  },
  description:
    "Official portfolio of Bhargav HJ — Full Stack Developer building high-performance web applications, cross-platform mobile apps with React Native, and connected IoT/BLE solutions.",
  applicationName: "Bhargav HJ Portfolio",
  verification: {
    google: "0Zpzf75G51amanF11rVs_Wt99lejLq39j25ZZGSaZ5I",
  },
  authors: [{ name: "Bhargav HJ", url: SITE_URL }],
  creator: "Bhargav HJ",
  publisher: "Bhargav HJ",
  keywords: [
    "Bhargav HJ",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Node.js",
    "IoT Developer",
    "BLE Integration",
    "Mobile App Developer",
    "Bangalore Software Engineer",
    "Portfolio",
    "Web Developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhargav HJ — Full Stack · Mobile · IoT Developer",
    description:
      "Full Stack Developer building high-performance web products, cross-platform mobile apps with React Native, and connected IoT systems.",
    url: SITE_URL,
    siteName: "Bhargav HJ Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhargav HJ — Full Stack · Mobile · IoT Developer",
    description:
      "Full Stack Developer building high-performance web products, cross-platform mobile apps with React Native, and connected IoT systems.",
    creator: "@bhargavhj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "technology",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
