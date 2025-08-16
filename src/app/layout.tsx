import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexusFlow - Automação Inteligente de Vendas",
  description:
    "Transforme seu WhatsApp em uma máquina de vendas 24/7 com IA e automação inteligente. Venda mais, trabalhe menos.",
  keywords: "automação, whatsapp, vendas, IA, chatbot, n8n, automação de vendas",
  authors: [{ name: "NexusFlow" }],
  openGraph: {
    title: "NexusFlow - Automação Inteligente de Vendas",
    description:
      "Transforme seu WhatsApp em uma máquina de vendas 24/7 com IA e automação inteligente.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
