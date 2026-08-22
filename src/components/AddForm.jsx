import { useState } from "react"
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice";
import "./AddForm.css";

export default function AddForm()
{
    let[task,setTask]=useState("");

    const dispatch=useDispatch();
    function handleTask(event)
    {
        setTask(event.target.value);
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input className="input" value={task} placeholder="enter a task" onChange={handleTask}></input>
            <button className="submit">submit</button>
        </form>
    )
}