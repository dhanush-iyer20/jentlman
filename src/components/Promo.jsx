import React from 'react'
import { influencer,ad,contest } from '../assets'
const items = [
  {
  title:"Digital marketing",img:ad
},
  {
  title:"Influencer marketing",img:influencer
},
  {
  title:"Beauty contest",img:contest
},

]
const Promo = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
      {items.map((item)=>{
        return <figure className="image-block m-9 h-[40%] sm:h-[100%]">
        <h1 className=''>{item.title}</h1>
        <img src={item.img} alt="" />
    </figure>
      })}
    </div>
  )
}

export default Promo