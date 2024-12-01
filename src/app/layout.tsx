import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const dmSans = localFont({
  src: "./fonts/DMSans-VariableFont.ttf",
  variable: "--font-dm-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marku’s Bike Shop",
  description: "The perfect place to buy your custom bike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}  antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
