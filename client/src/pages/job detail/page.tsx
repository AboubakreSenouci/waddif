import Navbar from "../jobs/blocks/navbar"
import ApplyJob from "./blocks/apply_job_section"

const JobDetail = () => {
    return(
        <div className="bg-gray-200 min-h-screen">
            <div className="mb-10">
                <Navbar/>
            </div>
            <div className="mx-20">
                <ApplyJob/>
            </div>
        </div>
    )
}
export default JobDetail