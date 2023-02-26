import React from 'react'
import {Business} from '../components/index.js'
import styles from '../style.js'
const Features = () => {
  return (
    <div id='whyus' className={`${styles.flexStart} ${styles.paddingX} bg-primary mb-[100px]`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
        </div>
      </div>
  )
}

export default Features
