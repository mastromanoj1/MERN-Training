import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { removefromCart } from '../../features/cartSlice'



const Cart = () => {
  // const dispatch = useDispatch()
    const cartproducts = useSelector((state :any ) => state.cart.cart) // to
    console.log(cartproducts,"Cart Products")
    const dispatch = useDispatch()
  return (
    <div>
      {cartproducts.map((cart : any) => {
        return(
        <div key={cart.id}>
          <h3> {cart.title}</h3>
         <p> {cart.description}</p>
         <button onClick={() => dispatch(removefromCart(cart.id))}> Remove from Cart</button>
       </div>
        )
      
      })}
    </div>
  )
}

export default Cart