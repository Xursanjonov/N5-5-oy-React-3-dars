import React from 'react'
import { ProductCard } from '../../components/cards/product-Card'
import { productsData_1 } from '../../static'

const Main = () => {
    const productMap = productsData_1?.map((product) => <ProductCard key={product.id} {...product} /> )

  return (
    <main className=''>{productMap}</main>
  )
}

export default Main