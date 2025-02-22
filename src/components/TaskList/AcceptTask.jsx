import React from "react";

const AcceptTask = ({data})=>{
    console.log(data)
    return(
        <div className="h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5  ">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
                    <h4 className="text-sm">{data.date}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2">
                    {data.description}
                </p>
                <div className="flex justify-between mt-4">
                    <button className="bg-green-500 py-1 px-2 text-sm rounded">Mark as completed</button>
                    <button className="bg-red-500 py-1 px-2 text-sm rounded ">Mark as failed</button>
                </div>
            </div>
    )
}

export default AcceptTask