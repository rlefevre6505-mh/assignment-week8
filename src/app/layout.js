import { Teko, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tekoSans = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

const quicksandSans = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gig Blog",
  description: "A blog about rock and metal concerts and festivals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tekoSans.variable} ${quicksandSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
