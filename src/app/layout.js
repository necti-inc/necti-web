import Navbar from "@/components/navigation-navbar/Navbar";
import "./globals.css";
import Footer from "@/components/navigation-footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Necti - Website Development & Digital Marketing",
  description:
    "Necti is a digital powerhouse specializing in crafting state-of-the-art website solutions and innovative digital marketing strategies. Led by a team of passionate experts, Necti collaborates with brands to ignite their online presence and accelerate growth. With a pulse on the latest tech trends and a network of digital maestros, Necti is your beacon in the digital landscape, ever-ready to guide and amplify your brand's digital voice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div>
          <SpeedInsights />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
