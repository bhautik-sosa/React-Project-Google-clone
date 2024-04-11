import React from 'react'
import ProfileIcon from './ProfileIcon'

export default function HomeHeader() {
  return (
    <header className='h-16 flex justify-between md:justify-end items-center px-5 gap-4'>
      <div className="flex gap-4">
          <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'> Gmail</span>
      </div>
      <div className="flex gap-4">
          <span className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'> Images</span>
      </div>
      <ProfileIcon />
    </header>
  )
}
