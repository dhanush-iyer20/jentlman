import React from 'react'


const items = [
    {
    title:"Lack of awareness",img:"https://images.unsplash.com/photo-1570411004091-f33db096d9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
    {
    title:"Expensive products",img:"https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
},
    {
    title:"Lack of choice",img:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            
        </figcaption>
    </figure>
      })}
    </div>
  )
}

export default Card
