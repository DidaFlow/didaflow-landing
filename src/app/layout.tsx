import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DidaFlow - Intelligenza Artificiale Interpretabile per l'Educazione",
  description: "DidaFlow: piattaforma di intelligenza artificiale interpretabile per università ed enti formativi. Trasforma dati educativi in conoscenza strategica con approccio machine-in-the-loop.",
  keywords: "EdTech, formazione professionale, enti formativi, e-learning, piattaforma didattica, formatori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
