import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colab360 \u2013 Gest\u00e3o Inteligente de Atestados M\u00e9dicos",
  description: "Automatize a triagem de atestados m\u00e9dicos, padronize decis\u00f5es e elimine riscos trabalhistas. Sem planilhas, sem achismo.",
  openGraph: {
    title: "Colab360 \u2013 Gest\u00e3o Inteligente de Atestados M\u00e9dicos",
    description: "Reduza em at\u00e9 80% o tempo do RH com atestados.",
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
        {children}
      </body>
    </html>
  );
}