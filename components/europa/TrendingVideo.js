import Image from 'next/image'
import React from 'react'

const TrendingVideo = () => {
  return (
    // <div className='rounded-xl bg-blue-euro/10 p-5 md:p-8 mt-10'>
    //   <div className='flex flex-col lg:flex-row-reverse gap-8'>
    //     <div className='overflow-hidden w-full lg:w-2/5 rounded-xl'>
    //       <Image src='/images/europa/hero/main_picture.png' alt='Hero' width={345} height={250} className='w-full h-[250px] object-cover hover:scale-[1.03] rounded-xl' />
    //     </div>
    //     <div className='w-full lg:w-3/5 py-3'>
    //       <span className='border border-b-2 border-b-black uppercase font-bold'>Trending Videos</span>
    //       <h2 className='text-blue-euro text-xl md:text-2xl lg:text-3xl my-4 lg:my-5 font-bold'>Biden has blown it on border crisis: Gov. Chris Sununu</h2>
    //       <p>Gov. Chris Sununu, R-N.H., joins ‘Your World with Neil Cavuto’ to discuss what it will take to keep the government from shutting down</p>
    //     </div>
    //   </div>
    // </div>
    <div className='rounded-lg overflow-hidden flex flex-col lg:flex-row mt-10'>
      <div className='overflow-hidden w-full lg:w-3/5'>
        <Image src='/images/europa/hero/main_picture.png' alt='Hero' width={611} height={204} className='w-full h-[350px] object-cover hover:scale-[1.03]' />
      </div>
      <div className='w-full lg:w-2/5 flex flex-col justify-center gap-4 bg-blue-euro p-5 lg:p-8'>
        <div className='flex items-center gap-3'>
          <Image src='/images/europa/hero/euro.png' alt='Euro' width={50} height={50} className='' />
          <p className='text-white text-lg md:text-xl lg:text-2xl font-bold'>EuroPodcast</p>
        </div>
        <div>
          <h2 className='text-yellow-500 text-2xl lg:text-3xl font-bold'>Jak Populiści chcą podpalić Europę?</h2>
          <h4 className='text-white text-lg lg:text-2xl mt-2 mb-3'>Gość: RAFAŁ TRZASKOWSKI</h4>
          <p className='text-white'>Często korzystają z dezinformacji i teorii spiskowych. Rozprzestrzeniają fałszywe informacje, żeby zasiać chaos i podzielić społeczeństwo.</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingVideo