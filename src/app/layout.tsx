import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import NavbarPage from "@/components/pages/shared/Navbar";
import FooterPage from "@/components/pages/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Car Application",
  description: "This is a full stack Project with custom backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <NavbarPage />
        <body className={inter.className}>{children}</body>
        <FooterPage />
      </Providers>
    </html>
  );
}
