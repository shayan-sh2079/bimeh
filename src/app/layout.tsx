import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${vazirmatn.variable} font-[family-name:var(--font-vazirmatn)]`}
      >
        <main className={"mx-auto max-w-lg"}>{children}</main>
      </body>
    </html>
  );
}
