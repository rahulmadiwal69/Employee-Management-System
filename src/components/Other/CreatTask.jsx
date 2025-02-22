import React from "react";

function CreatTask() {
    return(
        <div>
                <form className="mt-10 flex flex-wrap w-full h-80  items-start justify-between p-5 py-3 bg-[#1c1c1c] ">
                    
                    <div className="w-1/2 flex flex-col gap-5">
                    <div className="">
                    <h3>Task Title</h3>
                    <input type="text"  placeholder="make a UI design" className="w-[80%] rounded" />
                    </div>
                    <div>
                    <h3>Date</h3>
                    <input type="date" className="w-[80%] rounded" />
                    </div>
                    
                    <div>
                    <h3>Assign to</h3>
                    <input type="text" placeholder="Emmployee name" className="w-[80%] rounded"/>
                    </div>
                    <div>
                    <h3>Category</h3>
                    <input type="text" placeholder="Design,dev,etc" className="w-[80%] rounded" />
                    </div>

                    </div>
                    
                    
                    
                    <div className="w-1/2 flex flex-col gap-5">
                    

                    <div className="w-[80%] rounded">

                    <h3>Description</h3>
                    <textarea name="" id="" cols={75} rows={8} className="bg-black "></textarea>
                    
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