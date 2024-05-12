import React from "react";
import { useTodos } from "../context/TodoContext";
import { useAsyncContext } from "../context/AsyncContext";
import Edit from "./Edit";

const List = () => {

  const { todos } = useTodos();
  const { data, loading } = useAsyncContext();
  
    return ( 
        <>
          {loading ? ( // ローディング中の場合
                <div>Loading...</div>
            ) : ( // ローディングが終了した場合
                <div>         
                    {data && todos && todos.map(todo => (
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

            {/* {task.map(todo => {
                <Edit key={todo.id} todo={todo}/>
            })} */}
         
          {/* <div>
                { data && todos && Array.isArray(todos) && todos.map(todo => (
                    todo && todo.id ? (
                        <Edit key={todo.id} todo={todo} />
                    ): console.log('yees')
                ))}
            </div>               */}

            {/* <div>
                { data && todos && Array.isArray(todos) && todos.map(todo => (
                    todo && todo.id ? (
                        <Edit key={todo.id} todo={todo} />
                    ): null  
                ))}
            </div>              
           */}
        </>    
    );
}

export default List;