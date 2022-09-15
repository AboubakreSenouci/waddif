import * as React from 'react'
import { Link } from 'react-router-dom'

export default function GetReady () {
    return(
        <div className="bg-gray-100 text-center py-20">
            <p className="text-gray-600 tracking-wider text-2xl">Get ready for more opportunities!</p>
            <p className="text-gray-500 mt-6 mb-10">You are minutes away from the right job.</p>
            <Link to="/register" className='text-white bg-blue-700 px-8 py-3 capitalize hover:bg-blue-800'>join now</Link>
        </div>
    )
}