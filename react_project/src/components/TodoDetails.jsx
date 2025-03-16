import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
  const { todoId } = useParams(); 
  const [todo, setTodo] = useState(null);

  const todos = [
    { id: 1, title: 'Learn React', description: 'Learn React basics and hooks.' },
    { id: 2, title: 'Build a to-do app', description: 'Create a to-do list app with React.' },
    { id: 3, title: 'Master JavaScript', description: 'Deep dive into JavaScript ES6+ features.' }
  ];

  useEffect(() => {
    const selectedTodo = todos.find(todo => todo.id === parseInt(todoId));
    setTodo(selectedTodo);
  }, [todoId]);

  if (!todo) {
    return <div>Todo not found!</div>;
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoDetails;
