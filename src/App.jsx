import React from 'react'
import Category from './Components/Category'
import Navbar from './Components/Navbar'
import TitleBar from './Components/TitleBar'
import Hero from './Components/Hero'
import Storeinfo from './Components/Storeinfo'
import Heritage from './Components/Heritage'
import Services from './Components/Services'
import Testimonals from './Components/Testimonals'
import './index.css';
import Visit from './Components/Visit'

const MainApp = () => {
  return (
    <div className='flex flex-col w-full min-h-screen  bg-amber-50'>
      <Navbar/>
      <TitleBar/>
      <Hero/>
      
      
      <Category/>
      <Heritage/>
      <Services/>
      <Testimonals/>
      <Visit/>
      <Storeinfo/>
     
    </div>
  )
}

export default MainApp
