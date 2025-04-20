import React from 'react'
import { Facebook, Instagram,Twitter } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='bg-amber-800 text-amber-100 flex justify-between p-2 '>
      <p>+91 9840340203</p>
      <div className="social flex space-x-3">
        <Facebook />
        <Instagram/>
        <Twitter/>
      </div>
    
    </div>
  )
}

export default Navbar
