import axios from "axios";
import { useState, useEffect, createContext } from "react"
import { useSearchParams } from "react-router-dom";

const baseUrl = "http://localhost:3001/Jobs";

   const JobContext = createContext(null);

  

export default function Jobs (){
   const [jobs, setJobs] = useState([])
  const [nombrePages, setNombrePages] = useState(10)
  let [searchParams, setSearchParams] = useSearchParams({
    page: '0',
  });

  useEffect(() => {
   axios.get(`http://localhost:3001/Jobs?page=${searchParams.get('page')}`).then((response) => {
     setJobs(response.data.jobs)
   })
 },[searchParams]);
 
   return(
      <div>

      </div>
   )
}
