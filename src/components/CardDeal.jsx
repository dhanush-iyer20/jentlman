import React from 'react'
import { card,graph } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
    <>
    <section className={layout.sectionReverse}>

    <div className={`${layout.sectionImgReverse}`}>
    <img src={card} className='h-[100%] w-[100%]'/>
  </div>


      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find your perfect<br className='sm:block hidden'/>face partner</h2>
        <p className={`${styles.paragraph} mt-5 mb-8 max-w-[480px]`}>This was made by out team of insane expert people who love designing</p>
      </div>

      
    </section>
    <section className={layout.sectionReverse}>
    <div className={`${layout.sectionImg}`}>
    <img src={graph} className='h-[100%] w-[100%] hidden'/>
  </div>
    </section>
    </>
  )
}

export default CardDeal
