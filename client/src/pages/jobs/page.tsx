import Navbar from './blocks/navbar'
import Header from './blocks/header'
import JobsSection from './blocks/jobs_section'
import Aside from './blocks/aside'
import JobsApi from '../../api/jobs'

const Jobs = () => {
  return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar/>
            <Header/>
            <div className="flex gap-4 mx-20 lg:mx-8 sm:mx-0">
                <Aside/>
                <div>
                    <JobsApi/>
                </div>
            </div>
        </div>
  )
}
export default Jobs
