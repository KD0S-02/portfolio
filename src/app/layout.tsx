import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/Header";

export const metadata: Metadata = {
  title: "KD0S",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-background text-foreground font-sans"
      >  
        <Header></Header>
        <main className="container max-w-4l mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
