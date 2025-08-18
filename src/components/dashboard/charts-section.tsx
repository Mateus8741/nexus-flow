"use client"

import { motion } from "framer-motion"
import { Package, TrendingUp } from "lucide-react"
import { useId } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { useProducts } from "../../contexts/product-context"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const COLORS = ["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe"]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

const chartVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-4 border-white/20 shadow-2xl"
      >
        <p className="font-semibold text-foreground mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-blue-500 text-sm">
            Quantidade: <span className="font-medium">{payload[0].value}</span>
          </p>
          <p className="text-emerald-500 text-sm">
            Valor: <span className="font-medium">{formatCurrency(payload[1]?.value || 0)}</span>
          </p>
        </div>
      </motion.div>
    )
  }
  return null
}

export function ChartsSection() {
  const { state } = useProducts()
  const blueGradientId = useId()
  const greenGradientId = useId()

  const categoryData = state.products.reduce(
    (acc, product) => {
      const existing = acc.find((item: { name: string }) => item.name === product.category)
      if (existing) {
        existing.value += product.quantity
        existing.totalValue += product.price * product.quantity
      } else {
        acc.push({
          name: product.category,
          value: product.quantity,
          totalValue: product.price * product.quantity,
        })
      }
      return acc
    },
    [] as Array<{ name: string; value: number; totalValue: number }>
  )

  const stockStatusData = [
    {
      name: "Em Estoque",
      value: state.products.filter(p => p.quantity > 10).length,
      color: "#10b981",
    },
    {
      name: "Estoque Baixo",
      value: state.products.filter(p => p.quantity <= 10 && p.quantity > 0).length,
      color: "#f59e0b",
    },
    {
      name: "Sem Estoque",
      value: state.products.filter(p => p.quantity === 0).length,
      color: "#ef4444",
    },
  ]

  if (state.products.length === 0) {
    return (
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2"
      >
        <motion.div variants={cardVariants}>
          <Card className="glass-card border-white/20 overflow-hidden">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur opacity-30 animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Produtos por Categoria
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground/60">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-500/40" />
                </div>
                <p>Adicione produtos para ver os gráficos</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="glass-card border-white/20 overflow-hidden">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl blur opacity-30 animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Status do Estoque
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground/60">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-emerald-500/40" />
                </div>
                <p>Adicione produtos para ver os gráficos</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={chartVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2"
    >
      <motion.div variants={cardVariants}>
        <Card className="glass-card border-white/20 overflow-hidden group">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              </motion.div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Produtos por Categoria
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" fontSize={12} />
                <YAxis yAxisId="left" stroke="rgba(255,255,255,0.6)" fontSize={12} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="rgba(255,255,255,0.6)"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  yAxisId="left"
                  dataKey="value"
                  fill={`url(#${blueGradientId})`}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  yAxisId="right"
                  dataKey="totalValue"
                  fill={`url(#${greenGradientId})`}
                  radius={[4, 4, 0, 0]}
                />

                <defs>
                  <linearGradient id={blueGradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.6} />
                  </linearGradient>
                  <linearGradient id={greenGradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#047857" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants}>
        <Card className="glass-card border-white/20 overflow-hidden group">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              </motion.div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Status do Estoque
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stockStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stockStatusData.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={entry.color}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="glass-card p-3 border-white/20 shadow-2xl"
                        >
                          <p className="font-semibold text-foreground">{payload[0].name}</p>
                          <p className="text-sm text-muted-foreground">
                            Quantidade: <span className="font-medium">{payload[0].value}</span>
                          </p>
                        </motion.div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 space-y-3"
            >
              {stockStatusData.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div
                    className="w-4 h-4 rounded-full shadow-lg"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-foreground/80">{item.name}:</span>
                  <span className="font-semibold text-foreground">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
