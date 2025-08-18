export interface Product {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  imageUrl: string
  category: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateProductData {
  name: string
  description: string
  price: number
  quantity: number
  imageUrl: string
  category: string
}

export interface UpdateProductData extends Partial<CreateProductData> {
  id: string
}

export interface ProductStats {
  totalProducts: number
  totalValue: number
  lowStockProducts: number
  outOfStockProducts: number
}
