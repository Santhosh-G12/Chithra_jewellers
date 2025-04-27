import React from 'react'
import { motion } from "framer-motion";

const Heritage = () => {
  return (
    <div className='bg-amber-800 flex flex-col py-16 gap-3 mx-auto px-4 md:px-8 mt-5 '>
      <h1 className='text-amber-100 font-bold text-2xl md:text-3xl '></h1>
     
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}
        className='text-amber-100 font-bold text-2xl md:text-3xl'
      >
        Our Heritage & Craftsmanship
        
      </motion.h1>
      <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}
      className='text-amber-200'
    >
    For over three decades, Chitra Jewellery has been crafting exquisite pieces that blend traditional artistry with contemporary designs. Our master craftsmen bring decades of experience to create jewelry that becomes family heirlooms.

    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}
      className='text-amber-200'
    >
    Each piece at Chitra Jewellery represents our commitment to quality, authenticity, and the preservation of traditional jewelry-making techniques.

    </motion.p>
    
     
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        style={{
         
          fontSize: "16px",
          fontWeight: "bold",
        
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          
        }}
        className='bg-amber-100 text-amber-900 px-6 py-3 rounded-md font-medium hover:bg-amber-200 transition-colors mt-8 text-xl '
      >
        Learn more about our process
      </motion.button>
      
    </div>
  )
}

export default Heritage
