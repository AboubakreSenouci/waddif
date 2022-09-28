import Header from './blocks/Header'
import Navbar from './blocks/Navbar'
import LatestJobs from './blocks/latest_jobs'
import GetReady from './blocks/get_ready'
import JobsByCarrer from './blocks/jobs_by_ career'
import JobsByLocation from './blocks/jobs_by_location'
import Footer from './blocks/footer'


export default function Home () {
    return (
        <div>
            <Header/>
            <Navbar/>
            <LatestJobs/>
            <GetReady/>
            <JobsByCarrer/>
            <JobsByLocation/>
            <Footer/>
        </div>
    )
}