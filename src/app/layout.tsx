import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExitIntent from "@/components/ui/ExitIntent";
import { ThemeProvider } from "@/components/layout/ThemeContext";

export const metadata: Metadata = {
  title: "Affiliate Pro - Modern Amazon Niche Website",
  description: "High-converting, SEO-optimized Amazon affiliate reviews and comparisons.",
  keywords: ["amazon affiliate", "product reviews", "comparison", "best products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GPDKJEHLL2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GPDKJEHLL2');
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ExitIntent />
        </ThemeProvider>
      </body>
    </html>
  );
}
