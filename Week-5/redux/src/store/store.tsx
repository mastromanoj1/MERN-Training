import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import productsSlice from '../features/productSlice'

const store = configureStore({
  reducer: {
    cart : cartSlice,
    products : productsSlice
  }
})

export default store