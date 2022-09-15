import * as React from 'react'
import { jobs1 } from '../../../assets/_index';
import { jobs2 } from '../../../assets/_index';
import { jobs3 } from '../../../assets/_index';
import { jobs4 } from '../../../assets/_index';
import { jobs5 } from '../../../assets/_index';

const Jobs = [
    {
        title : 'Senior Management Jobs',
        image : jobs1
    },
    {
        title : 'management Jobs',
        image : jobs2
    },
    {
        title : 'Experienced Jobs',
        image : jobs3
    },
    {
        title : 'Entry Level Jobs',
        image : jobs4
    },
    {
        title : 'Internship',
        image : jobs5
    },
];

export default function JobsByCarrer () {
    return(
        <div className="mx-20">
            <p className="text-2xl text-gray-700 tracking-wider mt-10">Browse Jobs by Career Level</p>
            <div className="h-1 w-20 bg-gray-700 mt-4"></div>
            <div className="flex flex-wrap py-20">
            {Jobs.map((job) => (
                <Job image={job.image} title={job.title}/>
            ))}
        </div>
        </div>
        
    )
}

const Job = ({image, title}) => {
    return(
        <div className=" relative 2xl:w-1/5 xl:w-1/3 lg:w-1/2 sm:w-full">
            <div className="m-1">
            <img className="w-full h-44 object-cover border hover:brightness-50" src={image} alt="job" />
            </div>
            
            <div className="absolute bottom-3 text-white text-center w-full text-sm tracking-wide">{title}</div>
        </div>
    )
}