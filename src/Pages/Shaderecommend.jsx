import React from 'react'
import {Clients} from '../components/index.js'
import styles from '../style.js'
const Shaderecommend = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary mb-[300px]`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>
  )
}

export default Shaderecommend
