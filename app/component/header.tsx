import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-400 h-12'>
      <div className='text-white-800 flex justify-between items-center font-extrabold'>
      <h1 className='text-x1 m-2 cursor-pointer text-black underline'>Header</h1>
      <ul className='flex gap-3 mr-4 cursor-pointer'> 
        <Link className='hover:text-blue-500' href  = "/">Home</Link>
        <Link className='hover:text-blue-500' href = "/about">About</Link>
        <Link className='hover:text-blue-500' href = "/contact">Contact</Link>
      </ul>
      </div>
    </div>
  )
}

export default Header