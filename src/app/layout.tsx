import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "../modules/navbar";
import { Toaster } from "sonner";
import ScrollToTopButton from "../components/ui/scroll-to-top-button";

const figtree = Figtree({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricky Ho",
  description: "Ricky Ho's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.className} antialiased`}>
      <body className="min-h-screen">
        <header className="max-w-prose z-50 bg-background mx-auto">
          <Navbar />
        </header>
        <Toaster toastOptions={{ className: `${figtree.className}` }} />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}
