import { Hero, Section1, Section2, Section3, Section4, } from '@/components/podcast'
import React from 'react'

const PodcastPage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default PodcastPage