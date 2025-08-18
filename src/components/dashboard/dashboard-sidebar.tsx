"use client"

import { AnimatePresence, motion } from "framer-motion"
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
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"

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
  isOpen: boolean
  onClose: () => void
}

const sidebarVariants = {
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
}

const itemVariants = {
  closed: { x: -20, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  }),
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const [activeItem, setActiveItem] = useState("/dashboard")

  const handleItemClick = (href: string) => {
    setActiveItem(href)
    console.log("Navegando para:", href)
  }

  return (
    <>
      {/* Overlay para mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
            onKeyDown={e => {
              if (e.key === "Escape") {
                onClose()
              }
            }}
            aria-label="Fechar menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 z-50 h-full w-72 bg-background/80 backdrop-blur-xl border-r border-white/10 shadow-2xl"
      >
        {/* Header da Sidebar */}
        <motion.div
          className="flex h-16 items-center border-b border-white/10 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/60 rounded-2xl blur opacity-30 animate-pulse" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              NexusFlow
            </h2>
          </div>
        </motion.div>

        {/* Menu Items */}
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="p-4 space-y-2">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeItem === item.href

              return (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 h-12 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                      isActive
                        ? "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary shadow-lg"
                        : "hover:bg-white/5 border border-transparent hover:border-white/10"
                    )}
                    onClick={() => handleItemClick(item.href)}
                  >
                    {/* Background Gradient on Hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        `from-${item.gradient.split("-")[1]}-500/10 to-${item.gradient.split("-")[3]}-500/10`
                      )}
                    />

                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "relative z-10 p-2 rounded-xl transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-br from-primary to-primary/60 shadow-lg"
                          : `bg-gradient-to-br ${item.gradient} opacity-60 group-hover:opacity-100`
                      )}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>

                    {/* Text */}
                    <span className="relative z-10 font-medium">{item.title}</span>

                    {/* Badge */}
                    {item.badge && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 500 }}
                        className="relative z-10 ml-auto text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full font-medium"
                      >
                        {item.badge}
                      </motion.span>
                    )}

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute right-2 w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </ScrollArea>

        {/* Footer da sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-background/50 backdrop-blur-sm"
        >
          <div className="text-center">
            <div className="text-xs text-muted-foreground/60 mb-1">NexusFlow Dashboard</div>
            <div className="text-xs text-muted-foreground/40">v1.0 • Modern & Fast</div>
          </div>
        </motion.div>
      </motion.aside>
    </>
  )
}
