import React from 'react'

const Heritage = () => {
  return (
    <div className='bg-amber-800 flex flex-col py-16 gap-3 mx-auto px-4 md:px-8 mt-5 '>
      <h1 className='text-amber-100 font-bold text-2xl md:text-3xl '>Our Heritage & Craftsmanship</h1>
      <p className='text-amber-200 text-lg'>For over three decades, Chitra Jewellery has been crafting exquisite pieces that blend traditional artistry with contemporary designs. Our master craftsmen bring decades of experience to create jewelry that becomes family heirlooms.</p>
      <p className='text-amber-200 text-lg'>
        Each piece at Chitra Jewellery represents our commitment to quality, authenticity, and the preservation of traditional jewelry-making techniques.
      </p>
      <div>
        <button className='bg-amber-100 text-amber-900 px-6 py-3 rounded-md font-medium hover:bg-amber-200 transition-colors mt-8 text-xl ' >Learn more about our process</button>
      </div>
      
    </div>
  )
}

export default Heritage
