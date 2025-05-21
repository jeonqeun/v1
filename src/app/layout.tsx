import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이정은 (Jeongeun Lee)",
  description: "개인 프로젝트와 웹 퍼블리싱 작업을 정리한 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
