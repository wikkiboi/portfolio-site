import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ScrollToTopButton from "../components/ui/scroll-to-top-button";
import Navbar from "../modules/navbar";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="max-w-prose z-50 bg-background mx-auto">
            <Navbar />
          </header>
          <Toaster toastOptions={{ className: `${figtree.className}` }} />
          <ScrollToTopButton />
          {children}
        </ThemeProvider>
        <footer className="mx-auto flex max-w-prose flex-col max-sm:items-start items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
          This is a footer
        </footer>
      </body>
    </html>
  );
}
