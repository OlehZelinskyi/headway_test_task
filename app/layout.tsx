import ReduxProvider from "@/app/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Who wants to be a millionaire?",
  description: "Test task from Headway company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
