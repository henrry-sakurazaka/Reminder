import React from 'react';
import { useDispatchTodos, useTodos } from '../context/TodoContext';
import { v4 as uuidv4 } from 'uuid'

const Form = () => {
  const dispatch = useDispatchTodos();
  const { enteredTodo, setEnteredTodo, setAddTodosExecuted } = useTodos();
  const newId = uuidv4();

  const addTodo = () => {
    const newTodo = {
      title: enteredTodo,
      description: enteredTodo,
      type: 'string',
      // id: Math.floor(Math.random() * 1e5),
      id: newId,
      content: enteredTodo,
      editing: false,
      completed: false,
      reserve: false,
      editingLock: false,
      editingColor: false,
      editingDateTime: false,
      notification: false,
    };
    dispatch({ type: 'todo/add', todo: newTodo, editing: false });
    setEnteredTodo('');
    setAddTodosExecuted(true);
  };

  const allComplete = () => {
    const neoTodo = [];
    dispatch({ type: 'todo/reset', todo: neoTodo });
  };

  return (
    <div>
      <input
        type="text"
        value={enteredTodo}
        id="task"
        name="task"
        onChange={(e) => {
          setEnteredTodo(e.target.value);
        }}
      />
      <div className="flex-box">
        <button className="add" onClick={() => addTodo()}>
          <div className="plus">
            <span className="gif1"></span>
            <span className="gif2"></span>
          </div>
        </button>
        <button className="reset2" onClick={() => allComplete()}>
          <div className="reset">
            <img src="/icon_007476_32.png" alt="reset"></img>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Form;
