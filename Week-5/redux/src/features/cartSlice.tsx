import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products : [],
    cart : []
}

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initCart(state,action) { 
        return {...state, products : action.payload}
       },
    addtoCart(state,action) {   },
    deleteinCart(state, action) {  },
  },
})

export const { initCart, addtoCart, deleteinCart } = counterSlice.actions
export default counterSlice.reducer