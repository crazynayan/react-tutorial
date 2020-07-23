import React from "react"
import products from "./productsData"


function Product(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>
        {props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
        - {props.product.description}
      </p>
    </div>
  )
}


function ProductList() {
  const productComponents = products.map(item => <Product key={item.id} product={item}/>)
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default ProductList
