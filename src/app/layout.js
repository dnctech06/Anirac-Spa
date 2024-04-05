import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anirac-Spa",
  description:
    "Anirac Spa de massagem relaxante e cuidados estéticos para cuidados com o corpo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{inter.cssText}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
