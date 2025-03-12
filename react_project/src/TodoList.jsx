import React, { useState } from 'react';
import useFetch from './useFetch'; // Hook per ottenere i dati
import useFilteredTodos from './useFilteredTodos'; // Hook per filtrare i to-do

const TodoList = () => {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTodos = useFilteredTodos(todos, searchTerm); // Filtriamo i to-do

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Si è verificato un errore: {error}</div>;
  }

  return (
    <div>
      <h1>Lista di To-Do</h1>
      <input
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Gestiamo il termine di ricerca
      />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
