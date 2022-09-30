

const JobDetails: React.FC = () => {
    return(
        <div className="bg-white min-h-max p-6 border border-gray-300 rounded shadow-sm">
            <p className="font-medium mb-4 w-full">Job Details</p>
            <div className="flex items-center gap-x-10 mb-8">
                <div className="text-gray-600 space-y-4">
                    <p> Experience Needed: </p>
                    <p> Career Level:</p>
                    <p> Education Level:</p>
                    <p> Salary:</p>
                    <p> Job Categories:</p>
                </div>
                <div className="text-sm space-y-5">
                    <p> More than 5 years </p>
                    <p> Experienced (Non-Manager)</p>
                    <p> Bachelor's Degree</p>
                    <p> Confidential</p>
                    <p> IT/Software Development</p>
                </div>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded">
                <p className="p-4 text-gray-500 font-medium">Skills And Tools</p>
                <div className="p-4 flex gap-x-6">
                    <button className="text-sm text-gray-800 py-1 px-2 bg-gray-200 rounded-2xl hover:bg-gray-300">javascript</button>
                    <button className="text-sm text-gray-800 py-1 px-2 bg-gray-200 rounded-2xl hover:bg-gray-300">react js</button>
                    <button className="text-sm text-gray-800 py-1 px-2 bg-gray-200 rounded-2xl hover:bg-gray-300">CSS</button>
                    <button className="text-sm text-gray-800 py-1 px-2 bg-gray-200 rounded-2xl hover:bg-gray-300">Html</button>
                    <button className="text-sm text-gray-800 py-1 px-2 bg-gray-200 rounded-2xl hover:bg-gray-300">Redux</button>
                    <button className="text-sm text-gray-800 py-1 px-2 bg-gray-200 rounded-2xl hover:bg-gray-300">front-end</button>
                </div>
            </div>
        </div>
    )
}
export default JobDetails;
