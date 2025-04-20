import React from 'react'
import { Search, Menu} from 'lucide-react';

const TitleBar = () => {
  return (
    <div className='flex justify-between p-2 bg-amber-100 items-center py-5'>
        <div className="title justify-center items-center">
            <h1 className='text-3xl text-amber-800 font-bold'>சித்ரா ஜூவல்லர்ஸ் </h1>
        
        </div>
        <div className="icons flex space-x-2">
            <Search/>
            <Menu/>
        </div>
      
    </div>
  )
}

export default TitleBar
