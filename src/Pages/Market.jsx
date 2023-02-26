import React from 'react'
import styles from '../style'
import Place from '../components/Place'
const Market = () => {
  return (
    <div id="market" className=' flex flex-col mb-[100px] '>
    <h1 className={`${styles.heading2} text-center mb-10`}>Place</h1>
    <Place />
    </div>
  )
}

export default Market
