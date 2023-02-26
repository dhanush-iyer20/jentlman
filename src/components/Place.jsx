import React from 'react'
import {nykaa,Flipkart} from '../assets'
const items = [
    {
    title:"Amazon",img:"https://i.pinimg.com/originals/a5/d7/4e/a5d74ec9fb649ebf3d47ecf07bb4d26a.png"
},
    {
    title:"Flipkart",img:Flipkart
},
    {
    title:"Nykaa",img:nykaa
},
{
    title:"Website",img:""
},
]
const Place = () => {
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

export default Place