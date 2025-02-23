import React from "react";
import Header from "../Other/Header";
import CreatTask from "../Other/CreatTask";
import AllTask from "../Other/AllTask";

function AdminDashboard(props) {
    return (
        <div className="h-screen w-full p-10">
            <Header changeuser={props.changeuser}/>

            <CreatTask/>
            <AllTask/>

        </div>
    )
}

export default AdminDashboard