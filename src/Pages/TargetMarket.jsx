import React from 'react'
import {CardDeal} from '../components/index.js'
import styles from '../style.js'
const TargetMarket = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
        <CardDeal />
        </div>
      </div>
  )
}

export default TargetMarket