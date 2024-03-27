import type { Metadata } from "next";
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
 
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "The Answer to The Exercise",
  description: "Hao-Tsun Kuo's answer for the Take Home Assessment for Customer Success Engineer at Vercel",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      <Analytics />
      </body>
    </html>
  );
}
