import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura Tiles Gallery",
  description:
    "The Art of Excellence in surface.Tiles on a palette are just stone. Tiles installed on a wall or floor create a feeling.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class">
          <Navbar/>
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
