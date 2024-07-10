import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woovi Challege - Frontend",
  description: "An implementation of payment screen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img src="woovi-logo.png" />
        {children}
				<img src="woovi-footer.png"/>
      </body>
    </html>
  );
}
