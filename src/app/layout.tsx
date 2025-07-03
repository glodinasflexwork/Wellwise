import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wellwise.nl'),
  title: "WellWise - AI-Powered Wellbeing Ecosystem",
  description: "WellWise integrates mental health, financial wellness, and sustainability into one intelligent platform. Transform how you and your organization thrive in body, mind, and money.",
  keywords: "wellbeing, mental health, financial wellness, sustainability, AI, workplace wellness, burnout prevention",
  authors: [{ name: "Cihat Kaya" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "WellWise - AI-Powered Wellbeing Ecosystem",
    description: "The first integrated platform combining mental health, financial wellness, and sustainability through AI-powered insights.",
    type: "website",
    locale: "en_US",
    url: "https://www.wellwise.nl",
    siteName: "WellWise",
    images: [
      {
        url: "/images/wellwise_social_card.png",
        width: 1200,
        height: 630,
        alt: "WellWise - AI-Powered Wellbeing Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WellWise - AI-Powered Wellbeing Ecosystem",
    description: "The first integrated platform combining mental health, financial wellness, and sustainability through AI-powered insights.",
    images: ["/images/wellwise_social_card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
