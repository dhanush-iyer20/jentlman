import React from 'react'
import styles from './style.js'
import './index.css'
import {Navbar} from './components/index.js'
import { Home } from './Pages/Home.jsx'
import  Features  from './Pages/Features.jsx'
import  TargetMarket  from './Pages/TargetMarket.jsx'
import  Shaderecommend  from './Pages/Shaderecommend.jsx'
import  Products  from './Pages/Products.jsx'
import  Cards  from './Pages/Cards.jsx'

const RouterFuntion = ()=>{
  switch (window.location.pathname){
    case "/home":
      return <><Home /><Features /><TargetMarket /><Shaderecommend /><Products /><Cards /></> 
      case "/":
        return <><Home /><Features /><TargetMarket /><Shaderecommend /><Products /><Cards /></> 
  }
1
}

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}` }>
          <Navbar />
        </div>
      </div>

      {RouterFuntion()}
    </div>
  )
}

export default App
