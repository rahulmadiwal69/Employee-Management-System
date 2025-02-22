import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {

    const auth = useContext(AuthContext)
    
    return (
        <div className="bg-[#1c1c1c] p-5 mt-5 rounded h-60 ">
            <div className="bg-gray-600 py-2 px-4 flex justify-between rounded mt-2">
                    <h2 className="w-1/5 text-lg font-bold bg-gray-600">Employee Name</h2>
                    <h3 className="w-1/5 text-lg font-bold bg-gray-600">New Task</h3>
                    <h5 className="w-1/5 text-lg font-bold bg-gray-600">ActiveTask</h5>
                    <h5 className="w-1/5 text-lg font-bold bg-gray-600">Completed</h5>
                    <h5 className="w-1/5 text-lg font-bold bg-gray-600">Failed</h5>
    
            </div>

            <div className="overflow-auto h-[80%]">
            {auth.employees.map(function (ele,idx) {
                return (
                    <div className="bg-gray-800 py-2 px-4 flex justify-between rounded mt-2">
                    <h2 className="w-1/5 text-lg font-bold">{ele.firstName}</h2>
                    <h3 className="w-1/5 text-lg font-bold text-blue-600">{ele.taskNumber.new_task}</h3>
                    <h5 className="w-1/5 text-lg font-bold text-yellow-200">{ele.taskNumber.active}</h5>
                    <h5 className="w-1/5 text-lg font-bold text-green-600">{ele.taskNumber.completed}</h5>
                    <h5 className="w-1/5 text-lg font-bold text-red-600">{ele.taskNumber.failed}</h5>
    
                </div>
                )
            })}
            </div>
            

           
            
        </div>
    )
}

export default AllTask