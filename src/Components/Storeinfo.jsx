import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Mail,MapPin, Phone , Clock7  } from 'lucide-react';


const Storeinfo = () => {
  return (
        <footer>
<div className="name bg-amber-800 p-3 md:p-5 ">
          <div className="space-y-5 ">
            <h1 className='text-amber-200 font-bold text-3xl '>சித்திரா ஜுவல்லர்ஸ்</h1>
            <p className='text-amber-100'>Offering the finest gold, diamond, and silver jewelry since 1985.</p>
          </div>
          
          <div className="icons flex gap-5 mt-5">
            <Facebook className='text-amber-100' />
            <Instagram className='text-amber-100' />
            <Twitter className='text-amber-100' />
          </div>
          <div className="links flex flex-col gap-3 mt-5">
            <h1 className='text-amber-200 font-semibold text-2xl'>Quick Links</h1>
            <h1 className='text-amber-100 cursor-pointer'>Home</h1>
            <h1 className='text-amber-100 cursor-pointer'>Collections</h1>
            <h1 className='text-amber-100 cursor-pointer'>Our Craftsmanship</h1>
            <h1 className='text-amber-100 cursor-pointer'>About Us</h1>
            <h1 className='text-amber-100 cursor-pointer'>Visit Us</h1>
          </div>
          <div className="contact text-amber-100 mt-5 ">
            <h1 className='text-amber-200 font-semibold text-2xl'>Contact</h1>
             <div className='flex p-2 gap-4 text-amber-100'>
                       <Mail className='text-amber-200'/>
                       <h3>info@chitrajewellers.com</h3>
                    </div>
                    <div className='flex p-2 gap-4'>
                      <MapPin className='text-amber-200'/>
                       <h3>123 Main Street, Tirunelveli, Tamil Nadu, India</h3>
                    </div>
                    <div className='flex p-2 gap-4'>
                      <Phone className='text-amber-200'/>
                       <h3>+91 9985438420</h3>
                    </div>
                    <div className='flex p-2 gap-4'>
                      <Clock7 className='text-amber-200'/>
                       <h3>Mon-Sat: 10:00 AM - 8:00 PM</h3> 
                       <p>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>

          </div>
          <div className="copyrights text-center text-amber-100 space-y-5 border-t border-t-amber-100 ">
            <p>&copy; {new Date().getFullYear()} Chitra Jewellery. All rights reserved.</p>
            <p className='text-sm'>Designed & Crafted by <span className='text-amber-200'>Santhosh</span></p>
          </div>
          <div>
            
          </div>
        </div>
        </footer>
          
    
      
    
  )
}

export default Storeinfo
