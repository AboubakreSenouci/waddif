import { Link } from 'react-router-dom'
import * as React from 'react'
const locations = [
  'Wilaya d\'Adrar', 'Wilaya d\'Alger', 'Wilaya d\'Annaba', 'Wilaya de Batna',
  'Wilaya de Béchar', 'Wilaya de Béjaïa', 'Wilaya de Biskra', 'Wilaya de Blida',
  'Wilaya de Sétif', 'Wilaya de Sidi Bel Abbès', 'Wilaya de Skikda', 'Wilaya de Tamanrasset',
  'Wilaya de Tébessa', 'Wilaya de Tiaret', 'Wilaya de Tizi Ouzou', 'Wilaya de Tlemcen',
  'Wilaya de Bouira', 'Wilaya d\'El Asnam', 'Wilaya de Constantine', 'Wilaya de Djelfa',
  'Wilaya de Guelma', 'Wilaya de Jijel', 'Wilaya de Laghouat'
]

export default function JobsByLocation () {
  return (
        <div className=" bg-gray-100 p-10">
            <p className="text-2xl p-4 text-gray-700 tracking-wider mt-10">Browse Jobs by Location</p>
            <div className="h-1 w-20 m-4 bg-gray-700 mt-4"></div>
            <div className="flex flex-wrap py-12">
                {locations.map((location) => (
                <Link to="" className=" w-1/4 xl:w-1/3 lg:w-1/2 sm:w-full p-4 text-sm text-blue-600 hover:text-blue-800">{location}</Link>
                ))}
            </div>

        </div>

  )
}
