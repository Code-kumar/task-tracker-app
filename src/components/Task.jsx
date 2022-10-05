import React from "react";
import { TiDeleteOutline } from 'react-icons/ti'

const Task = ({ task, onDelete, onToggle })=>{

    return(
        <>
            <div className={`task-block ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}> 
                <p className="task-name">{task.task}
                <TiDeleteOutline 
                    onClick={() => onDelete(task.id)} 
                    style={{ fontSize: '1.4rem', color: 'red', cursor: 'pointer' }}/>
                </p>
                <span className="task-day">{task.day} 
                </span>
            </div>
        </>

    )
}

export default Task;