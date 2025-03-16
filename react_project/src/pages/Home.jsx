import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a to-do app' },
    { id: 3, title: 'Master JavaScript' }
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Todo List</h2>
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

export default Home;
