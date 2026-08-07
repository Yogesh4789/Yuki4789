import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { inter, jetbrainsMono, outfit } from "@/lib/fonts";
import "./globals.css";

import { Providers } from "@/components/layout/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { NoiseOverlay } from "@/components/layout/noise-overlay";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"),
  title: {
    default: "Yogesh K G | Software Engineer",
    template: "%s | Yogesh K G",
  },
  description: "Aspiring Artificial Intelligence and Machine Learning student.",
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
  openGraph: {
    title: "Yogesh K G — AI & Machine Learning Portfolio",
    description: "Aspiring Artificial Intelligence and Machine Learning student.",
    url: "https://yogeshkg.com",
    siteName: "Yogesh K G Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yogesh K G Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh K G — Portfolio",
    description: "Aspiring Artificial Intelligence and Machine Learning student.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased font-sans selection:bg-primary/30 selection:text-primary-foreground min-h-screen bg-background text-foreground overflow-x-hidden`}>
        <Providers>
          <SmoothScroll>
            <LoadingScreen />
            <NoiseOverlay />
            <CustomCursor />
            

            <main className="relative z-10 flex flex-col min-h-screen">
              {children}
            </main>
          </SmoothScroll>
        </Providers>
        
        {/* Optional Vercel analytics (fails silently if package is missing) */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
