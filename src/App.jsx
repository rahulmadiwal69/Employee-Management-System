import React, { useContext, useEffect, useState } from "react";
import "tailwindcss";
import Login from "./components/Auth/Login";
import Employeedashboard from "./components/Dashborad/Employeedashboard";
import AdminDashboard from "./components/Dashborad/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";


const App = ()=>{
  const [user,setUser] = useState(null);
  const [LoggedInuser,setLoggedInUser] = useState(null);

  const Authdata = useContext(AuthContext)
  
  // useEffect(()=>{
  //   if(Authdata){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }

  //   }
  // },[Authdata])

  useEffect(()=>{

      const loggedInUser = localStorage.getItem("loggedInUser","")
      if (loggedInUser) {
        const userdata = JSON.parse(loggedInUser)
        setUser(userdata.role)
        setLoggedInUser(userdata.data)
      }
  },[])

  const handleLogin = (email,password)=>{
    if(email=="admin@me.com" && password=="123" ){
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if(Authdata){
      const employee = Authdata.employees.find((e)=>e.email==email && e.password ==password)
      if(employee){
        setUser("employee")
        setLoggedInUser(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
      }
      
    }else{
      alert("invalid credentials")
    }
  }

  
  
  return ( 
    <>
     {!user?<Login handleLogin={handleLogin}/>:""}
     {user=="admin"? <AdminDashboard/>:(user == "employee"? <Employeedashboard data={LoggedInuser}/>:null)}

    </>
  )
}
  


export default App