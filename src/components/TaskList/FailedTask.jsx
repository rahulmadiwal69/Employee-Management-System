import React from "react";

const FailedTask = ({data})=>{
    return(
        <div className="h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5  ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category||data.
                    taskCategory}</h3>
                    <h4 className="text-sm">{data.date||data.
                    taskdate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title|| data.
                taskTitle}</h2>
                <p className="text-sm mt-2">
                    {data.description|| data.
taskDesc}
                </p>
                <div className=" mt-2">
                    <button className="bg-red-500 py-1 px-2 w-full rounded">Failed</button>
                    
                </div>
            </div>
    )
}

export default FailedTask