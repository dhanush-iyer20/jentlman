import React,{useState,useRef} from 'react'
import Carousel from 'react-elastic-carousel';
import '../index.css'
import {hairremover,concealer,foundation,facewash} from '../assets/index'
import Button from './Button'
import {Modal} from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";  const items = [
    {
    id:1,
    title:'Dry Facewash',
    img:facewash,
    desc:"Dry facewash is a foam-based facial cleanser that is designed to provide a deep yet gentle cleanse for all skin types.",
    chem:"₹40",
    pro:"₹15",
    pack:"₹6",
    ca:"₹14",
    trans:"₹3",
    ware:"₹6",
    market:"₹6",
    misc:"₹10",
    sp:"₹99"
},
    {
    id:2,
    title:'Concealer',
    img:concealer,
    desc:"Introducing our new Concealer for men, the perfect solution for covering up blemishes and dark spots while maintaining a natural look. ",
    chem:"₹40",
    pro:"₹7",
    pack:"₹4",
    ca:"₹14",
    trans:"₹6",
    ware:"₹3",
    market:"₹9",
    misc:"₹16",
    sp:"₹99"
},
    {
    id:3,
    title:'Hair remover',
    img:hairremover,
    desc:"Our hair remover lotion is specially formulated for men's skin, with a powerful but gentle formula that effectively dissolves hair in just a few minutes.",
    chem:"₹45",
    pro:"₹13",
    pack:"₹5",
    ca:"₹10",
    trans:"₹7",
    ware:"₹3",
    market:"₹8",
    misc:"₹8",
    sp:"₹99"
},
    {
    id:4,
    title:'Foundation',
    img:foundation,
    desc:"Introducing the new Foundation for men, the perfect addition to your daily grooming routine.",
    chem:"₹44",
    pro:"₹12",
    pack:"₹3",
    ca:"₹17",
    trans:"₹4",
    ware:"₹3",
    market:"₹7",
    misc:"₹9",
    sp:"₹99"
},
  
   
]

const Product = () => {
  const [modalState,setModalState] = useState(false)
  const [id,setid] = useState()
  const modalref = useRef()
  return (
    <div>
    
      <Carousel className='mb-10 '>
      {items.map(item =>
        <div outerSpacing="0" key={item.id} className='flex items-center justify-between align-middle flex-col feature-card sm:h-[700px] sm:w-[500px] h-[530px] w-[400px] bg-white mb-10 rounded-xl'>
        <h2 className='text-white text-bold mt-4 font-poppins text-[30px] sm:text-[40px] '>{item.title}</h2>
        
        <img className='h-[50%] sm:h-[100%]' src={item.img}/>
        <div className='m-8 text-white font-poppins' >
        <p className='text-center text-[20px] sm:text-[25px]'>{item.desc}</p>
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
          return <div className="flex flex-col text-center p-10"><h2 className='text-black text-bold mt-4 font-poppins text-[25px] sm:text-[50px] mb-5'>{item.title}</h2>
          <div className="flex flex-col text-left">
          <p className='text-[20px] sm:text-[40px]' >Chemical : {item.chem}</p>
          <p className='text-[20px] sm:text-[40px]' >Production : {item.pro}</p>
          <p className='text-[20px] sm:text-[40px]' >Packaging : {item.pack}</p>
          <p className='text-[20px] sm:text-[40px]' >CA : {item.ca}</p>
          <p className='text-[20px] sm:text-[40px]' >Transport : {item.trans}</p>
          <p className='text-[20px] sm:text-[40px]' >Warehousing : {item.ware}</p>
          <p className='text-[20px] sm:text-[40px]' >Marketplace cut : {item.market}</p>
          <p className='text-[20px] sm:text-[40px]' >Misc. : {item.misc}</p>
          <p className='text-[20px] sm:text-[40px]' >Selling price : {item.sp}</p>
          </div></div>
        }})}</Modal>
    </div>
  )
}

export default Product
