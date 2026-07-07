import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rathinam Global Deemed to be University (RGU) — Organisation Structure",
  description:
    "Interactive organisation structure for Rathinam Global Deemed to be University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
