import React,{useState} from "react";
function Todo(){
    const [todos, setTodos] = useState(["a"]);
    const [inp, setInput] = useState("");

    function handleUpdate(e){
        setInput(e.target.value);
    }
    function addTodo(){
        if(inp.trim() !== "") {
        setTodos(t => [...t, inp]);
        setInput("");}
    }
    function removeTodo(index){
        setTodos(todos.filter((_,i) => i !== index));
    }
    return(<div>
    <h2>Todo</h2>
    <ul>
        {todos.map((todo,index) =>
        <li key={index} onClick={() => removeTodo(index)}>
            {todo}
        </li>)}
    </ul>
    <input type="text" value={inp} placeholder="Add a todo" onChange={handleUpdate} />
    <button onClick={addTodo}>Add</button>
    </div>);
}
export default Todo;