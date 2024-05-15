import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
  // Correctly initialize state using useState
  const [value, setValue] = useState("") 

  const handleSubmit = e => {
    // Prevent the default form submission behavior (automatically Reloads the page)
    e.preventDefault();

    addTodo(value);
    
    setValue("")
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='todo-input' 
        placeholder='What is the task today?'
        value={value} // Bind the input value to the state
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};
