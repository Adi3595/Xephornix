import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xephorix | Autonomous Intelligence Infrastructure",
  description: "Enterprise AI workflow orchestration and neural infrastructure automation.",
  icons: {
    icon: "/xephorix.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-oceanic-noir text-arctic-powder selection:bg-forsythia selection:text-oceanic-noir relative">
        <div className="film-grain" />
        {children}
      </body>
    </html>
  );
}
