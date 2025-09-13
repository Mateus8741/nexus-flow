"use client"

import { motion } from "framer-motion"
import { AlertTriangle, DollarSign, Package, XCircle } from "lucide-react"
import type { ProductStats } from "../../types/product"

interface StatsCardsProps {
  stats: ProductStats
}

const statsConfig = [
  {
    title: "Total de Produtos",
    value: "totalProducts",
    icon: Package,
    description: "Produtos cadastrados",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    delay: 0.1,
  },
  {
    title: "Valor Total",
    value: "totalValue",
    icon: DollarSign,
    description: "Valor em estoque",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    delay: 0.2,
  },
  {
    title: "Estoque Baixo",
    value: "lowStockProducts",
    icon: AlertTriangle,
    description: "≤ 10 unidades",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    delay: 0.3,
  },
  {
    title: "Sem Estoque",
    value: "outOfStockProducts",
    icon: XCircle,
    description: "0 unidades",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-500",
    delay: 0.4,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export function StatsCards({ stats }: StatsCardsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  const getValue = (key: string) => {
    switch (key) {
      case "totalProducts":
        return stats.totalProducts.toString()
      case "totalValue":
        return formatCurrency(stats.totalValue)
      case "lowStockProducts":
        return stats.lowStockProducts.toString()
      case "outOfStockProducts":
        return stats.outOfStockProducts.toString()
      default:
        return "0"
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {statsConfig.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.title}
            variants={cardVariants}
            custom={index}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
            />

            <div className="relative glass-card p-6 h-full border border-white/10 rounded-xl">
              <div
                className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${stat.gradient} rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                  {stat.title}
                </h3>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                {getValue(stat.value)}
              </motion.div>

              <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                {stat.description}
              </p>

              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
