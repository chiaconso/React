// TodoList.js
import React, { useState, useCallback, useMemo } from 'react';
import useFetch from './useFetch'; // Importiamo il hook per ottenere i dati
import useFilteredTodos from './useFilteredTodos'; // Importiamo il hook per filtrare i to-do

const TodoList = () => {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il termine di ricerca

  // Utilizziamo useCallback per memorizzare la funzione di gestione dell'input di ricerca
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value); // Aggiorniamo il termine di ricerca
  }, []); // La funzione non dipende da nulla, quindi l'array di dipendenze è vuoto

  // Memorizziamo la lista dei to-do filtrati per evitare ricalcoli inutili
  const filteredTodos = useMemo(() => {
    return useFilteredTodos(todos, searchTerm);
  }, [todos, searchTerm]); // La lista verrà ricalcolata solo se 'todos' o 'searchTerm' cambiano

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
