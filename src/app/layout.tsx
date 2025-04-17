import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minha Aula - Sistema de Gestão para Escolas",
  description:
    "Sistema completo para escolas de inglês, artes marciais, natação, música e muito mais. Controle alunos, pagamentos e relatórios em um só lugar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
