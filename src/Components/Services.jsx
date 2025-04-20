import React from 'react'
import { Award } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';

const Services = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-16" >
      <div>
        <h1 className='text-3xl font-bold text-amber-900 text-center mb-12'> Our Services</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-5 p-5'>
        <div className='Design border flex flex-col justify-center items-center gap-2 p-6 shadow-md rounded-lg bg-white '>
          <div className='rounded-full p-2 bg-amber-800'>
            <Award  size={30} className="text-amber-100"/>
          </div>
          
          <h1 className='text-xl font-bold text-amber-900 '>Custom Design</h1>
          <p className='text-amber-800'>Work with our designers to create personalized jewelry pieces tailored to your style and preferences.</p>
        </div>
        <div className='Appraisal border flex flex-col justify-center items-center gap-2 p-6 shadow-md rounded-lg bg-white'>
        <div className='rounded-full p-2 bg-amber-800'>
            <CircleAlert  size={30} className="text-amber-100"/>
          </div>
          <h1 className='text-xl font-bold text-amber-900 '>Jewelry Appraisal</h1>
          <p className='text-amber-800'>Professional appraisal services for insurance purposes and market evaluation of your precious pieces.</p>
        </div>
        <div className='Restoration border flex flex-col justify-center items-center gap-2 p-6 shadow-md rounded-lg bg-white'>
        <div className='rounded-full p-2 bg-amber-800'>
          <RefreshCcw  size={30} className="text-amber-100"/>
        </div>
          <h1 className='text-xl font-bold text-amber-900 '>Jewelry Restoration</h1>
          <p className='text-amber-800'>Expert restoration services to bring your antique and heirloom jewelry back to its original glory.</p>
        </div>
      </div>

    </div>
  )
}

export default Services
