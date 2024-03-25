import React from "react";
import { useTodos} from "../context/TodoContext";
import Edit from "./Edit";

const List = () => {
   
    const todos = useTodos(); 
        
    return (
        <div>
            {todos.map(todo => (
                  <Edit key={todo.id} todo={todo} />
                
            ))}
        </div>
    );
}

export default List;