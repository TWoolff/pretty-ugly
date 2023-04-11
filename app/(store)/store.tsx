import {create} from 'zustand'

const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    openModal: false,
    setOpenModal: () => {
      set((state: any) => {
        return {
          ...state,
          openModal: !state.openModal
        }
      })
    },
    setProduct: (params: any) => {
      const { newProduct } = params
      set((state: any) => {
        return {
          ...state,
          product: newProduct
        }
      })
    },
    addItemToCart: (params: any) => {
      const { newItem } = params
      set((state: any) => {
        const newCart = [...state.cart, newItem]
        return {
          ...state,
          cart: newCart
        }
      })
    },
    removeItemFromCart: (params: any) => { 
      const {itemIndex} = params
      set((state: any) => { 
        const newCart = state.cart.filter((e: any, i: number) => {return i !== itemIndex})
        return {
          ...state,
          cart: newCart
        }
      })
    },
    emptyCart: () => {
      set((state: any) => {
        return {
          ...state,
          cart: []
        }
      })
    }
  })
)

export default useCart