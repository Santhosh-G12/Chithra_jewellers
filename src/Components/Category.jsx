import React from 'react'
import DiamondImage from '../assets/Diamonds.jpeg';
import Gold from '../assets/Gold.jpeg';
import Silver from '../assets/Silver.jpeg';
import Antique from '../assets/Antique.jpg';
import Gifts from '../assets/Gifts.jpeg';
import ScrollFadeInCard from '../animations/FadeIn';
import { motion } from "framer-motion";


const Category = () => {
    const Category = ["All","Necklaces","Earrings","Bracelets","Rings","Traditional"]
    const featuredCollections = [
        { id: 1, name: 'Bridal Collection', description: 'Breathtaking jewels to make your special day unforgettable"', image: Gold, category: 'traditional' },
        { id: 5, name: 'Silver Collection', description: 'Stunning silver pieces that captivate with every detail', image: Silver, category: 'bracelets' },
        { id: 2, name: 'Diamond Series', description: 'Radiant certified diamonds that define luxury and elegance', image: DiamondImage, category: 'necklaces' },
        { id: 5, name: 'Platinum Collection', description: 'Flawless platinum creations for the truly discerning', image: Silver, category: 'bracelets' },
        { id: 4, name: 'Antique Collection', description: 'Timeless heritage pieces that tell your unique story', image: Antique, category: 'rings' },
        { id: 6, name: 'Gift Collection', description: 'Perfect treasures that speak louder than words', image: Gifts, category: 'rings' },

        
      ];
  return (
    <div className='flex flex-col justify-center items-center pt-5 mx-auto'>
      <h1 className='text-3xl text-amber-800 font-bold text-center'>Our Collection</h1>
      <div className='flex flex-wrap justify-center gap-3 mt-5'>
        
        {Category.map((item,index)=>(
            <div key={index} className='rounded-3xl p-2  bg-amber-100 text-amber-900'>
                <h1>{item}</h1>
            </div>
        ))}
        
       
      </div>
      
      <div className="collection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-6 m-7 ">
        {featuredCollections.map((collection,index)=>(
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="item border rounded-md "
        >
            <div className='item rounded-md bg-white border '>
                <div className='h-64'>
                  <img className='h-full w-full object-cover' src={collection.image}/>
                </div>
                <div className='m-3'>
                  <h1 className='text-amber-900 text-xl font-semibold '>{collection.name}</h1>
                  <h1 className='text-amber-700   '>{collection.description}</h1>
                  <button className='bg-[#800000] text-white p-3 mt-5 rounded-2xl px-6 '>Enquire</button>
                </div>
                
            </div>
            </motion.div>
        ))}
      </div>
      
      
     
    </div>
  )
}

export default Category
