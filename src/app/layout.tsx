import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Communauté Portuaire de San-Pédro | Port Autonome de San-Pédro",
  description:
    "Portail officiel de la communauté portuaire de San-Pédro, Côte d'Ivoire. Trafic en direct, services aux opérateurs, démarches en ligne, annuaire des acteurs portuaires.",
  keywords: [
    "port san-pedro",
    "communauté portuaire",
    "cote d'ivoire",
    "port autonome",
    "cacao",
    "export",
    "logistique",
    "escale",
    "dedouanement",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Communauté Portuaire de San-Pédro",
    description:
      "Portail de la communauté portuaire — fiabilité, fluidité, puissance logistique.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
