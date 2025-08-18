"use client"

import { motion } from "framer-motion"
import { Bell, Search, User } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { DashboardSidebarTrigger } from "./dashboard-sidebar"

export function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Busca global:", searchQuery)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <DashboardSidebarTrigger />
        </div>

        <div className="flex-1 flex items-center justify-between">
          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSearch}
            className="hidden md:block"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300" />
                <Input
                  placeholder="Buscar em toda a dashboard..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-12 w-80 h-11 rounded-2xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-muted-foreground/50"
                />
              </div>
            </div>
          </motion.form>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.05, rotate: 5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 hover:from-amber-500/20 hover:to-orange-500/20"
              >
                <Bell className="h-5 w-5 text-amber-500" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 500 }}
                  className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
                />
              </Button>
            </motion.div>

            {/* User Profile */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10"
              >
                <User className="h-5 w-5 text-primary" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
