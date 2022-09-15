import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

import { IoMdArrowDropdown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdAccountCircle } from 'react-icons/md'

import Button from '../../../component/button/button'

export default function Navbar () {
  return (
    <div className=' sticky top-0 w-full flex justify-between items-center bg-white text-white py-3 px-16 shadow-lg xl:px-5 md:py-1'>
       <div className='w-full flex gap-6'>
            <Link to="/" className='uppercase font-bold text-3xl text-blue-800'>waddif</Link>
            <div className='lg:hidden'>
                <Button variant='text' label='browse jobs' className='text-sm text-gray-800 min-w-max' icon={<IoMdArrowDropdown/>}/>
            </div>
            <div className='lg:hidden'>
                <Button variant='text' label='browse learning' className='text-sm text-gray-800 min-w-max' icon={<IoMdArrowDropdown/>}/>
            </div>
            <div className='flex items-center w-full mr-10 border border-gray-300 md:hidden'>
                <input placeholder='Search jobs, companies..' className=' w-full pl-2 bg-gray-100 p-2 outline-none border-none text-black '/>
                <Button variant='text' icon={<BsSearch/>} className='text-black bg-gray-300 p-3'/>
            </div>
        </div>
        <div className='flex items-center gap-4 md:hidden'>
            <Link to="/login"><Button variant='text' label='login' className='text-sm text-gray-700'/></Link>
            <Link to="/register"><Button variant='bluecontained' label='join now' className='px-2 py-1 min-w-max font-light'/></Link>
            <Link to="/"><Button variant='greencontained' label='employer' className='mx-2 py-1 min-w-max font-light'/></Link>
            <button className='text-lg text-black'><GiHamburgerMenu/></button>
        </div>
        <div className='menu:hidden'>
            <button className='text-5xl text-gray-300'><MdAccountCircle/></button>
            <GiHamburgerMenu className='absolute top-8 right-5 text-black p-1 text-xl rounded-full bg-white'/>
        </div>
    </div>
  )
}
