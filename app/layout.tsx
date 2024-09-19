// Metadata は 各ページでMetadata.titleとかに設定すると設定ができる昨日
import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
