import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products : ["Applw",'Banana'],
    cart : []
}

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initCart(state,action) {    },
    addtoCart(state,action) {   },
    deleteinCart(state, action) {  },
  },
})

export const { initCart, addtoCart, deleteinCart } = counterSlice.actions
export default counterSlice.reducer