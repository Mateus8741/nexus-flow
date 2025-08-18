"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Package, Search, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"
import { useProducts } from "../../contexts/product-context"
import type { Product } from "../../types/product"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { ProductForm } from "./product-form"

const tableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function ProductsTable() {
  const { state, deleteProduct } = useProducts()
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)

  const filteredProducts = state.products.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id)
      toast.success("Produto deletado com sucesso!")
      setDeleteDialogOpen(false)
      setProductToDelete(null)
    }
  }

  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) {
      return {
        label: "Sem Estoque",
        variant: "destructive" as const,
        color: "from-rose-500 to-pink-500",
      }
    }
    if (quantity <= 10) {
      return {
        label: "Estoque Baixo",
        variant: "secondary" as const,
        color: "from-amber-500 to-orange-500",
      }
    }
    return {
      label: "Em Estoque",
      variant: "default" as const,
      color: "from-emerald-500 to-teal-500",
    }
  }

  if (state.products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8"
      >
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative mx-auto w-24 h-24 mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-xl" />
            <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
              <Package className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Nenhum produto cadastrado
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Comece cadastrando seu primeiro produto para gerenciar seu estoque de forma inteligente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ProductForm mode="create" />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div
        variants={tableVariants}
        initial="hidden"
        animate="visible"
        className="glass-card overflow-hidden"
      >
        {/* Header da Tabela */}
        <div className="p-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/60 rounded-xl blur opacity-30 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Produtos
                </h3>
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? "s" : ""}{" "}
                  encontrado{filteredProducts.length !== 1 ? "s" : ""}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              {/* Search Bar */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  <Input
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64 h-10 rounded-2xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Novo Produto Button */}
              <ProductForm mode="create" />
            </motion.div>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 font-medium text-muted-foreground/80">
                  Produto
                </th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground/80">
                  Categoria
                </th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground/80">Preço</th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground/80">
                  Estoque
                </th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground/80">Status</th>
                <th className="text-left py-4 px-6 font-medium text-muted-foreground/80">Ações</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredProducts.map((product, index) => {
                  const stockStatus = getStockStatus(product.quantity)
                  return (
                    <motion.tr
                      key={product.id}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200 group"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              className="relative w-14 h-14 rounded-xl object-cover border-2 border-white/10 group-hover:border-primary/30 transition-all duration-300"
                              width={56}
                              height={56}
                              onError={e => {
                                const target = e.target as HTMLImageElement
                                target.src = "https://via.placeholder.com/56x56?text=Produto"
                              }}
                            />
                          </motion.div>

                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {product.name}
                            </div>
                            <div className="text-sm text-muted-foreground/70 line-clamp-2 max-w-[200px]">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <Badge
                          variant="outline"
                          className="border-white/20 bg-white/5 text-foreground/80"
                        >
                          {product.category}
                        </Badge>
                      </td>

                      <td className="py-4 px-6">
                        <span className="font-semibold text-foreground">
                          {formatCurrency(product.price)}
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        <span className="font-semibold text-foreground">{product.quantity}</span>
                      </td>

                      <td className="py-4 px-6">
                        <Badge
                          variant={stockStatus.variant}
                          className={`bg-gradient-to-r ${stockStatus.color} text-white border-0`}
                        >
                          {stockStatus.label}
                        </Badge>
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <ProductForm product={product} mode="edit" />

                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteClick(product)}
                              className="w-9 h-9 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 hover:from-rose-500/20 hover:to-pink-500/20 text-rose-500 hover:text-rose-400 transition-all duration-300"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </td>
                    </motion.tr>
                  )
                })}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Dialog de Confirmação */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="glass-card border-white/20">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Confirmar Exclusão
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Tem certeza que deseja excluir o produto "{productToDelete?.name}"? Esta ação não pode
              ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-3">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              className="rounded-xl border-white/20 bg-white/5 hover:bg-white/10"
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
