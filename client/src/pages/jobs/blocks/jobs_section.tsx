import { useContext, useEffect, useState } from 'react'
import Pagination from './pagination'
import { JobContext, JobsContextInterface } from '../../../api/jobs'
import { Link } from 'react-router-dom'


const JobsSection: React.FC = () => {

  const updatePageNumber = (pageNumber: { toString: () => any }) => {
    searchParams.set('page', pageNumber.toString())
    setSearchParams(searchParams)
  }
  const {jobs, nombrePages, searchParams, setSearchParams} = useContext(JobContext) as JobsContextInterface;
 
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
export default JobsSection;


interface JobProps {
  title: string,
  company: string,
  location: string,
  date: string,
  category: string,
  description: string,
}

const Job: React.FC<JobProps> = ({ title, company, location, date, category, description }: JobProps) => {
  return (
        <div className="bg-white border border-gray-300 min-w-2xl shadow-md p-6 pr-12">
            <Link to="/jobDetails" target={'_blank'} className="text-blue-600 font-medium">{title}</Link>
            <div className="text-xs flex gap-1 my-1">{company} - <p className="text-gray-600"> {location} </p></div>
            <p className="text-green-600 text-xs my-1">{date}</p>
            <p className="text-sm bg-gray-200 w-max rounded p-1 my-2">{category}</p>
            <p className="text-sm text-gray-500 font-medium">{description}</p>
        </div>
  )
}
