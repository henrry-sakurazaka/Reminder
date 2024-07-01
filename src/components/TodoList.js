import React from "react";
import { useTodos } from "../context/TodoContext";
import { useAsyncContext } from "../context/AsyncContext";
import Edit from "./Edit";

const TodoList = () => {

  const { todos } = useTodos();
  const { data, loading , setData} = useAsyncContext();
  console.log('data',data)
  
    return ( 
        <> 
           
          {loading ? ( 
                <div>Loading...</div>
            ) : ( 
                <div>
                    
                    {Array.isArray(todos)&& todos.length > 0 && data && todos && todos.map(todo => (
                        todo && todo.id ? (
                            <Edit key={todo.id} todo={todo} />
                        ) : null     
                    ))}

                </div>
              
            )} 

            {/* <div>
                {Array.isArray(todos) && todos.map(todo => (
                    <Edit key={todo.id} todo={todo} />
                    
                ))}
            </div>     */}    
        </>    
    );
}

export default TodoList;