"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useReducer } from "react"
import { sampleProducts } from "../data/sample-products"
import type { CreateProductData, Product, ProductStats, UpdateProductData } from "../types/product"

interface ProductState {
  products: Product[]
  isLoading: boolean
  error: string | null
}

type ProductAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "UPDATE_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: string }
  | { type: "UPDATE_STOCK"; payload: { id: string; quantity: number } }

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
}

function productReducer(state: ProductState, action: ProductAction): ProductState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    case "SET_PRODUCTS":
      return { ...state, products: action.payload }
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] }
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      }
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      }
    case "UPDATE_STOCK":
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      }
    default:
      return state
  }
}

interface ProductContextType {
  state: ProductState
  addProduct: (product: CreateProductData) => void
  updateProduct: (product: UpdateProductData) => void
  deleteProduct: (id: string) => void
  updateStock: (id: string, quantity: number) => void
  getProductStats: () => ProductStats
  getProductById: (id: string) => Product | undefined
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    if (state.products.length === 0) {
      const productsWithIds = sampleProducts.map(product => ({
        ...product,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
      dispatch({ type: "SET_PRODUCTS", payload: productsWithIds })
    }
  }, [state.products.length])

  const addProduct = (productData: CreateProductData) => {
    const newProduct: Product = {
      ...productData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    dispatch({ type: "ADD_PRODUCT", payload: newProduct })
  }

  const updateProduct = (productData: UpdateProductData) => {
    const existingProduct = state.products.find(p => p.id === productData.id)
    if (!existingProduct) return

    const updatedProduct: Product = {
      ...existingProduct,
      ...productData,
      updatedAt: new Date(),
    }
    dispatch({ type: "UPDATE_PRODUCT", payload: updatedProduct })
  }

  const deleteProduct = (id: string) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id })
  }

  const updateStock = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_STOCK", payload: { id, quantity } })
  }

  const getProductStats = (): ProductStats => {
    const totalProducts = state.products.length
    const totalValue = state.products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    )
    const lowStockProducts = state.products.filter(
      product => product.quantity <= 10 && product.quantity > 0
    ).length
    const outOfStockProducts = state.products.filter(product => product.quantity === 0).length

    return {
      totalProducts,
      totalValue,
      lowStockProducts,
      outOfStockProducts,
    }
  }

  const getProductById = (id: string): Product | undefined => {
    return state.products.find(product => product.id === id)
  }

  const value: ProductContextType = {
    state,
    addProduct,
    updateProduct,
    deleteProduct,
    updateStock,
    getProductStats,
    getProductById,
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
