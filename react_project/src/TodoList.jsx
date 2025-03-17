import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a to-do app' },
    { id: 3, title: 'Master JavaScript' }
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || ''; 

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchParams({ search: value }); 
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Campo di ricerca */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Lista dei todo filtrata */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
