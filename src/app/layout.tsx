import FooterPage from "@/components/pages/shared/Footer";
import NavbarPage from "@/components/pages/shared/Navbar";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Car Application",
  description: "This is a full stack Project with custom backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarPage />
          <main>
            {children}

            <Toaster />
          </main>
          <FooterPage />
        </Providers>
      </body>
    </html>
  );
}
