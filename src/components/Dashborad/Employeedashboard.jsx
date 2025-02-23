import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function Employeedashboard(props) {
    
    return (

        <div className="p-10 bg-[#1c1c1c] h-screen">
            <Header changeuser={props.changeuser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default Employeedashboard;