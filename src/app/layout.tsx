import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { text } from "stream/consumers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Based Notes",
  description: "Not an app for soyboys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          toastOptions={{
            style: {
              textAlign: "center",
            },
          }}
        />
      </body>
    </html>
  );
}
