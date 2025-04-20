import React from 'react'

const Hero = () => {
  return (
    <div className='bg-amber-800 p-4 flex flex-col '>
        <h1 className='text-amber-100 mb-2 font-bold text-4xl md:text-5xl mt-7'>Timeless Elegance Since 1985</h1>
        <p className='text-amber-200 text-lg mt-2'>Visit our showroom to explore our exquisite collection of traditional and modern jewelry designs</p>
        <div className="buttons mt-5 flex flex-col gap-3 md:flex-row lg:flex-row  lg:mt-10">
            <button className='border bg-amber-100 text-amber-800 rounded-md py-3 text-center md:px-5' lg:px-5 >View collection</button>
            <button className='border border-amber-100 text-amber-100 rounded-md py-3 text-center md:px-5 lg:px-5 '>Store Location</button>
        </div>
    </div>
  )
}

export default Hero
