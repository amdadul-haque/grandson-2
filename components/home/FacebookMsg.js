'use client'
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <>
      <FacebookProvider appId="357833686623722" chatSupport>
        <CustomChat pageId="1027976817219147" />
      </FacebookProvider>
    </>
  )
}

export default FacebookMsg