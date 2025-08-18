"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

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
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: isOpen ? 280 : 80 }}
        animate={{ width: isOpen ? 280 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative bg-background/80 backdrop-blur-xl border-r border-white/10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-between p-4 border-b border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/60 rounded-xl blur opacity-30 animate-pulse" />
            </div>
            {isOpen && (
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
            )}
          </motion.div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10"
          >
            <Menu className="h-4 w-4 text-primary" />
          </Button>
        </motion.div>

        {/* Navigation */}
        <nav className="p-4">
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
                    className="w-full justify-start gap-3 h-12 px-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className={`p-2 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.div>
                    {isOpen && (
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
                    )}
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </nav>

        {/* Footer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 text-center"
          >
            <div className="text-xs text-muted-foreground/60 mb-1">NexusFlow Dashboard</div>
            <div className="text-xs text-muted-foreground/40">Modern & Fast</div>
          </motion.div>
        )}
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

// Componente para o trigger da sidebar (botão de menu)
export function DashboardSidebarTrigger() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-10 w-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10"
    >
      <Menu className="h-5 w-5 text-primary" />
    </Button>
  )
}
