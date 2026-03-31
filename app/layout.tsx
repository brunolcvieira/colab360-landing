import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colab360 – Gestão Inteligente de Atestados Médicos",
  description: "Automatize a triagem de atestados médicos, padronize decisões e elimine riscos trabalhistas. Sem planilhas, sem achismo.",
  openGraph: {
    title: "Colab360 – Gestão Inteligente de Atestados Médicos",
    description: "Reduza em até 80% o tempo do RH com atestados.",
    url: "https://colab360.com.br",
    siteName: "Colab360",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-gray-800 overflow-x-hidden">
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18051800466"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18051800466');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}