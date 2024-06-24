import { hero } from '@/public/data/europa'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' mb-5'>
      <div>

      </div>
      <div className='flex flex-col md:flex-row lg:flex-col gap-x-4'>
        <div className='w-full md:w-2/3 lg:w-full  '>
          <div className='rounded-lg overflow-hidden flex flex-col lg:flex-row'>
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
        </div>
        <div className='w-full md:w-1/3 lg:w-full grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-x-2 gap-y-4 mt-2'>
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
    </div>
  )
}

export default Hero