import type { Metadata } from "next";
import { Space_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "just-bash vs @ekaone/vellum",
  description: "Package comparison between just-bash and @ekaone/vellum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSerif.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
