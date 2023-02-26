import React from 'react'


const items = [
    {
    title:"Lack of awareness",img:"https://images.unsplash.com/photo-1570411004091-f33db096d9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    para:"Many men may not know how to use makeup or which products are best for their skin type and concerns. This can make it challenging for men to get started with using makeup and may lead to frustration or disappointment with the results."
},
    {
    title:"Expensive products",img:"https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    para:"Men's makeup products can be more expensive than women's makeup products, which can make it difficult for some men to justify the cost"
},
    {
    title:"Lack of choice",img:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    para:"One of the biggest pain points in the men's makeup category is the limited shade range of products. Men come in a variety of skin tones, and it can be challenging for many men to find a product that matches their skin tone."
},
]

const Card = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
      {items.map((item)=>{
        return <figure className="image-block m-9 h-[50%] sm:h-[100%]">
        <h1 className=''>{item.title}</h1>
        <img src={item.img} alt="" />
        <figcaption>
            <h3>
                More Info
            </h3>
            <p>{item.para}</p>
            
        </figcaption>
    </figure>
      })}
    </div>
  )
}

export default Card