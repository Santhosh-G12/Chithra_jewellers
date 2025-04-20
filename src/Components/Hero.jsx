import React from 'react'
import { motion } from "framer-motion";
const heading = "Timeless Elegance Since 1985";
const letters = heading.split("");

const Hero = () => {
  return (
    <div className='bg-amber-800 p-4 flex flex-col '>
     <motion.h1
  className="text-3xl md:text-5xl font-bold text-amber-100 flex  flex-wrap"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }}
>
  {letters.map((char, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    className="text-amber-200 text-lg mt-5"
  >
    Visit our showroom to explore our exquisite collection of traditional and modern jewelry designs.
  </motion.p>

      
       
        <div className="buttons mt-5 flex flex-col gap-3 md:flex-row lg:flex-row  lg:mt-10">
              <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border bg-amber-100 text-amber-800 rounded-md py-3 text-center md:px-5"
        >
          Explore Collections
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border border-amber-100 text-amber-100 rounded-md py-3 text-center md:px-5 lg:px-5"
        >
          Store Location
        </motion.button>
            
            
        </div>
    </div>
  )
}

export default Hero
