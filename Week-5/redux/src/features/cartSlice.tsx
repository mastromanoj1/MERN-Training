import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart : []
}

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart(state : any ,action) {  
      return {...state,cart : [...state.cart, action.payload]};
     },
    removefromCart(state , action ) {
      return{...state,cart : state.cart.filter(
        (product :any ) => product.id !== action.payload
      )}
  },
}
})

export const { addtoCart, removefromCart } = counterSlice.actions
export default counterSlice.reducer