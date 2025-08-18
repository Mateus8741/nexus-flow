"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react"
import { SymbolLogo } from "../SymbolLogo"
import { Button } from "../ui/button"
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar"

interface SidebarItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  badge?: string
  gradient: string
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Visão Geral",
    icon: LayoutDashboard,
    href: "/dashboard",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Produtos",
    icon: Package,
    href: "/dashboard/products",
    badge: "Gerir",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Vendas",
    icon: ShoppingCart,
    href: "/dashboard/sales",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Relatórios",
    icon: BarChart3,
    href: "/dashboard/reports",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Analytics",
    icon: TrendingUp,
    href: "/dashboard/analytics",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Clientes",
    icon: Users,
    href: "/dashboard/customers",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Documentos",
    icon: FileText,
    href: "/dashboard/documents",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/dashboard/settings",
    gradient: "from-gray-500 to-slate-500",
  },
]

interface DashboardSidebarProps {
  children: React.ReactNode
}

export function DashboardSidebar({ children }: DashboardSidebarProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen overflow-hidden w-full">
        <motion.aside
          initial={{ width: 280 }}
          animate={{ width: 280 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative bg-background/80 backdrop-blur-xl border-r border-black/10 flex-shrink-0"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center p-4 border-b border-white/10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <SymbolLogo width={40} height={40} />

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="min-w-0"
              >
                <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent truncate">
                  NexusFlow
                </h2>
                <p className="text-xs text-muted-foreground/60 truncate">Dashboard v1.0</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <nav className="p-4 flex-1 overflow-y-auto" aria-label="Menu de navegação">
            <div className="space-y-2">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12 px-3 rounded-xl hover:bg-white/5 hover:scale-105 transition-all duration-300 group"
                      asChild
                    >
                      <a
                        href={item.href}
                        className="flex items-center gap-3 w-full"
                        aria-label={`Navegar para ${item.title}`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                          aria-hidden="true"
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="flex items-center justify-between flex-1 min-w-0"
                        >
                          <span className="truncate">{item.title}</span>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </motion.div>
                      </a>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </nav>
        </motion.aside>

        <div className="flex-1 flex flex-col min-w-0">{children}</div>
      </div>
    </SidebarProvider>
  )
}
export function DashboardSidebarTrigger() {
  return (
    <SidebarTrigger
      className="h-10 w-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10"
      aria-label="Alternar sidebar"
    />
  )
}
