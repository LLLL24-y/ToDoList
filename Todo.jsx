import { useState } from "react";
import './Todo.css';
export const Todo = () => {
    const [mess, setMess] = useState("")
    const [list, setList] = useState([])

    const handleMess = (e) => {
        setMess(e.target.value)
    }

    const handleList = () => {
        const newList = [...list, { id: Date.now(), text: mess, completed: false }]
        setList(newList)
        setMess("")
    }

    const handleRemove = (id) => {
        setList(list.filter(item => item.id !== id))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={mess} onChange={handleMess} placeholder="Add a task"/>
            <button onClick={handleList}>Add</button>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.text}
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}