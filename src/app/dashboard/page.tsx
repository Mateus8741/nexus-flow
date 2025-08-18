"use client"

import { motion } from "framer-motion"
import { ChartsSection } from "../../components/dashboard/charts-section"
import { DashboardHeader } from "../../components/dashboard/dashboard-header"
import { DashboardSidebar } from "../../components/dashboard/dashboard-sidebar"
import { ProductsTable } from "../../components/dashboard/products-table"
import { StatsCards } from "../../components/dashboard/stats-cards"
import { useProducts } from "../../contexts/product-context"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
}

const sectionVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: {
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

export default function DashboardPage() {
  const { getProductStats } = useProducts()
  const stats = getProductStats()

  return (
    <DashboardSidebar>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col h-full w-full"
      >
        <DashboardHeader />

        <main className="flex-1 w-full overflow-y-auto bg-gradient-to-br from-background via-background to-muted/20">
          <div className="w-full max-w-none px-6 py-8 space-y-8">
            <motion.section variants={sectionVariants} className="text-center py-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent"
              >
                Bem-vindo ao NexusFlow
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Gerencie seus produtos, controle estoque e visualize métricas importantes em tempo
                real
              </motion.p>
            </motion.section>

            <motion.section variants={sectionVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Visão Geral
                </h2>
              </motion.div>
              <StatsCards stats={stats} />
            </motion.section>

            <motion.section variants={sectionVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-secondary to-secondary/60 rounded-full" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Analytics & Insights
                </h2>
              </motion.div>
              <ChartsSection />
            </motion.section>

            <motion.section variants={sectionVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/60 rounded-full" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Gerenciamento de Produtos
                </h2>
              </motion.div>
              <ProductsTable />
            </motion.section>
          </div>
        </main>
      </motion.div>
    </DashboardSidebar>
  )
}
