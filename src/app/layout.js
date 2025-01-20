import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/next";


export const metadata = {
  title: "AltairEdu",
  description: "Your ultimate destination for learning to code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="container max-w-[1200px] mx-auto px-4 py-10">
            {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
