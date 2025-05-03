import React from 'react';
import Example1 from './Example1';
import { TodoProvider } from '../context/TodoContext';
import { AsyncContextProvider } from '../context/AsyncContext';

const Example = () => {
  return (
    <>
      <TodoProvider>
        <AsyncContextProvider>
          <Example1 />
        </AsyncContextProvider>
      </TodoProvider>
    </>
  );
};

export default Example;
