// TodoList.js
import React, { useState } from 'react';
import useFetch from './hook/useFetch'; // Importiamo il hook per ottenere i dati
import useFilteredTodos from './useFilteredTodos'; // Importiamo il hook per filtrare i to-do

const TodoList = () => {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il termine di ricerca

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
        onChange={(e) => setSearchTerm(e.target.value)} // Gestiamo il termine di ricerca
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
