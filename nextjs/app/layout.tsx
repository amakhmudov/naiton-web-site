import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Naiton Business Suite - Explore Naiton",
  description: "Naiton - online and offline sales with your internal business processes. We work on an ongoing process, based on your specific situation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = "310208932732";

  return (
    <html lang="en">
      <body>
        <div id="container">
          <h1 className="sr-only">Naiton Business Suite</h1>
          <Header phoneNumber={phoneNumber} />
          <main className="main">{children}</main>
          <Footer phoneNumber={phoneNumber} />
        </div>
      </body>
    </html>
  );
}
