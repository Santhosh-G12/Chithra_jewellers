import React from 'react'
import { Mail,MapPin, Phone , Clock7  } from 'lucide-react';

const Visit = () => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl text-amber-800 font-bold mb-4 '>Visit our Showroom</h1>
      <p className='text-amber-700'>Experience our collections in person and let our expert staff guide you through our extensive range of jewelry. Special appointments are available for bridal consultations.</p>
      <div className="contactinfo text-left flex flex-col m-5 gap-2 bg-white p-5 border  ">
        <h1 className='text-2xl text-amber-800 font-bold'>Contact Information</h1>
        <div className='flex p-2 gap-4'>
           <Mail className='text-amber-800'/>
           <h3>info@chitrajewellers.com</h3>
        </div>
        <div className='flex p-2 gap-4'>
          <MapPin className='text-amber-800'/>
           <h3>123 Main Street, Tirunelveli, Tamil Nadu, India</h3>
        </div>
        <div className='flex p-2 gap-4'>
          <Phone className='text-amber-800'/>
           <h3>+91 9985438420</h3>
        </div>
        <div className='flex p-2 gap-4'>
          <Clock7 className='text-amber-800'/>
           <h3>Mon-Sat: 10:00 AM - 8:00 PM</h3> 
           <p>Sunday: 11:00 AM - 6:00 PM</p>
        </div>
      
        
        
        
        

      </div>
      <div className="booking text-start m-5 bg-white border   ">
          <h1 className='text-amber-800 font-bold text-2xl m-3 mt-4 '>Schedule an Appoinment</h1>
          <form action="" className='w-full  bg-white flex justify-start flex-col p-5'>
            <div>
              <label className='block text-amber-800 mb-1'>Name</label>
              <input className='w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none' name='name' placeholder='Enter your Name'></input>
            </div>
            <div>
              <label className='block text-amber-800 mb-1' >Phone </label>
              <input className='w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none' name='Phone' placeholder='Enter your Phone Number'></input>
            </div>
            <div>
              <label className='block text-amber-800 mb-1'>Time</label>
              <input className='w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none' name='Time' placeholder='Enter your Prefered date & Time'></input>
            </div>
            <div className='mt-5 '>
              <button className='bg-amber-700 text-amber-100 text-lg p-3 rounded-xl'>Request Appoinment</button>
            </div>
         
           
            
          </form>
        </div>
    </div>
  )
}

export default Visit
