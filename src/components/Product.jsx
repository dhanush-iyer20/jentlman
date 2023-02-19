import React,{useState,useRef} from 'react'
import Carousel from "react-elastic-carousel";
import '../index.css'
import {hairremover,concealer,foundation,facewash} from '../assets/index'
import Button from './Button'
import {Modal} from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
const items = [
    {
    id:1,title:'Facewash',img:facewash,desc:"This facewash contains x,x,x, and also provides x,x,xasdasd",unitEcoCost:"49$",sp:"50$"
},
  
    {
    id:2,title:'Hair remover',img:hairremover,desc:"This facewash contains x,x,x, and also provides x,x,xasdasd"
},
  
    {
    id:3,title:'Concealer',img:concealer,desc:"This facewash contains x,x,x, and also provides x,x,xasdasd"
},
  
    {
    id:4,title:'Foundation',img:foundation,desc:"This facewash contains x,x,x, and also provides x,x,xasdasd"
},
  
]

const Product = () => {
  const [modalState,setModalState] = useState(false)
  const [id,setid] = useState()
  const modalref = useRef()
  return (
    <div>
    
      <Carousel className='mb-10 '>{items.map(item =>
        <div outerSpacing="0" key={item.id} className='flex items-center justify-between align-middle flex-col feature-card sm:h-[530px] sm:w-[400px] h-[300px] w-[250px] bg-white mb-10 rounded-xl'>
        <h2 className='text-white text-bold mt-4 font-poppins text-[20px] sm:text-[25px]'>{item.title}</h2>
        
        <img className='h-[40%] sm:h-[100%]' src={item.img}/>
        <div className='m-8 text-white font-poppins' >
        <p className='text-center text-[10px] sm:text-[15px]'>{item.desc}</p>
        </div>
        
        <div onClick={()=>{
          console.log("hello");
          setModalState(()=>{return true})
          setid(item.id)
        }}><Button /></div>
        
        </div>)}</Carousel>
        <Modal animationDuration="0" open={modalState} onClose={(e)=>{
          e.currentTarget.parentElement.style.visibility==="hidden"
          setModalState(()=>{
          false
        })}} center>{items.map(item=>{if(item.id===id){
          return <><h2 className='text-black text-bold mt-4 font-poppins text-[20px] sm:text-[25px]'>{item.title}</h2>
          <p className=''>Cost : {item.unitEcoCost}</p>
          <p className=''>Selling price : {item.sp}</p></>
        }})}</Modal>
    </div>
  )
}

export default Product
