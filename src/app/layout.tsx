import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Canil",
  description: "Somos uma organização filantrópica que cuida de animais em estado de vulnerabilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <Header />
        <main className="content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
