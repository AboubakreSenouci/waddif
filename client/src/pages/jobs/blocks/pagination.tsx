import { useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import { useSearchParams} from 'react-router-dom'

type Props = {
  npages: number,
  currentPage: number,
  setCurrentPage: Function,
}

export default function Pagination ({ npages, currentPage, setCurrentPage }: Props) {

  const [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {
    setSearchParams({page: currentPage.toString()})
  }, [currentPage])

  const pageNumbers = [...Array(npages + 1).keys()].slice(1)
  const nextPage = () => {
    if (currentPage < npages - 1) { setCurrentPage(currentPage + 1) }
  }
  const prevPage = () => {
    if (currentPage > 0) { setCurrentPage(currentPage - 1) }
  }
console.log(currentPage)
  return (
    <div>
       <div className=' py-4 space-x-3 flex justify-end '>
       <div><button className='text-xl bg-gray-300 py-3 px-2 hover:bg-gray-400 duration-300 text-gray-500' onClick={prevPage}> <HiChevronLeft/> </button></div>
            {pageNumbers.map((page, index) => {
              return <button key={index}
                className={`bg-gray-300 py-2 px-3 hover:bg-gray-400 duration-300 text-gray-500 ${index  === currentPage && 'bg-gray-900 text-gray-50 hover:bg-gray-900'}`}
                onClick={() => setCurrentPage(index )}>{page}</button>
            })}
         <div><button className='text-xl bg-gray-300 py-3 px-2 hover:bg-gray-400 duration-300 text-gray-500 ' onClick={nextPage}> <HiChevronRight/> </button></div>
        </div>
    </div>
  )
}
