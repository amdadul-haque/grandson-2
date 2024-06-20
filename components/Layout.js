'use client'
import React from 'react'
import { FacebookMsg } from './home'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Footer from './Footer'
import AnimatedCursor from 'react-animated-cursor'

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

      <AnimatedCursor
        innerSize={8}
        outerSize={17}
        color="0, 189, 233"
        outerAlpha={0.2}
        innerStyle={{
          backgroundColor: "rgb(212, 20, 90)",

          borderRadius: "50%",
          width: "50%",
        }}
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid rgb(212, 20, 90)",
          padding: "20px",
          borderRadius: "50%",
          width: "100px",
        }}

        showSystemCursor={true}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "li",
          "button",
          ".link",
        ]}
      />
    </>
  )
}

export default Layout