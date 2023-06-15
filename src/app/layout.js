import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "necti",
  description: "Website Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
