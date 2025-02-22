import React, { useState } from "react";

const Login = ({handleLogin}) =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    // console.log(handleLogin)


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("");
        setPassword("");
    }
    

    return (
       <div className="flex items-center justify-center h-screen w-screen">
            <div className="border-2 rounded-xl p-20  border-emerald-600 ">

                <form onSubmit={(e)=>{
                    submitHandler(e)

                }
                    
                    } action="" className="flex flex-col items-center justify-center  ">

                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required type="email" placeholder="Enter your email" className="py-3 px-5 border-2 text-xl text-white  bg-transparent border-emerald-600 rounded-full placeholder:text-gray-400"/>
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required type="password" placeholder="Enter your password" className="py-3 px-5 mt-3 border-2 text-xl text-white  bg-transparent border-emerald-600 rounded-full placeholder:text-gray-400" />
                    <button className="py-3 mt-5  px-27 text-xl text-white   bg-emerald-600 rounded-full placeholder:text-white ">Login</button>
                </form>
            </div>
       </div>
    )
}

export default Login