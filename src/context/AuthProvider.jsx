import React, { useEffect, useState }  from "react";
import { createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext()

const AuthProvider=({children})=> {

    const [userData,setUserData] = useState(null)
    
    

    useEffect(()=>{
        setLocalStorage()
        const {employees} = getLocalStorage();
        setUserData(employees)
    },[])

    return(
        <div>
            <AuthContext.Provider value={{userData,setUserData}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider