'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaCross } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const links = [
    { name: 'EuroFakty', href: '#' },
    { name: 'EuroBiznes', href: '#' },
    { name: 'EuroMity', href: '#' },
  ]
  return (
    <header className='w-full bg-white sticky top-0 drop-shadow-xl z-10'>
      <div className='europa-container flex items-center justify-between py-2'>
        <Image src='/images/europa/logo-2.png' alt='Europa Logo' width={314} height={57} className='w-auto h-8 md:h-10 lg:h-12 xl:h-14' />
        <FaBars className='text-2xl lg:hidden'
          onClick={() => { setMobileMenu(!mobileMenu) }}
        />

        <div className={`lg:flex gap-4 xl:gap-8 items-center hidden`}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}

          <Link href='#'>
            <Image src='/images/europa/polish_flag.gif' alt='Search' width={32} height={21} className='shadow-lg border border-black' />
          </Link>

          <Link href='#'>
            <button className='px-6 py-2 border border-black/50 rounded-full'>Subskrybuj</button>
          </Link>
        </div>

        {
          <div className={` ${mobileMenu ? 'block' : 'hidden'} fixed top-0 right-0 h-screen w-full bg-black bg-opacity-50 flex justify-end`}>
            <div className={`relative bg-white h-screen px-10 pt-20 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} transition`}>
              <button className='absolute top-5 right-5'>
                <RxCross1 className='text-black text-2xl lg:hidden' onClick={() => { setMobileMenu(!mobileMenu) }} />
              </button>
              <div className='flex flex-col gap-4 items-center h-full'>
                {links.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.name}
                  </Link>
                ))}
                <Link href='#'>
                  <Image src='/images/europa/polish_flag.gif' alt='Search' width={32} height={21} className='shadow-lg border border-black' />
                </Link>
                <Link href='#'>
                  <button className='px-6 py-2 border border-black/50 rounded-full'>Subskrybuj</button>
                </Link>
              </div>
            </div>
          </div>
        }
      </div>
    </header>
  )
}

export default Navbar