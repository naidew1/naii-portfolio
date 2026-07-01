import type { Metadata } from "next";
import { Providers } from "@/components/providers/TooltipProviders";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Nailha Sakhila Dewi",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${manrope.className} antialiased dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
