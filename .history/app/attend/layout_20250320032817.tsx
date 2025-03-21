import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attend ILID 2025 | Innovation Lab for Infrastructure Development",
  description: "From strategy to design, we craft brands that elevate visibility, build trust, and drive industry success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
