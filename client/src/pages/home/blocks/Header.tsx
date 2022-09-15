import { useState, useEffect} from 'react'
import * as React from 'react'
import {BsSearch} from 'react-icons/bs'
import {BsArrowDownCircle} from 'react-icons/bs'
import {motion} from 'framer-motion'

import { background } from '../../../assets/_index'
import { background1 } from '../../../assets/_index'
import { background2 } from '../../../assets/_index'
import { background3 } from '../../../assets/_index'
import Button from '../../../component/button/button'



export default function Header() {

  const [value, setValue] = useState(0);
  const [animate, setAnimate] = useState();

  const images = [
    background,
    background1,
    background2,
    background3,
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 3 ? 0 : v + 1;
      });
    },5000);
    return () => clearInterval(interval);
  },[]);

  const timer = setTimeout(() => setAnimate(!animate),1000);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  },[])

  return (
    <div className='text-white '>
        <img className='h-screen w-full object-cover object-center' src={images[value]} alt="photo" />
        <div className='absolute top-1/3 w-full flex justify-center items-center'>
          <div className='w-3/4 lg:w-11/12 grid gap-4'>
            <span className='capitalize font-medium lg:text-center text-5xl lg:text-4xl'>find the best jobs in algeria</span>
            <span className='tracking-wider lg:text-center text-xl lg:text-lg '> Searching for vacancies & career opportunities? WADDIF helps you in your job search in Algeria</span>
            <div className='bg-white text-xl flex rounded-lg max-w-5xl'>
              <Button className='text-blue-700 p-7 text-2xl lg:p-5 lg:text-xl' icon={<BsSearch />} variant={'text'}/>
              <input className='w-full border-none outline-none text-gray-700 mr-1' placeholder='Search Jobs (e.g Work From Home)' />
              <span className='text-gray-500  min-w-max flex items-center lg:hidden'>8,262 Open Jobs</span>
              <Button variant='bluecontained' label='Search Jobs' className=' m-4 min-w-max text-lg px-5 lg:hidden rounded'/>
            </div>
          </div>
        </div>
        <motion.button  
        animate={{y : animate ? 20 : 0}}
        transition={{type:'spring', stiffness: 30}}
        className='absolute bottom-10 right-1/2 text-5xl text-white'>
        <BsArrowDownCircle/>
        </motion.button>
    </div>
  )
}
