import products from "../data"
import { Product } from "./Product"

const PersonalDetails = () => {

  console.log(products[0],"Products")
  return (
    <div>
      <h2>Product Details </h2>
      {products.map((ele) => {
        return(
          <>
              <Product key={ele.id} value={ele}/>
          </>
          
        )
      })}
    </div>
  )
}

export default PersonalDetails