import products from "../data"
import { Product } from "./Product"

const PersonalDetails = () => {

  console.log(products[0],"Products")
  return (
    <div>
      <h2>Personal Details </h2>
      {products.map((ele) => {
        return(
          <>
              <Product key={ele.id} product={ele}/>
          </>
          
        )
      })}
    </div>
  )
}

export default PersonalDetails