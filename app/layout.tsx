import type React from "react";
import { Cal_Sans as FontHeading, Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsInit from "@/lib/ga";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400"
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
