import React from "react";
import Header from "../Other/Header";
import CreatTask from "../Other/CreatTask";
import AllTask from "../Other/AllTask";

function AdminDashboard() {
    return (
        <div className="h-screen w-full p-10">
            <Header/>

            <CreatTask/>
            <AllTask/>

        </div>
    )
}

export default AdminDashboard