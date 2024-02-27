import React, { useState } from 'react'
import { addtoCart, removefromCart } from '../../features/cartSlice'
import { useDispatch } from 'react-redux'

const Product = (props : any) => {
    const dispatch = useDispatch()
    const data = props.data
    const [toggle, settoggle] = useState(false)
    function handleClick () {
        if (toggle) {
            settoggle(!toggle)
            dispatch(removefromCart(data.id))
        } else {
            settoggle(!toggle)
            dispatch(addtoCart(data))
         
        }
    }
  return (
    <div>
        <h3> {data.title}</h3>
        <p> {data.description}</p>
        <button onClick={() => handleClick()}> {toggle ? "Remove from cart" : 'Add to Cart'}</button>
    </div>
  )
}

export default Product