import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[170px] h-[170px] bg-blue-gradient p-[2px] cursor-pointer rounded-full`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full flex-col bg-primary`}>
      <div className={`${styles.flexStart} flex-row`}>
      <p className='font-poppins font-medium leading-[23px] text-[18px]'>
      <span className='text-gradient mr-2'>Recommend</span>
      </p>
      <img className='w-[23px] h-[23px] object-contain' src={arrowUp}/>
      </div>
      <p className='font-poppins font-medium leading-[23px] text-[18px]'>
      <span className='text-gradient'>Colour</span>
      
      </p>
      </div>
    </div>
  )
}

export default GetStarted
