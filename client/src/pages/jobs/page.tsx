import Navbar from './blocks/navbar'
import Header from './blocks/header'
import JobsApi from '../../api/jobs'

const Jobs = () => {
  return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar/>
            <Header/>
            <div className="flex gap-4 mx-20 lg:mx-8 sm:mx-0">
                <JobsApi/>
            </div>
        </div>
  )
}
export default Jobs
