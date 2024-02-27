import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { getProducts } from '../../features/productSlice'



const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector((state :any ) => state.products.products) // to
    const [toggle, settoggle] = useState(false)
    console.log(products,"Products")
    useEffect(() => {
      dispatch(getProducts())
    }, [])
    
  return (
    <div>
        {products.map((product : any) => {
          return (
           <Product data={product}/>
          )
        })}
    </div>
  )
}

export default Products