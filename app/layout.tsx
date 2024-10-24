import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TEBE",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Oswald:wght@200;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:bg-dark bg-light dark:text-[#f1eaff] text-[#030637] font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
