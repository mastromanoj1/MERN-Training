import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initCart } from '../../features/cartSlice'


const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state :any ) => state.cart.products) // to
    console.log(products,"Products")
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products?limit=5')
      .then((res) => {
        return dispatch(initCart(res.data))
      })
    }, [])
    
  return (
    <div>Products</div>
  )
}

export default Products