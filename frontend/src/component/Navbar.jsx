import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-15 px-5 shadow items-center bg-gray-200'>
        <div className='w-[10%] h-full flex items-center justify-center'>
            <h1 className='font-bold text-zinc-800'>Logo</h1>
        </div>
        <div className='w-[50%] h-full'>
            <ul className='w-full h-full flex gap-6 list-none items-center '>
                <li  className='font-md text-zinc-800 cursor-pointer'>HOME</li>
                <li  className='font-md text-zinc-800 cursor-pointer'>ABOUT</li>
                <li  className='font-md text-zinc-800 cursor-pointer'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar