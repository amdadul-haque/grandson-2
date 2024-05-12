import { Hero, Section1, Section2, Section3, Section4, Section5 } from '@/components/videos'
import React from 'react'

const VideosPage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
    </div>
  )
}

export default VideosPage