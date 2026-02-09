import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL('https://elielcezar.com'),
  title: {
    default: 'Eliel Cezar - Desenvolvedor Front End & UI Designer - Programador Web',
    template: '%s | Eliel Cezar',
  },
  description: 'Especialista em desenvolvimento de sites, apps e ecommerce. Melhore o desempenho e design de seu site com um profissional com mais de 15 anos de mercado.',
  keywords: ['Desenvolvedor Web', 'Front End', 'UI Designer', 'Next.js', 'React', 'Freelancer', 'Curitiba', 'Criação de Sites', 'Programador'],
  authors: [{ name: 'Eliel Cezar', url: 'https://elielcezar.com' }],
  creator: 'Eliel Cezar',
  publisher: 'Eliel Cezar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Eliel Cezar - Desenvolvedor Web & UI Designer',
    description: 'Especialista em desenvolvimento de sites, apps e ecommerce.',
    url: 'https://elielcezar.com',
    siteName: 'Eliel Cezar',
    images: [
      {
        url: '/logo-elielcezar.webp',
        width: 1200,
        height: 630,
        alt: 'Eliel Cezar - Desenvolvedor Web',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eliel Cezar',
    description: 'Especialista em desenvolvimento de sites, apps e ecommerce.',
    images: ['/logo-elielcezar.webp'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X9E0GD719W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', G-X9E0GD719W');
          `}
        </Script>
        <Script id="json-ld" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Eliel Cezar",
              "jobTitle": "Front End Developer & UI Designer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curitiba",
                "addressRegion": "PR"
              },
              "url": "https://elielcezar.com",
              "description": "Desenvolvedor web com 15 anos de experiência, especializado em Front End, Mobile e UI Design."
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
