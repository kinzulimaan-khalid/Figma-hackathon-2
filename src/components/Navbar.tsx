import Link from 'next/link'
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Input } from './ui/input'


import React from 'react'

const Navbar = () => {
  return (

        <nav className='bg-[#f3df9d] w-full; height:100px; py-3 px-2 justify-around place-items-center flex   ;
'>
            <div className=' gap-6 flex'>
            <Link href={"#"} className=' hover:underline text-sm font-medium'>Home</Link>
            <Link href={"/ shop"}className='hover:underline text-sm font-medium'>Shop</Link>
            <Link href={"/ about"}className='hover:underline text-sm font-medium'>About</Link>
            <Link href={"/ contact"}className='hover:underline text-sm font-medium'>Contact</Link>
            </div>
            <div className="flex space-x-4">
        </div>

        {/* search icons */}
        <div className='flex items-center space-x-6'>
        <div className='justify-between flex gap-6 ;'>
          <RiAccountCircleLine />
          <CiSearch />
          <CiHeart />
          <IoCartOutline />

          </div>
        </div>
        </nav>
  )
}

export default Navbar


  