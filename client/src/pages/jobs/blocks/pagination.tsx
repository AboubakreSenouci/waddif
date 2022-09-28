import { useMemo } from 'react'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

type Props = {
  npages: number,
  currentPage: number,
  updatePageNumber: (page: number) => void,
}

export default function Pagination ({ npages, currentPage, updatePageNumber }: Props) {

  const pageNumbers = useMemo(() => {
    return [...Array(npages + 1).keys()].slice(1)
  }, [npages]);

  const nextPage = () => {
    if (currentPage < npages - 1) { updatePageNumber( currentPage + 1 ) }
  }
  const prevPage = () => {
    if (currentPage > 0) { updatePageNumber( currentPage - 1 )  }
  }

  return (
    <div>
       <div className=' py-4 space-x-3 flex justify-end '>
       {currentPage != 0 &&<div><button className='text-xl bg-gray-300 py-3 px-2 hover:bg-gray-400 duration-300 text-gray-500' onClick={prevPage}> <HiChevronLeft/> </button></div>}
            {pageNumbers.map((item, index) => {

              return <button key={index}
                className={`bg-gray-300 py-2 px-3 hover:bg-gray-400 duration-300 text-gray-500 ${index  === currentPage && 'bg-gray-900 text-gray-50 hover:bg-gray-900'}`}
                onClick={() => updatePageNumber(index) }>{item}</button>
            })}
         {currentPage != npages-1 &&<div><button className='text-xl bg-gray-300 py-3 px-2 hover:bg-gray-400 duration-300 text-gray-500 ' onClick={nextPage}> <HiChevronRight/> </button></div>}
        </div>
    </div>
  )
}
