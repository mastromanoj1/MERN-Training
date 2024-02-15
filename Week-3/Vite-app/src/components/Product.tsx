import React, { useState } from 'react'


export const Product = (props : any) => {
  console.log(props.product,"props.product")
  const [Show, setShow] = useState(false)
  return (
    <>
        <img src={props.product.image} width={'300px'}/>
        <h3> {props.product.title} </h3>
        <button  onClick={() => setShow(!Show)} > Show More</button>
        {Show ? 
        <>
          <p> Price : {props.product.price}</p>
          <p> Rating : {props.product.rating.rate} ({props.product.rating.count})</p>
          <p> category : {props.product.category}</p>
          <p> Description : {props.product.description}</p>
        </>
        : "" }
        

        <hr/>
    </>
  )
}
