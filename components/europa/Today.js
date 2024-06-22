import { today } from '@/public/data/europa'
import Image from 'next/image'
import React from 'react'

const Today = ({ title, data, className }) => {
  return (
    <div className={`mt-5 ${className}`}>
      <div className='flex items-center gap-3 mb-3'>
        <div className='h-8 w-3 bg-blue-euro rounded'></div>
        <h2 className='text-blue-euro text-[30px] font-bold'>{title}</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8'>
        {
          data.map((item, index) => (
            <div key={index} className='flex flex-col lg:flex-row items-center gap-4'>
              <div className='lg:min-w-[250px] xl:min-w-[311px] w-full lg:w-auto h-full rounded-lg overflow-hidden'>
                <Image src={item.image} alt={item.title} width={311} height={204} className='w-full h-full rounded-lg hover:scale-105' />
              </div>
              <div>
                <p>{item.tag}</p>
                {
                  item.tags ?
                    <p className='my-4'> <span className='text-blue-500'>{item.tags[0]}</span>  <span className='text-black/50 ml-2'> {item.tags[1]}</span></p>
                    : null
                }
                <h1 className='text-xl lg:text-[30px] my-3 leading-snug'>
                  {item.title}
                  <span className='text-red-euro'>{item.titleRed}</span>
                  <span className='text-blue-euro font-bold'>{item.titleBlue}</span>
                </h1>
                <p className='text-base text-black/90'>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Today