import Image from 'next/image'
import React from 'react'

const TrendingVideo = () => {
  return (
    <div className='rounded-xl bg-blue-euro/10 p-5 md:p-8 mt-10'>
      <div className='flex flex-col lg:flex-row-reverse gap-8'>
        <div className='overflow-hidden w-full lg:w-2/5 rounded-xl'>
          <Image src='/images/europa/hero/main_picture.png' alt='Hero' width={345} height={250} className='w-full h-[250px] object-cover hover:scale-[1.03] rounded-xl' />
        </div>
        <div className='w-full lg:w-3/5 py-3'>
          <span className='border border-b-2 border-b-black uppercase font-bold'>Trending Videos</span>
          <h2 className='text-blue-euro text-xl md:text-2xl lg:text-3xl my-4 lg:my-5 font-bold'>Biden has blown it on border crisis: Gov. Chris Sununu</h2>
          <p>Gov. Chris Sununu, R-N.H., joins ‘Your World with Neil Cavuto’ to discuss what it will take to keep the government from shutting down</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingVideo