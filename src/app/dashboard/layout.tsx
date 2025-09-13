import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - NexusFlow",
  description: "Gerencie seus produtos e visualize métricas importantes",
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
