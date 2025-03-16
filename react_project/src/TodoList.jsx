import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a to-do app' },
    { id: 3, title: 'Master JavaScript' }
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
