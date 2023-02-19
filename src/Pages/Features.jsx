import React from 'react'
import {Business} from '../components/index.js'
import styles from '../style.js'
const Features = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
      </div>
  )
}

export default Features
