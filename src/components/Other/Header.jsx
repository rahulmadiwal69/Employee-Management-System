import React from "react";
import { setLocalStorage } from "../../utils/localstorage";

function Header(props) {
    
    const logout = ()=>{
        localStorage.setItem("loggedInUser","")
        props.changeuser("")
    }

    return (
        <div className="flex items-end justify-between ">
            <h1 className="text-2xl font-semibold">Hello <br /> <span className="text-3xl font-semibold">username </span></h1>
            <button onClick={logout} className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm">Log Out</button>
        </div>
    )
}

export default Header