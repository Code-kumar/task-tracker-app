import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) =>{

    const [task, setTask] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] =  useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!task){
            alert('Please add a Task')
            return
        }

        addTask({task, day, reminder});

        setTask('');
        setDay('');
        setReminder(false);

    }

    return( 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add Task' />
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type='date' value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Task' />
            </div>
            <div className="form-control">
                <label htmlFor="checkbox-rm" className="check-input">
                <input id="checkbox-rm" type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                Set Reminder
                </label>
            </div>
            <input type="submit" className="btn btn-block" value='Save'/>
        </form>
    )
}

export default AddTask;