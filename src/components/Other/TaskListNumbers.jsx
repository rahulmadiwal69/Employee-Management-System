import React from "react";

function TaskListNumbers({data}) {
    return (
        <div className="flex mt-10 screen justify-between gap-5 ">
                <div className="p-10 w-[45%] bg-red-400 rounded-xl py-5 px-6">
                    <h2 className="text-3xl">{data.taskNumber.failed}</h2>
                    <h2 className="text-xl font-semibold">New Task</h2>
                </div>
                <div className="p-10 w-[45%] bg-blue-400 rounded-xl py-5 px-6">
                    <h2 className="text-3xl">{data.taskNumber.new_task}</h2>
                    <h2 className="text-xl font-semibold">New Task</h2>
                </div>
                <div className="p-10 w-[45%] bg-green-400 rounded-xl py-5 px-6">
                    <h2 className="text-3xl">{data.taskNumber.completed}</h2>
                    <h2 className="text-xl font-semibold">New Task</h2>
                </div>
                <div className="p-10 w-[45%] bg-yellow-400 rounded-xl py-5 px-6">
                    <h2 className="text-3xl">{data.taskNumber.active}</h2>
                    <h2 className="text-xl font-semibold">New Task</h2>
                </div>
        </div>
    )
}

export default TaskListNumbers