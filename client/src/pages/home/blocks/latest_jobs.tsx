import { Link } from 'react-router-dom';
import * as React from 'react'


const jobs = [
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
    {
        title : 'Web Developper',
        postedBy : 'Aboubakr Senouci',
        location : 'Chlef',
        date : ' 1 hour ago'
    },
];



export default function  LatestJobs () {
    return(
        <div>
            <div className="m-28">
                <p className="text-2xl text-gray-700 tracking-wider">Latest Jobs</p>
                <div className="h-1 w-20 bg-gray-700 mt-4 mb-10"></div>
                <div className="flex flex-wrap gap-y-4">
                {jobs.map((job) => (
                    <Job title={job.title} postedBy={job.postedBy} location={job.location} date={job.date}/>
                ))}
                <Link to="" className="text-blue-700 text-sm w-full text-end xl:text-start">See all new jobs on WADDIF...</Link>
            </div> 
            </div>
        </div>
    )
}


const Job = ({title, postedBy, location, date}) => {
    return(
        <div className="2xl:w-1/4 lg:w-1/2 md:w-full">
            <div className="shadow-md border border-gray-400 p-4 m-1">
            <a className=" text-blue-800 my-2 cursor-pointer hover:underline">{title}</a>
            <p className="text-gray-900 text-sm flex my-1">{postedBy}-<p>{location}</p></p>
            <p className="text-xs text-gray-500 ">{date}</p>
        </div>
        </div>
        
    )
}