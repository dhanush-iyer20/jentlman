import React from 'react'
import styles from '../style'
import Promo from '../components/Promo'

const Promotion = () => {
  return (
    <div id="promo" className=' flex flex-col mb-[100px] '>
    <h1 className={`${styles.heading2} text-center mb-10`}>Promotion</h1>
    <Promo />
    </div>
  )
}

export default Promotion
