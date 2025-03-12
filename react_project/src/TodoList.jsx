// TodoList.js
import React, { useState, useCallback } from 'react';
import useFetch from './useFetch'; 
import useFilteredTodos from './useFilteredTodos';

const TodoList = () => {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [searchTerm, setSearchTerm] = useState(''); 

  // Utilizziamo useCallback per memorizzare la funzione di gestione dell'input di ricerca
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value); 
  }, []); 

  const filteredTodos = useFilteredTodos(todos, searchTerm); // Filtriamo i to-do con il termine di ricerca

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
        onChange={handleSearchChange} // Gestiamo il termine di ricerca con la funzione memorizzata
      />
      <ul>
        {filteredTodos.length === 0 ? (
          <div>Nessun to-do trovato</div>
        ) : (
          filteredTodos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              {todo.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
