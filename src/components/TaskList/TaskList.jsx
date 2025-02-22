import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Completetask from "./Completetask";
import FailedTask from "./FailedTask";

function TaskList({data}) {
    
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap">
            {data.tasks.map((ele,idx)=>{
                if(ele.active){
                    return <AcceptTask key={idx} data={ele}/>
                }
                if(ele.new_task
                ){
                    return <NewTask key={idx} data={ele}/>
                }
                if(ele.completed
                ){
                    return <Completetask key={idx} data={ele}/>
                }
                if(ele.failed
                ){
                    return <FailedTask key={idx} data={ele}/>
                }
            })}
        </div>
    )
}

export default TaskList