import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineBehance } from 'react-icons/ai';
import { FaTiktok, FaPinterestP, FaFacebookF, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  const items = [
    {
      icon: <FaYoutube />,
      title: 'Youtube',
      followers: '1.7M',
      link: 'https://www.youtube.com/',
    },
    {
      icon: <FaFacebookF />,
      title: 'Facebook',
      followers: '1.2M',
      link: 'https://www.facebook.com/'
    },
    {
      icon: <AiOutlineInstagram />,
      title: 'Instagram',
      followers: '700k',
      link: 'https://www.instagram.com/'
    },
    {
      icon: <FaTiktok />,
      title: 'TikTok',
      followers: '900k+',
      link: 'https://www.tiktok.com/'
    },
    {
      icon: <AiFillLinkedin />,
      title: 'LinkedIn',
      followers: '150k',
      link: 'https://www.linkedin.com/'
    },
    {
      icon: <AiOutlineBehance />,
      title: 'Behance',
      followers: '90k',
      link: 'https://www.behance.net/'
    },
    {
      icon: <FaPinterestP />,
      title: 'Pinterest',
      followers: '62k',
      link: 'https://www.pinterest.com/'
    }
  ];
  return (
    <div className='mb-10'>
      <div className='flex items-center gap-3 mb-3'>
        <div className='h-6 w-2 bg-purple-400 rounded'></div>
        <h2 className='text-purple-600 text-lg font-bold'>Social Media</h2>
      </div>
      <div className='w-full rounded-lg bg-gray-100'>
        <div className='px-5 py-4 bg-black/80 rounded-t-lg'>
          <h2 className='text-white text-lg font-bold'>Yahoo Mega News</h2>
          <p className='text-white text-sm mt-1'>Perspectives on our social networks</p>
        </div>
        <div className='px-5 bg-transparent flex flex-col gap-3 py-4'>
          {
            items.map((item, index) => (
              <Link href={item.link} key={index} className='flex gap-3 items-center group'>
                <div className=' group-hover:text-purple-500 transition text-lg'>{item.icon}</div>
                <span className='text-base text-black/80 group-hover:text-purple-500 transition'>{item.title}</span>
                <span className='text-black/50'>{item.followers}</span>
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default SocialMedia