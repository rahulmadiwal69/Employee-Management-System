import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function Employeedashboard({data}) {
    console.log(data)
    return (

        <div className="p-10 bg-[#1c1c1c] h-screen">
            <Header data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default Employeedashboard;