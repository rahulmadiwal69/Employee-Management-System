import React, { useState ,useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";
function CreatTask() {

    const {userData,setUserData} = useContext(AuthContext)

    const [taskTitle,settaskTitle] = useState("")
    const [taskDesc,settaskDesc] = useState("")
    const [taskdate,settaskDate] = useState("")
    const [taskAsignTo,settaskAsignTo] = useState("")
    const [taskCategory,settaskCategory] = useState("")

    const [newTask,setNewTask] = useState({});
    // console.log(newTask)



    const submitHandler=(e)=>{
        e.preventDefault()
        setNewTask({taskTitle,taskDesc,taskCategory,taskdate,active:false,new_task:true,failed:false,completed:false})
        const data = userData;
        data.forEach(elem => {
            if(taskAsignTo==elem.firstName){
                elem.tasks.push(newTask)
            
            }
            
        });
        setUserData(data)
        
        console.log(userData)

        settaskTitle("");
        settaskCategory("");
        settaskAsignTo("")
        settaskDate("")
        settaskDesc("")
        

        
    }
    return(
        <div>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className="mt-10 flex flex-wrap w-full h-80  items-start justify-between p-5 py-3 bg-[#1c1c1c] ">
                    
                    <div className="w-1/2 flex flex-col gap-5">
                    <div className="">
                    <h3>Task Title</h3>
                    <input type="text"  placeholder="make a UI design" className="w-[80%] rounded" value={taskTitle} onChange={(e)=>{settaskTitle(e.target.value)}}/>
                    </div>
                    <div>
                    <h3>Date</h3>
                    <input type="date" className="w-[80%] rounded" value={taskdate} onChange={(e)=>{settaskDate(e.target.value)}} />
                    </div>
                    
                    <div>
                    <h3>Assign to</h3>
                    <input type="text" placeholder="Emmployee name" className="w-[80%] rounded" value={taskAsignTo} onChange={(e)=>{settaskAsignTo(e.target.value)}}/>
                    </div>
                    <div>
                    <h3>Category</h3>
                    <input type="text" placeholder="Design,dev,etc" className="w-[80%] rounded" value={taskCategory} onChange={(e)=>{settaskCategory(e.target.value)}} />
                    </div>

                    </div>
                    
                    
                    
                    <div className="w-1/2 flex flex-col gap-5">
                    

                    <div className="w-[80%] rounded">

                    <h3>Description</h3>
                    <textarea name="" id="" cols={75} rows={8} className="bg-black " value={taskDesc} onChange={(e)=>{settaskDesc(e.target.value)}}></textarea>
                    
                    </div>
                    <div className="w-[80%] rounded bg-green-400 py-1 text-center">
                    <button>Create Task</button>
                    </div>
                    
                    </div>

                    

                    
                </form>
            </div>
    )
}
export default CreatTask