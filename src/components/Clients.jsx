import React, { useState,useRef } from "react";
import styles,{layout} from '../style'
import {Modal} from 'react-responsive-modal'

function getElementPosition(obj) {
  var curleft = 0, curtop = 0;
  if (obj.offsetParent) {
      do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
      return { x: curleft, y: curtop };
  }
  return undefined;
}

function getEventLocation(element,event){
 
  var pos = getElementPosition(element);
  
  return {
    x: (event.pageX - pos.x),
      y: (event.pageY - pos.y)
  };
}

const items = [
  {
  id:1,title:'Tone ID: Type 1',desc:"Your tone ID has been updated to Type 1",unitEcoCost:"",sp:""
},
  {
  id:2,title:'Tone ID: Type 2',desc:"Your tone ID has been updated to Type 2",unitEcoCost:"",sp:""
},
  {
  id:3,title:'Tone ID: Type 3',desc:"Your tone ID has been updated to Type 3",unitEcoCost:"",sp:""
},
  {
  id:4,title:'Tone ID: Type 4',desc:"Your tone ID has been updated to Type 4",unitEcoCost:"",sp:""
},
  {
  id:5,title:'Tone ID: Type 5',desc:"Your tone ID has been updated to Type 5",unitEcoCost:"",sp:""
},
  {
  id:6,title:'Error',desc:"Sorry, Please try again",unitEcoCost:"",sp:""
},

]

const showRecommendations = ()=>{}


const Clients = () => {
  const [modalState,setModalState] = useState(false)
  const mainCanvas = useRef()
  const [selectedImage,setSelectedImage]=useState(null)
  const [pixeldata,setpixeldata]=useState()
  const [rgbState,setRgbState] = useState(null)
  const [showText,setShowText] = useState(false)
  const [id,setId] = useState()
  return (
   <><section id='featues' className={`${layout.section}`}>
    <div className={`${layout.sectionInfo2} `}>
    <h2 className={styles.heading2}>Find out your Tone ID <br className='sm:block hidden'/> </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-7`}>Upload an image and click on your skin and press assign.It will assign a Tone ID for you with which you can order from other stores or our website</p>
    <input
    className="rounded-3 mt-0 font-poppins bg-blue-gradient text-black"
    type="file"
    name="myImage"
    onChange={(event) => {
      setSelectedImage(event.target.files[0]);
    }}
  />

    </div>
    <div className={`${layout.sectionImg} flex-col`}>
    <canvas ref={mainCanvas} 
    onClick={function(event){
      setShowText(true)
      // Get the coordinates of the click
      var eventLocation = getEventLocation(mainCanvas.current,event);
      // Get the data of the pixel according to the location generate by the getEventLocation function
      var context = mainCanvas.current.getContext('2d');
      var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 
  
      // If transparency on the pixel , array = [0,0,0,0]
      if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
          console.log("Empty");
      }
      let rgb = "rgba(" + pixelData[0] + "," + pixelData[1] + "," + pixelData[2] + "," + pixelData[3] + ")";
      console.log(rgb);
      setRgbState(rgb)
      setpixeldata(pixelData)
  }}></canvas>
    {selectedImage && (
      <div>
      <img alt="not fount" width={"400px"} height={"400px"}
      id='image' src={URL.createObjectURL(selectedImage)} className='border-[3px] hidden' onLoad={(e)=>{
        
        mainCanvas.current.style.display = 'flex';
        var image = e.currentTarget
        var context = mainCanvas.current.getContext('2d')
        mainCanvas.current.width = 400;
        mainCanvas.current.style.width = 400;
        mainCanvas.current.height = 400;
        mainCanvas.current.style.height = 400;
        context.drawImage(image, 0, 0,400,400);
        let imgDataObj = context.getImageData(
          0,
          0,
          mainCanvas.current.width,
          mainCanvas.current.height
        );
        let data = imgDataObj.data;
      }} 
      />
     
      <br />
      <button className='text-black bg-blue-gradient mr-10 p-3 rounded-[4px] mt- mb-0' onClick={()=>
        {setSelectedImage(()=>{
        return null
      })
      mainCanvas.current.style.display = 'none';

    }
    
    }>Remove</button>
      
      <button className='text-black bg-blue-gradient p-3 rounded-[4px] mt- mb-0' onClick={()=>{
        console.log(pixeldata[0],pixeldata[1],pixeldata[2]);
        if(pixeldata[0]>230 && pixeldata[1]>190 && pixeldata[2]>170){
          setId(()=>{return 1})
        }else if(pixeldata[0]>200 && pixeldata[0]<230 && pixeldata[1]>160 && pixeldata[1]<190 && pixeldata[2]>140 && pixeldata[2]<170){
          setId(()=>{return 2})
        }else if(pixeldata[0]>150 && pixeldata[0]<200 && pixeldata[1]>120 && pixeldata[1]<160 && pixeldata[2]>110 && pixeldata[2]<140){
          setId(()=>{return 3})
        }else if(pixeldata[0]>120 && pixeldata[0]<150 && pixeldata[1]>90 && pixeldata[1]<120 && pixeldata[2]>80 && pixeldata[2]<110){
          setId(()=>{return 4})
        }else if(pixeldata[0]>60 && pixeldata[0]<120 && pixeldata[1]>40 && pixeldata[1]<90 && pixeldata[2]>40 && pixeldata[2]<80){
          setId(()=>{return 5})
        }else{
          setId(()=>{return 6})
        }
        setModalState(()=>{
          return true
        })
      }}>Assign Tone ID</button>
      {showText && <h4 className='text-white font-poppins text-2xl mt-6'>Press Assign Tone ID to continue</h4>}
      <div style={{backgroundColor: rgbState}} className={`h-[100px] w-[100px] rounded-[5px] ${!rgbState?"hidden":"flex"} text-white mt-10`}>
      </div>
      </div>
    )}
    </div>
    <Modal animationDuration="0" open={modalState} onClose={(e)=>{
      e.currentTarget.parentElement.style.visibility==="hidden"
      setModalState(()=>{
      false
    })}} center>{items.map(item=>{if(item.id===id){
      return <><h2 className='text-black text-bold mt-4 font-poppins text-[20px] sm:text-[25px]'>{item.title}</h2>
      <p className=''>{item.desc}</p>
      <div style={{backgroundColor: rgbState}} className={`h-[100px] w-[100px] rounded-[5px] ${!rgbState?"hidden":"flex"} text-white mt-10`}>
      </div></>
    }})}</Modal>
  </section>
  </>
  )
}

export default Clients
