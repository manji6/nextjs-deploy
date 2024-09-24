import type { Metadata } from "next";
import Header from "@components/header";
import "./globals.css";


// Google Font からNoto Sans JPを読み込み
import { Noto_Sans_JP } from 'next/font/google'

export const metadata: Metadata = {
  title: "(Default title tag)",
  description: "(Default description tag)",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8"></meta>
      </head>
      <body className={notoSansJP.className}>
        <div className="p-5 bg-gradient-to-r from-lime-500 to-green-200">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
