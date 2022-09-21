import Button from '../../../component/button/button'
import { BsSearch } from 'react-icons/bs'
import { GoSettings } from 'react-icons/go'

export default function Header () {
  return (
        <div className="">
            <div className="bg-blue-900 h-24 text-white px-44 pt-5 mb-12 lg:hidden">
                <p className="text-xl font-medium mb-4">Jobs in Algeria</p>
                <div className='bg-white text-lg flex max-w-5xl'>
                    <Button className='text-gray-700 p-4 text-lg lg:p-5 lg:text-sm' icon={<BsSearch />} variant={'text'} />
                    <input className='w-full border-none outline-none text-gray-700 mr-1 ' placeholder='Search by Job Title, Keywords, or Location (e.g Sales in Chlef)' />
                    <Button variant='bluecontained' label='Search' className=' m-3 min-w-max text-md px-6 lg:hidden font-light' />
                </div>
            </div>
            <div className="mx-20 sm:mx-0 my-2 lg:mx-8 Sjob:hidden">
                <p className="text-xl font-semibold my-3">Jobs in Algeria </p>
                <div className="flex gap-8 bg-white  border border-gray-300 px-8 py-3 space-y-2">
                    <div className="flex w-full h-10 border border-gray-200 bg-gray-100">
                        <Button className='text-gray-700 text-lg p-3 lg:text-sm font-bold' icon={<BsSearch />} variant={'text'} />
                        <input type="text" placeholder="Search jobs, companies..." className="w-full bg-gray-100 outline-none" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center text-blue-700">
                            <Button icon={<GoSettings />} variant={'text'} />
                            <p>Filters</p>
                        </div>
                        <p className="text-sm min-w-max text-gray-500 tracking-wide"><span className="font-bold">7,734</span> Jobs found</p>
                    </div>

                </div>
            </div>
        </div>
  )
}
