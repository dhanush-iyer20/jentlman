import React from 'react'
import {useState} from 'react'

import {close,logo,menu} from '../assets'
import {navLinks} from '../constants/index'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="z-50 w-full flex py-6 justify-between items-center navbar">
      <a href="/"><img src={logo} alt="logo" className="w-[124px] h-[70px]"/></a>
      
      <div className="z-50 flex flex-1 justify-end items-center">
        <img src={toggle ? close:menu} className={`w-[28px] h-[28px] object-contain cursor-pointer transition-2s`} onClick={()=>{
          setToggle((prev)=>
            !prev
          )
        }}/>
        <div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-16  mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul z-50 className="list-none flex flex-col justify-end items-center flex-1">
      {
        navLinks.map((nav,index) => {
          return <li key={nav.id} className={`
          font-large
          font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1 ? 'mr-0' : 'mb-4'}` }><a href={`#${nav.id}`}>{nav.title}</a></li>
        })
      }
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
