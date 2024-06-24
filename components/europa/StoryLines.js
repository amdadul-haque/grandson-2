import { hero, storylines } from '@/public/data/europa'
import Image from 'next/image'
import React from 'react'

const StoryLines = () => {
  return (
    <div className='mt-10 border border-black/50 p-5 rounded-lg'>
      <div className='flex items-center gap-3 mb-3'>
        <div className='h-6 w-2 bg-purple-400 rounded'></div>
        <h2 className='text-purple-600 text-lg font-bold'>Politics Story Lines</h2>
      </div>
      <div className='w-full md:w-1/3 lg:w-full grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-x-2 gap-y-4 '>
        {/* {
          storylines.map((item, index) => (
            <div key={index} className='first-of-type:col-span-2 md:first-of-type:col-span-1'>
              <div className='rounded-lg overflow-hidden'>
                <Image src={item.image} alt={item.title} height={125} width={224} className='w-full aspect-video object-cover  hover:scale-105 transition' />
              </div>
              <h1 className='text-base mt-2 font-semibold'>
                {item.title}
              </h1>
            </div>
          ))
        } */}
        {
            hero.map((item, index) => (
              <div key={index} className='first-of-type:col-span-2 md:first-of-type:col-span-1'>
                <div className='rounded-lg overflow-hidden'>
                  <Image src={item.image} alt={item.title} height={125} width={224} className='w-full aspect-video object-cover  hover:scale-105 transition' />
                </div>
                <h1 className='text-base mt-2 font-semibold'>
                  {
                    index == 0 && <><span className='text-red-euro'>KLĘSKA PUTINA - </span>dlaczego ruski watażka musi przegrać</>
                  }
                  {
                    index == 1 && <> Top 10 <span className='text-red-euro'>PISowskich PRZEKRĘTÓW </span> jak polska skrajna prawica okradała ludzi</>
                  }
                  {
                    index == 2 && <>LE PEN jest <span className='text-red-euro'> ZAGROŻENIEM</span></>
                  }
                  {
                    index == 3 && <> <span className='text-blue-euro'> DONALD TUSK </span> Lider na trudne czasy</>
                  }
                  {
                    index == 4 && <>Co daje nam Unia Europejska? <span className='text-blue-euro'>  - SONDA</span></>
                  }
                </h1>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default StoryLines