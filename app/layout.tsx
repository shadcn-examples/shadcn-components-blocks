import type React from "react";
import { Geist } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsInit from "@/lib/ga";

const inter = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : "test"}
      </body>
    </html>
  );
}
