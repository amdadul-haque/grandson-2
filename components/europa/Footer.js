import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-100'>
      <div className='europa-container flex flex-col gap-y-7 md:flex-row md:justify-between py-3'>
        <Image src='/images/europa/logo-2.png' alt='Europa Logo' width={314} height={57} className='w-auto object-contain h-8 md:h-10 lg:h-12' />
        <div className='flex gap-4 xl:gap-8 items-center justify-around'>
          <Link href='#'>
            <BsFacebook className='text-2xl' />
          </Link>
          <Link href='#'>
            <BsYoutube className='text-2xl' />
          </Link>
          <Link href='#'>
            <BsInstagram className='text-2xl' />
          </Link>
          <Link href='#'>
            <BsTiktok className='text-2xl' />
          </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer