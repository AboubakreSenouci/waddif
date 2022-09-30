import { Link } from "react-router-dom";
import { FcApproval } from 'react-icons/fc'
import ReactTooltip from "react-tooltip";

const ApplyJob : React.FC = () => {
    return(
        <div className="bg-white min-h-max p-6 border border-gray-300 rounded shadow-sm">
            <p className="text-2xl font-medium">Senior React JS Developer</p>
            <p className="text-sm max-w-max bg-gray-200 p-1 rounded my-1">Full Time</p>
            <div className="flex items-center">
                <Link to="" className="text-blue-600 my-1">sita</Link>
                <FcApproval className="text-xl mx-1" data-tip data-for='verifyTip'/><p className="text-sm text-gray-600 font-medium"> - Chlef, Algeria</p>
            </div>
            <p className="text-xs text-gray-600">Posted 3 days ago</p>
            <div className=" flex my-4 items-center gap-x-6">
                <div className="flex">
                    <p className="text-gray-500 text-3xl font-medium">13</p>
                    <div className="text-xs mx-2 space-y-1 text-gray-500">
                        <p>Applicants for</p> <p>20 open positions</p>
                    </div>
                </div>
                <div className="text-gray-500 flex">
                    <div>
                        <p className="text-center">6</p>
                        <p className="text-xs">Viewed</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300 ml-6 mr-4"></div>
                    <div>
                        <p className="text-center">0</p>
                        <p className="text-xs">In Consideration</p>
                    </div>
                    <div className="h-10 w-px bg-gray-300 ml-6 mr-4"></div>
                    <div>
                        <p className="text-center">0</p>
                        <p className="text-xs">Not Selected</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 w-full h-px my-6"></div>
            <button className="bg-blue-700 text-sm text-white tracking-widest py-2 px-10 rounded-sm hover:bg-blue-800 duration-200">Apply For Job</button>
            <ReactTooltip id="verifyTip" place="top" effect="solid">
                This company is verified by WADDIF
            </ReactTooltip>
        </div>
    )
} 
export default ApplyJob;