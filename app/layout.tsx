import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: '400',
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
      <body className={`${roboto.className} bg-gradient-to-l from-[#ca6822] via-[#623c3b] to-[#10194f]`}>
        <div className="bg-[url(/image/bg-img.png)] min-h-screen bg-fixed bg-no-repeat bg-contain bg-right-bottom">
          {children}
        </div>
      </body>
    </html>
  );
}
