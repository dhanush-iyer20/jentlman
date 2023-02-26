import React from 'react'
import Product from '../components/Product'
import styles from '../style'
const Products = () => {
  return (
    <div id='products' className=' flex flex-col '>
    <h1 className={`${styles.heading2} text-center mb-[100px]`}>Products</h1>
      <Product />
    </div>
  )
}

export default Products
