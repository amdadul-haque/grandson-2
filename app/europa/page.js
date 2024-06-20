import { Footer, Hero, Navbar, Today } from '@/components/europa'
import React from 'react'

const Europa = () => {
  return (
    <>

      <Navbar />
      <div className='europa-container mt-12 mb-16 lg:mb-20'>
        <div className='lg:grid lg:grid-cols-5 gap-5'>
          <div className='lg:col-span-4'>
            <Hero />
            <Today />
          </div>
          <div className='lg:col-span-1 bg-pink-400 h-[150vh] sticky top-20 z-0 rounded-lg'>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Europa