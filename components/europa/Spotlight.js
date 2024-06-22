import { spotlight } from '@/public/data/europa'
import Image from 'next/image'
import React from 'react'

const Spotlight = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center gap-3 mb-3'>
        <div className='h-6 w-2 bg-purple-400 rounded'></div>
        <h2 className='text-purple-600 text-lg font-bold'>Spotlight</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 border border-black/50 p-5 rounded-lg'>
        {
          spotlight.map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-4'>
              <div className='w-full lg:w-auto rounded-lg overflow-hidden'>
                <Image src={item.image} alt={item.title} width={311} height={100} className='w-full h-full rounded-lg hover:scale-105' />
              </div>
              <div>
                <h3 className='text-xl lg:text-[30px] font-semibold'>{item.title}</h3>
                <p className='my-4'> <span className='text-blue-500'>{item.tags[0]}</span>  <span className='text-black/50 ml-2'> {item.tags[1]}</span></p>
                <p className='text-base text-black/80'>{item.description}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Spotlight