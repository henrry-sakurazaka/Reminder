import React from 'react';
import Example2 from './Example2';
import { useNavigate } from 'react-router-dom';
import './Todo.css';

const Example1 = () => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate('/UserAuth');
  };

  return (
    <>
      <span className="back" onClick={navigationHandler}>
        Back to Auth
      </span>
      <Example2 />
    </>
  );
};

export default Example1;
