import React from 'react';
import Example1 from './Example1';
import { AsyncContextProvider } from '../context/AsyncContext';
import { TodoProvider, useTodos } from '../context/TodoContext';

const Example = () => {
  const { isReady } = useTodos() || {};

  return (
    <>
      {isReady && (
        <TodoProvider>
          <AsyncContextProvider>
            <Example1 />
          </AsyncContextProvider>
        </TodoProvider>
      )}
    </>
  );
};

export default Example;
