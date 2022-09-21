import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IoIosArrowDropdown } from 'react-icons/io'
import { motion } from 'framer-motion'

const filters = [
  {
    title: 'Quick Filters ',
    all: false,
    arr: ['work from home'],
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

  const [selectedState, setSelectedState] = useState(0)
  const [SearchParams, setSearchParams] = useSearchParams();
  
  const calculateSelectedState = (elemnt: boolean) => {
    if(elemnt === true) {setSelectedState( selectedState - 1 )}
    else setSelectedState( selectedState + 1 )
  }

  return (
    <div className="bg-white border border-gray-300 lg:hidden w-96 px-4 h-min">
      <div>
        <p className="font-medium pt-4"> Filters </p>
        <p className="text-gray-400 text-xs pb-3 pt-1">{selectedState} filters selected</p>
        <div className="h-px w-full bg-gray-300"></div>
      </div>
      {filters.map((filter, index) => (
        <Filter key={index} name={filter.title} arr={filter.arr} all={filter.all} 
        calculateSelectedState={calculateSelectedState} setSelectedState={setSelectedState} selectedState={selectedState}
        />
      ))}
    </div>
  )
}


type Props = {
  name: string,
  all : boolean,
  arr: string[],
  selectedState: number,
  calculateSelectedState: (element: boolean) => void,
  setSelectedState: (item: number) => void

}

const Filter = ({ name, arr, all, selectedState, setSelectedState,  calculateSelectedState }: Props) => {

  const [isOpen, setIsOpen] = useState(false)

  const [counter, setCounter] = useState(0)
  const [checkedState, setCheckedState] = useState(
    [...Array.from({ length: arr.length })].map(() => false) 
  )
  const [hasAll, setHasAll] = useState(all)

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? (!item) : (item)
    )
    setCheckedState(updatedCheckedState)
    calculateSelectedState(checkedState[position])
  }

  useEffect(() => {
    let bool = true;
    let counter = 0;
    checkedState.forEach((item) => {
      if (item === true) {
         bool = false 
         counter ++
        }
    })
    setCounter(counter)
    setHasAll(bool)
  }, [checkedState])

  const handleAllClick = () => {
    const updatedCheckedState = checkedState.map(() => false)
    const newArray = checkedState.filter((item) => item === true)
    setSelectedState(selectedState - newArray.length)
    setCheckedState(updatedCheckedState)
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className=' flex text-sm font-medium py-4'>{name}{counter>0 &&<p className='bg-blue-100 text-blue-600 mx-2 px-1 rounded'>{counter}</p>}</p>
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
