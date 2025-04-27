import React from 'react'
import Heroimage from '../assets/Hero.png'
import { motion } from "framer-motion";
const heading = "Timeless Elegance Since 1985";
const letters = heading.split("");

const Hero = () => {
  return (
    <div className='bg-amber-800 p-3 flex flex-col items-center  md:flex-row  min-h-fit '>
      <div className='max-w-64 m-0 md:max-w-xl   '>
        <img src={Heroimage} className='' />
      </div>
      <div className='flex flex-col justify-center gap-2 md:gap-8 lg:mr-12  p-2'>
        <motion.h1
          className="text-[1.5rem] md:text-5xl font-bold text-amber-100 flex  "
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
          className="text-amber-200 text-[1rem] md:text-xl mt-5"
        >
          Visit our showroom to explore our exquisite collection of traditional and modern jewelry designs.
        </motion.p>
        <div className="buttons mt-5 flex flex-col gap-3 md:flex-row lg:flex-row  lg:mt-10">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className=" bg-amber-200 text-amber-900 rounded-md py-3 text-center md:px-5 "
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





    </div>
  )
}

export default Hero
