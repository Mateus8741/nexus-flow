"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { Edit, Plus, Sparkles } from "lucide-react"
import { useId, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useProducts } from "../../contexts/product-context"
import type { Product } from "../../types/product"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const productSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").min(3, "Nome deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(1, "Descrição é obrigatória")
    .min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.number().min(0.01, "Preço deve ser maior que zero"),
  quantity: z
    .number()
    .min(0, "Quantidade não pode ser negativa")
    .int("Quantidade deve ser um número inteiro"),
  imageUrl: z.string().url("URL da imagem deve ser válida").min(1, "URL da imagem é obrigatória"),
  category: z.string().min(1, "Categoria é obrigatória"),
})

type ProductFormData = z.infer<typeof productSchema>

interface ProductFormProps {
  product?: Product
  mode: "create" | "edit"
}

const formVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
    },
  },
}

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function ProductForm({ product, mode }: ProductFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { addProduct, updateProduct } = useProducts()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const nameId = useId()
  const categoryId = useId()
  const descriptionId = useId()
  const priceId = useId()
  const quantityId = useId()
  const imageUrlId = useId()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: product
      ? {
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity,
          imageUrl: product.imageUrl,
          category: product.category,
        }
      : {
          name: "",
          description: "",
          price: 0,
          quantity: 0,
          imageUrl: "",
          category: "",
        },
  })

  const handleFormSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true)
    try {
      if (mode === "create") {
        addProduct(data)
        toast.success("Produto cadastrado com sucesso!")
      } else if (product) {
        updateProduct({ id: product.id, ...data })
        toast.success("Produto atualizado com sucesso!")
      }
      reset()
      setIsOpen(false)
    } catch (error) {
      toast.error("Erro ao salvar produto. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      reset()
    }
    setIsOpen(open)
  }

  const triggerButton =
    mode === "create" ? (
      <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 h-12 px-6 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="h-5 w-5" />
          Novo Produto
        </Button>
      </motion.div>
    ) : (
      <motion.div whileHover={{ scale: 1.05, rotate: 5 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="w-9 h-9 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:from-primary/20 hover:to-primary/10 text-primary"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </motion.div>
    )

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="glass-card border-white/20 max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-4"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {mode === "create" ? "Cadastrar Novo Produto" : "Editar Produto"}
              </DialogTitle>
            </DialogHeader>

            <motion.form
              variants={formVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fieldVariants} className="space-y-3">
                  <Label htmlFor={nameId} className="text-sm font-medium text-foreground/80">
                    Nome do Produto *
                  </Label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Input
                      id={nameId}
                      {...register("name")}
                      placeholder="Digite o nome do produto"
                      className={`relative w-full h-11 rounded-xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 ${
                        errors.name ? "border-rose-500/50 focus:border-rose-500" : ""
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-rose-500 flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-rose-500 rounded-full" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-3">
                  <Label htmlFor={categoryId} className="text-sm font-medium text-foreground/80">
                    Categoria *
                  </Label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Input
                      id={categoryId}
                      {...register("category")}
                      placeholder="Ex: Eletrônicos, Roupas, etc."
                      className={`relative w-full h-11 rounded-xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 ${
                        errors.category ? "border-rose-500/50 focus:border-rose-500" : ""
                      }`}
                    />
                  </div>
                  {errors.category && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-rose-500 flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-rose-500 rounded-full" />
                      {errors.category.message}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div variants={fieldVariants} className="space-y-3">
                <Label htmlFor={descriptionId} className="text-sm font-medium text-foreground/80">
                  Descrição *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Textarea
                    id={descriptionId}
                    {...register("description")}
                    placeholder="Descreva o produto detalhadamente"
                    rows={3}
                    className={`relative w-full rounded-xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none ${
                      errors.description ? "border-rose-500/50 focus:border-rose-500" : ""
                    }`}
                  />
                </div>
                {errors.description && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-rose-500 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-rose-500 rounded-full" />
                    {errors.description.message}
                  </motion.p>
                )}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fieldVariants} className="space-y-3">
                  <Label htmlFor={priceId} className="text-sm font-medium text-foreground/80">
                    Preço (R$) *
                  </Label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Input
                      id={priceId}
                      type="number"
                      step="0.01"
                      min="0"
                      {...register("price", { valueAsNumber: true })}
                      placeholder="0.00"
                      className={`relative w-full h-11 rounded-xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 ${
                        errors.price ? "border-rose-500/50 focus:border-rose-500" : ""
                      }`}
                    />
                  </div>
                  {errors.price && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-rose-500 flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-rose-500 rounded-full" />
                      {errors.price.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-3">
                  <Label htmlFor={quantityId} className="text-sm font-medium text-foreground/80">
                    Quantidade em Estoque *
                  </Label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Input
                      id={quantityId}
                      type="number"
                      min="0"
                      {...register("quantity", { valueAsNumber: true })}
                      placeholder="0"
                      className={`relative w-full h-11 rounded-xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 ${
                        errors.quantity ? "border-rose-500/50 focus:border-rose-500" : ""
                      }`}
                    />
                  </div>
                  {errors.quantity && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-rose-500 flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-rose-500 rounded-full" />
                      {errors.quantity.message}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div variants={fieldVariants} className="space-y-3">
                <Label htmlFor={imageUrlId} className="text-sm font-medium text-foreground/80">
                  URL da Imagem *
                </Label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Input
                    id={imageUrlId}
                    type="url"
                    {...register("imageUrl")}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className={`relative w-full h-11 rounded-xl border-white/20 bg-white/5 backdrop-blur-sm focus:border-primary/50 focus:bg-white/10 transition-all duration-300 ${
                      errors.imageUrl ? "border-rose-500/50 focus:border-rose-500" : ""
                    }`}
                  />
                </div>
                {errors.imageUrl && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-rose-500 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-rose-500 rounded-full" />
                    {errors.imageUrl.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fieldVariants} className="flex justify-end gap-3 pt-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="h-11 px-6 rounded-xl border-white/20 bg-white/5 hover:bg-white/10 text-foreground/80"
                  >
                    Cancelar
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 px-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : mode === "create" ? (
                      "Cadastrar"
                    ) : (
                      "Atualizar"
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}
