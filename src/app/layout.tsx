import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexusFlow Sales Flow",
  description: "Automação de vendas e fluxos de trabalho inteligentes",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
