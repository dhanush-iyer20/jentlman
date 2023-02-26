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
        <h2 className={styles.heading2}>Who are we <br className='sm:block hidden'/>targeting?</h2>
        <audio controls>
            <source src="./sound.mp3" type="audio/mp3" />
         </audio>
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
