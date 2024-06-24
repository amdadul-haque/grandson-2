'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { GrSearch } from 'react-icons/gr'
import { IoSearchOutline } from 'react-icons/io5'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [onlySearchBar, setOnlySearchBar] = useState(false);
  const links = [
    { name: 'EuroFakty', href: '#' },
    { name: 'EuroBiznes', href: '#' },
    { name: 'EuroMity', href: '#' },
  ]
  return (
    <header className='w-full bg-white sticky top-0 drop-shadow-xl z-10'>
      <div className='europa-container flex items-center justify-between py-2 gap-10'>
        <div className='flex gap-5 w-full items-center'>
          <Image src='/images/europa/logo-2.png' alt='Europa Logo' width={314} height={57} className={`w-auto h-8 md:h-10 lg:h-12 ${onlySearchBar && 'hidden'}`} />

          <div className={`flex-1 w-full h-8 md:h-9 lg:h-10 relative ${onlySearchBar ? 'flex' : 'hidden md:flex'}`}>
            <div className='h-full flex items-center'>
              <RxCross1 className='text-lg md:hidden mr-2'
                onClick={() => { setOnlySearchBar(!onlySearchBar) }}
              />
            </div>
            <input type="text" name="search" id="search" className='bg-[#f0f0f0] rounded-full pl-5 pr-16 lg:pr-24 w-full focus:border-none focus:outline-none focus:bg-white focus:shadow-search transition-all'
              placeholder='Search Here'
            />
            <button className='absolute right-0 h-full bg-blue-euro flex justify-center items-center rounded-full px-4 lg:px-6 '>
              <IoSearchOutline className='text-white lg:text-xl' />
            </button>
          </div>
        </div>

        <GrSearch className={`rotate-90 text-2xl md:hidden ${onlySearchBar && 'hidden'}`}
          onClick={() => { setOnlySearchBar(!onlySearchBar) }}
        />

        <FaBars className={`text-2xl llg:hidden ${onlySearchBar && 'hidden'}`}
          onClick={() => { setMobileMenu(!mobileMenu) }}
        />

        <div className={`llg:flex gap-4 items-center hidden`}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.name}
            </Link>
          ))}

          <Link href='#' className='min-w-[32px]'>
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
                <RxCross1 className='text-black text-2xl llg:hidden' onClick={() => { setMobileMenu(!mobileMenu) }} />
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