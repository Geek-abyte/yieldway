import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yieldway - Professional DeFi Yield Optimization",
  description: "Institutional-grade yield optimization with automated rebalancing on Stellar. Maximize returns with professional DeFi strategies and sub-cent transaction fees.",
  keywords: "DeFi, yield farming, Stellar, blockchain, cryptocurrency, automated investing, portfolio optimization",
  authors: [{ name: "Yieldway" }],
  creator: "Yieldway",
  publisher: "Yieldway",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yieldway.io"),
  openGraph: {
    title: "Yieldway - Professional DeFi Yield Optimization",
    description: "Institutional-grade yield optimization with automated rebalancing on Stellar.",
    url: "https://yieldway.io",
    siteName: "Yieldway",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yieldway - Professional DeFi Yield Optimization",
    description: "Institutional-grade yield optimization with automated rebalancing on Stellar.",
    creator: "@yieldway",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
