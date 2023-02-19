import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    

    <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
    <img src={discount} className='w-[32px] h-[32px]'/>
    <span className={`text-white ${styles.paragraph}`}>By the men, For the men</span>
    </div>


    <div className='flex flex-row justify-between w-full items-center'>
    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading -[75px]'>INTRODUCING <br className='sm:block hidden'/>{" "}<span className='text-gradient'>JENTLMAN</span><br className='sm:block hidden'/>{" "}</h1>
    <div className='ss:flex hidden md:mr-4 m-0 ml-7'>
    </div>

    </div>
      <h1 className=' font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading -[75px]w-full'>COSMETICS</h1>
      <p className={`${styles.paragraph} max-w-[470px] xl:mt-20 mt-5`}>
      Our team has created this amazing facewash for the young generation of leaders,creators,impact makers with a view to be as sustainable as possible</p>
    </div>
    <div className={`${styles.flexCenter} md:my-0 my-10 relative`}>
    <img src={robot} className="w-[100%] hd-[100%] relative z-[5]"/>
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
    
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
    </div>
    </section>
  )
}

export default Hero