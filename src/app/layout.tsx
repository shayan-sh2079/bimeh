import { Vazirmatn } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ToastContainerClient from "@/common/components/ToastContainerClient";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${vazirmatn.variable} font-[family-name:var(--font-vazirmatn)]`}
      >
        <main className={"mx-auto max-w-lg"}>{children}</main>
        <ToastContainerClient />
      </body>
    </html>
  );
}
