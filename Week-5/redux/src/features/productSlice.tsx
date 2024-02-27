import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'




const initialState = {
    products : [],
    status : 'idle'
}

const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // initProduct(state,action) { 
    //     return {...state, products : action.payload}
    //    },
   
    },
    extraReducers : (builder : any) => {
        builder
        .addCase(getProducts.fulfilled , (state : any ,action : any) => {
            state.products = action.payload
            state.status = 'idle'
        }).addCase(getProducts.rejected,(state : any, action : any) => {
            state.status = "error"
        })
        .addCase(getProducts.pending,(state : any, action : any) => {
            state.status = "loading"
        })
    }
})

export const getProducts = createAsyncThunk('products/get',async () => {
   
    let response = await axios.get('https://fakestoreapi.com/products?limit=5')
    let data = response.data
    return  data;
    
})
export default counterSlice.reducer