import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { SITE } from "@/lib/data";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const arabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: { default: `${SITE.name} ${SITE.legal}`, template: `%s | ${SITE.name}` },
  description: "Industrial construction, mechanical and electrical services, plant maintenance, equipment rental and certified manpower in Jubail and across Saudi Arabia.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${arabic.variable} bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
