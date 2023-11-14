import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  // app id(mine): 357833686623722 
  // page id(grandson): 1027976817219147
  return (
    <>
      <FacebookProvider appId="357833686623722" chatSupport>
        <CustomChat pageId="1027976817219147" minimized={true} />
      </FacebookProvider>
    </>
  )
}

export default FacebookMsg