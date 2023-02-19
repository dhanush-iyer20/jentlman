import React from 'react'
import styles from '../style.js'
import '../index.css'
import {Hero, Stats} from '../components/index.js'
export const Home = () => {
    return (
        <>
        <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
      </>
    )
}
