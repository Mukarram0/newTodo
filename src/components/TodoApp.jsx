import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markDone } from "../features/todo/todoSlice";
import "./TodoApp.css";
export default function TodoApp()
{
    const todos=useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch=useDispatch();
    function handleDelete(id)
    {
        dispatch(deleteTodo(id));
    }
    function handleMarkDone(id)
    {
        dispatch(markDone(id));
    }
    const styling={textDecoration:"line-through"};
    return(
        <div className="Todo">
             <AddForm/>
            <h2 className="head">Todo List</h2>
            <ul className="head">{todos.map((todo)=>(<li className="text" key={todo.id} style={todo.isDone?styling:{}}>{todo.task}
                &nbsp;<button className="delete" onClick={()=>handleDelete(todo.id)}>delete</button>
                <button className="markDone" onClick={()=>handleMarkDone(todo.id)}>mark_Done</button>
            </li>))}</ul>
        </div>
    );
}