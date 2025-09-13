"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { Toaster as Sonner } from "../components/ui/sonner"
import { Toaster } from "../components/ui/toaster"
import { TooltipProvider } from "../components/ui/tooltip"
import { ProductProvider } from "../contexts/product-context"

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ProductProvider>
          <Toaster />
          <Sonner />
          {children}
        </ProductProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
