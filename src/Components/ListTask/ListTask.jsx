import React from 'react'
import { useSelector } from "react-redux"
import Task from '../Task/Task'
import "./ListTask.css"
import { Button } from "react-bootstrap"


function ListTask() {
    const tasks = useSelector(state => state.tasksReducer.tasks)
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" >Show Done</Button>
                <Button variant="outline-danger" > Show Not Done</Button>
                <Button variant="info">Remove All Filters</Button>
            </div>
            {
                tasks.map((task, index) => <Task key={task.id} taskData={task} index={index} />)
            }
            
        </div >
    )
}

export default ListTask
