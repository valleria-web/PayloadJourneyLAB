import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payload Journey LAB",
  description:
    "Laboratório de formação, pesquisa e investigação aplicada dedicado a compreender payloads, estados, eventos e decisões em sistemas complexos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
