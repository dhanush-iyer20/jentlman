import React from 'react'
import Card from '../components/Card'
import styles from '../style'
const Cards = () => {
  return (
    <div className=' flex flex-col mt-[200px] '>
    <h1 className={`${styles.heading2} text-center mb-10`}>Why us?</h1>
      <Card />
    </div>
  )
}

export default Cards
