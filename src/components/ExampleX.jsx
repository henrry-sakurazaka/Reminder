import React from 'react';
import Example1 from './Example1';
import { AsyncContextProvider } from '../context/AsyncContext';
import { useTodos } from '../context/TodoContext';

const ExampleX = () => {
  const { isReady } = useTodos();
  return (
    <>
      {/* {isReady && ()}  */}
      <AsyncContextProvider>
        <Example1 />
      </AsyncContextProvider>
    </>
  );
};

export default ExampleX;
