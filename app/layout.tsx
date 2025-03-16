import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: '200',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Tisloh Tebe",
  description: "Software Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[url(/image/bg-img.png)] bg-contain md:bg-cover bg-[#090826] bg-fixed min-h-screen bg-no-repeat text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
