import React from 'react'
import { Link } from 'react-router-dom'

import {IoMdArrowDropdown} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdAccountCircle} from 'react-icons/md'

import Button from '../../../component/button/button'


export default function Navbar() {
  return (
    <div className='absolute top-10  w-full flex justify-between px-24 text-white xl:px-4 md:top-2'>
        <div className='flex gap-10'>
            <button className='uppercase font-bold text-4xl'>waddif</button>
            <div className='md:hidden'>
                <Button variant='text' label='browse jobs' className='text-lg' icon={<IoMdArrowDropdown/>}/>
            </div>
            <div className='md:hidden'>
                <Button variant='text' label='browse learning' className='text-lg' icon={<IoMdArrowDropdown/>}/>
            </div>
        </div>
        <div className='flex items-center gap-4 md:hidden'>
            <Link to="/login"><Button variant='text' label='login' className='text-lg'/></Link>
            <Link to="/register"><Button variant='bluecontained' label='join now' className='px-3 py-1.5'/></Link>
            <Link to="/"><Button variant='greencontained' label='employer' className='px-3 py-1.5'/></Link>
            <button className='text-2xl'><GiHamburgerMenu/></button>
        </div>
        <div className='menu:hidden'>
            <button className='text-5xl text-gray-300'><MdAccountCircle/></button>
            <GiHamburgerMenu className='absolute top-6 right-3 text-black p-1 text-lg rounded-full bg-white'/>
        </div>
    </div>
  )
}
