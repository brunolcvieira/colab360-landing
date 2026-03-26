import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colab360 - Gestao Inteligente de Atestados Medicos",
  description: "Automatize a triagem de atestados medicos, padronize decisoes e elimine riscos trabalhistas.",
  openGraph: {
    title: "Colab360 - Gestao Inteligente de Atestados Medicos",
    description: "Reduza em ate 80% o tempo do RH com atestados.",
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