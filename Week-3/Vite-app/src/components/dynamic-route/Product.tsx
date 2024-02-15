import React from 'react'
import { Link } from 'react-router-dom'


const Product = (props : any) => {
  return (
    <>
        <h4> {props.product.title}  </h4>
        <Link to={'/product/' + props.product.id} > Show More </Link>

    </>
  )
}

export default Product