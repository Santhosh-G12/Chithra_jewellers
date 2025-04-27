import React, { useState } from 'react'
import { Search, Menu } from 'lucide-react';


const TitleBar = () => {
  const [isMenuClicked, setisMenuClicked] = useState(false)

  return (
    <div className='flex justify-between p-2 bg-amber-100 items-center py-5'>
      <div className="title justify-center items-center">
        <h1 className='text-3xl text-[#800000] font-bold'>சித்திரா ஜுவல்லர்ஸ் </h1>
      </div>
      <div className="navbar ">
        <div className='hidden lg:flex lg:gap-5 mr-5 '>
          <a className='text-amber-900 font-light'>Home</a>
          <a>Collections</a>
          <a>About</a>
          <a>Service</a>
          <a>Contact</a>
        </div>

        <div className="icons flex   ">

          <Menu className='lg:hidden' onClick={()=>setisMenuClicked(!isMenuClicked)} />
          {isMenuClicked && (
            <div className='absolute top-28 w-full flex flex-col border-t border-t-amber-800 gap-10 left-0 z-10  justify-center items-center bg-amber-100 opacity-90 transition-all transform '>

              <a className='text-amber-900 font-semibold border-b-2 border-amber-800 hover:bg-amber-100 '>Home</a>
              <a className='text-amber-900 font-semibold border-b-2 border-amber-800'>Collections</a>
              <a className='text-amber-900 font-semibold border-b-2 border-amber-800'>About</a>
              <a className='text-amber-900 font-semibold border-b-2 border-amber-800'>Service</a>
              <a className='text-amber-900 font-semibold border-b-2 border-amber-800'>Contact</a>
            </div>
          )}


        </div>




      </div>



    </div>
  )
}

export default TitleBar
