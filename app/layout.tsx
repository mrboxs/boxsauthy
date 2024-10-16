import type { Metadata } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

import NextTopLoader from "nextjs-toploader";

import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = localFont({
  src: "../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${siteConfig.title}: ${siteConfig.description}`,
  description: siteConfig.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        href: "/favicon-dark.svg",
        url: "/favicon-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        href: "/favicon-light.svg",
        url: "/favicon-light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-geist-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={100}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
