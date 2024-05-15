import React, {useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {

    const [value, setValue] = useState(task.task) 

    const handleSubmit = e => {
      // Prevent the default form submission behavior (automatically Reloads the page)
      e.preventDefault();
  
      editTodo(value,task.id);
      
      setValue("")
    };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input 
        type='text' 
        className='todo-input' 
        placeholder='Update Task'
        value={value} // Bind the input value to the state
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
