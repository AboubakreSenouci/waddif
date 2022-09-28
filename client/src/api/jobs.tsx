import axios from "axios";
import { useState, useEffect, createContext } from "react"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import JobsSection from "../pages/jobs/blocks/jobs_section";
import Aside from "../pages/jobs/blocks/aside";
  


export type JobsContextInterface = {
  jobs: string [],
  nombrePages: number,
  searchParams: URLSearchParams,
  setSearchParams: (page: URLSearchParamsInit) => void,
}

  export const JobContext = createContext <JobsContextInterface | null>(null);

  const JobsApi: React.FC = () => {
  const [jobs, setJobs] = useState([])
  const [nombrePages, setNombrePages] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams({
    page: '0',
  });
  

  useEffect(() => {
   axios.get(`http://localhost:3001/Jobs?${searchParams}`).then((response) => {
     setJobs(response.data.jobs)
     setNombrePages(response.data.totalPages)
   })
 },[searchParams]);
 
   return(
      <JobContext.Provider value={{jobs, nombrePages, searchParams, setSearchParams}}>
        <Aside/>
        <JobsSection/>
      </JobContext.Provider>
   )
}
export default JobsApi;
