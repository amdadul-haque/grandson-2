'use client'
import React from 'react'
import { FacebookMsg } from './home'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='overflow-hidden'>
        {children}
      </div>
      <ContactUs />
      <Footer />
      <FacebookMsg />
    </>
  )
}

export default Layout