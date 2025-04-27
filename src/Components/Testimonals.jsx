import React from 'react'
import { Star } from 'lucide-react'

const Testimonals = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='mb-10 text-3xl font-bold text-amber-800 '>Testimonals</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-10'>
        <div className='relative w-full border bg-white p-5 hover:scale-105 transition-all duration-300  '>
          <div className='absolute -top-4 left-8 text-amber-800 bg-amber-800 rounded-full p-2'>
            <Star size={16} className='text-amber-100' />
          </div>
          <div className='flex flex-col justify-center '>
            <p className='text-amber-900 mb-4'>"இங்கே வாங்கிய நகை எல்லாம் மிக அழகாகவும் தரமாகவும் இருந்தது. என்னோட திருமண நகைகளுக்கான முதல் தேர்வு இக்கடைதான்!"</p>
            <h3 className='font-extrabold text-amber-800'>— சந்தியா, திருச்சி </h3>
          </div>
        </div>
        <div className='relative w-full border bg-white p-5 hover:scale-105 transition-all duration-300  '>
          <div className='absolute -top-4 left-8 text-amber-800 bg-amber-800 rounded-full p-2'>
            <Star size={16} className='text-amber-100' />
          </div>
          <div className='flex flex-col justify-center '>
            <p className='text-amber-900 mb-4'>"ஒரே மாதிரி டிசைன்களால bore ஆகுற காலத்துல, இங்க ஒரே ஒரு chain-ல கூட ஒரு uniqueness இருக்கு. அதான் இந்த நகைக்கடையை நான் repeated-ah prefer பண்ணுறேன்"</p>
            <h3 className='font-extrabold text-amber-800'>—அப்துல் ரஹீம், Pettai </h3>
          </div>
        </div>
        <div className='relative w-full border bg-white p-5 hover:scale-105 transition-all duration-300  '>
          <div className='absolute -top-4 left-8 text-amber-800 bg-amber-800 rounded-full p-2'>
            <Star size={16} className='text-amber-100' />
          </div>
          <div className='flex flex-col justify-center '>
            <p className='text-amber-900 mb-4'>"திருநெல்வேலியில் நகைக்கு நம்பிக்கையா வாங்குற இடம் இந்த கடைதான். எவ்வளவுதான் பெரிய ஷாப்பு போனாலும், இங்க தான் அந்த ‘மனநிறைவு’ கிடைக்குது."</p>
            <h3 className='font-extrabold text-amber-800'> — மதிவாணன், திருநெல்வேலி"</h3>
          </div>
        </div>
        <div className='relative w-full border bg-white p-5 hover:scale-105 transition-all duration-300  '>
          <div className='absolute -top-4 left-8 text-amber-800 bg-amber-800 rounded-full p-2'>
            <Star size={16} className='text-amber-100' />
          </div>
          <div className='flex flex-col justify-center '>
            <p className='text-amber-900 mb-4'>"அம்மாவுக்கு wedding anniversary-க்கு இங்க வாங்கின necklace-ல வந்த glow-ஐ பார்த்தவுடன் எல்லோரும் ‘எங்க வாங்கின?’னு கேட்டாங்க. Proud-ah சொன்னேன் – நம்ம திருநெல்வேலி நகைக்கடை”"</p>
            <h3 className='font-extrabold text-amber-800'>— கிருஷ்ணபிரியா, Melapalayam</h3>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Testimonals


