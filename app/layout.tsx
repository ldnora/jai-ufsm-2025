import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "PrediCuori — Sistema Inteligente",
  description:
    "Sistema multimodal de predição de eventos cardiovasculares (UFSM / PIT - CNPq)",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-slate-800 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
