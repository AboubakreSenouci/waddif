import { useEffect, useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'
import { motion } from 'framer-motion'

const filters = [
  {
    title: 'Quick Filters ',
    all: false,
    arr: ['work from home']
  },
  {
    title: 'Country',
    all: true,
    arr: ['Algeria', 'France', 'Canada']
  },
  {
    title: 'City',
    all: true,
    arr: ['Alger', 'Oran', 'Chlef']
  },
  {
    title: 'Career Level',
    all: true,
    arr: ['Student', 'Entry Level', 'Experienced', 'Manager', 'Senior management']
  },
  {
    title: 'Job Category',
    all: false,
    arr: ['Human Resources', 'Administration', 'Customer service', 'Creative/Design', 'Sales']
  },
  {
    title: 'Job Type',
    all: false,
    arr: ['Internship', 'Part time', 'Full time']
  },
  {
    title: 'Date Posted',
    all: true,
    arr: ['Past Week', 'Past month']
  }
]

export default function Aside () {
  return (
    <div className="bg-white border border-gray-300 lg:hidden w-96 px-4 h-min">
      <div>
        <p className="font-medium pt-4"> Filters </p>
        <p className="text-gray-400 text-xs pb-3 pt-1">0 filters selected</p>
        <div className="h-px w-full bg-gray-300"></div>
      </div>
      {filters.map((filter, index) => (
        <Filter key={index} name={filter.title} arr={filter.arr} all={filter.all} />
      ))}
    </div>
  )
}

type Props = {
  name: string,
  all : boolean,
  arr: string[]
}


const Filter = ({ name, arr, all }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const [checkedState, setCheckedState] = useState(
    [...Array.from({ length: arr.length })]
  )
  const [hasAll, setHasAll] = useState(all)

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? (!item) : (item)
    )
    setCheckedState(updatedCheckedState)
  }
  useEffect(() => {
    let bool = true
    checkedState.forEach((item) => {
      if (item) { bool = false }
    })
    setHasAll(bool)
  }, [checkedState])
  const handleAllClick = () => {
    const updatedCheckedState = checkedState.map(() => false)
    setCheckedState(updatedCheckedState)
  }
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium py-4'>{name}</p>
        <motion.button onClick={() => setIsOpen(!isOpen)} animate={{ rotate: isOpen ? 180 : 0 }}>
          <IoIosArrowDropdown className='text-xl' />
        </motion.button>
      </div>
      {isOpen &&
         <div className=' flex flex-col gap-y-2 mb-4'>
          {
          all ? <div className='space-x-2'><input className='mr-auto ml-4 cursor-pointer' type='checkbox' checked={hasAll} onClick={handleAllClick}/><label className={`text-gray-500 text-sm ${all && 'font-black text-gray-800'}`}>All</label></div> : null
          }
           {arr.map((element, index) => {
             return (
              <div className='space-x-2' key={index}>
                  <input className='mr-auto ml-4 cursor-pointer' type='checkbox' checked={checkedState[index]} onChange={() => handleOnChange(index)} />
                    <label className={`text-gray-500 text-sm ${checkedState[index] && 'font-black text-gray-800'}`}>{element}</label>
              </div>
             )
           })}
        </div>
        }
      <div className="h-px w-full bg-gray-300"></div>
    </div>
  )
}
