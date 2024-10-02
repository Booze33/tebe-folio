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
      <body className="dark:bg-dark bg-light dark:text-[#f1eaff] text-[#030637] font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
