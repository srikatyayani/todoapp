import {useState} from "react";

export default function Todo(){
    const [Todo,setTodo]=useState("");
    const [Todos,setTodos]=useState([]);//Another state to save all the todos in list

    function handleSubmit(e){
        e.preventDefault(); //This helps to prevent the page from reloading after clicking the submit button
        setTodos([...Todos,Todo]);//adds todo to todos list and spread spread operator is used to add todo to existing todos list
        setTodo("");//helps to get blank input box after add button is clicked
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setTodo(e.target.value)} type="text" value={Todo} />
                <button type="submit">Add</button>
            </form>
            {Todos.map((item)=>(
                <TodoList item={item}/>
            ))}
        </div>
    );
}