import React from 'react'
import Product from '../components/Product'
import styles from '../style'
const Products = () => {
  return (
    <div className=' flex flex-col '>
    <h1 className={`${styles.heading2} text-center mb-8`}>Products</h1>
      <Product />
    </div>
  )
}

export default Products
