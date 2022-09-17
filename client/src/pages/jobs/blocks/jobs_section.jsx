import { useEffect, useState } from 'react'
import Pagination from './pagination'
import axios from 'axios'
import { useSearchParams} from 'react-router-dom'


export default function JobsSection () {
  const [jobs, setJobs] = useState([])
  const [nombrePages, setNombrePages] = useState(10)
  let [searchParams, setSearchParams] = useSearchParams({
    page: '0',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/Jobs?page=${searchParams.get('page')}`).then((response) => {
      setJobs(response.data.jobs)
    })
  },[searchParams]);

  const updatePageNumber = (pageNumber) => {
    setSearchParams({
      page: pageNumber.toString(),
    })
  }
 
  return (
    <div>
         <div className="w-full space-y-3">
            {jobs.map((jobe, index) => (
                <Job key={index} title={jobe.title} company={jobe.company} location={jobe.location}
                    date={jobe.date} category={jobe.category} description={jobe.description}/>
            ))}
        </div>
       <Pagination currentPage={parseInt(searchParams.get('page'), 10)} updatePageNumber={updatePageNumber} npages={nombrePages}/>
    </div>
  )
}

const Job = ({ title, company, location, date, category, description }) => {
  return (
        <div className="bg-white border border-gray-300 min-w-2xl shadow-md p-6 pr-12">
            <p className="text-blue-600 font-medium">{title}</p>
            <div className="text-xs flex gap-1 my-1">{company} - <p className="text-gray-600"> {location} </p></div>
            <p className="text-green-600 text-xs my-1">{date}</p>
            <p className="text-sm bg-gray-200 w-max rounded p-1 my-2">{category}</p>
            <p className="text-sm text-gray-500 font-medium">{description}</p>
        </div>
  )
}
