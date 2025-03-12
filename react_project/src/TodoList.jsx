// TodoList.js
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useTodos } from './TodoContext'; // Importiamo il nostro hook personalizzato per accedere al contesto
import useFetch from './useFetch'; // Importiamo il hook per ottenere i dati
import useFilteredTodos from './useFilteredTodos'; // Importiamo il hook per filtrare i to-do

const TodoList = () => {
  const { todos, updateTodos } = useTodos(); // Accediamo ai to-do e alla funzione di aggiornamento dal contesto
  const [searchTerm, setSearchTerm] = useState(''); // Stato per il termine di ricerca

  // Riferimento all'input di ricerca
  const searchInputRef = useRef(null);

  // Utilizziamo useCallback per memorizzare la funzione di gestione dell'input di ricerca
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value); // Aggiorniamo il termine di ricerca
  }, []); // La funzione non dipende da nulla, quindi l'array di dipendenze è vuoto

  // Memorizziamo la lista dei to-do filtrati per evitare ricalcoli inutili
  const filteredTodos = useMemo(() => {
    return useFilteredTodos(todos, searchTerm);
  }, [todos, searchTerm]); // La lista verrà ricalcolata solo se 'todos' o 'searchTerm' cambiano

  // Impostiamo il focus sull'input quando il componente viene montato
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Impostiamo il focus sull'input
    }
  }, []); // L'effetto viene eseguito solo al montaggio del componente

  // Recuperiamo i dati dei to-do se non sono già presenti nel contesto
  const { data: fetchedTodos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  useEffect(() => {
    if (fetchedTodos.length > 0 && todos.length === 0) {
      updateTodos(fetchedTodos); // Se i to-do non sono già presenti, li aggiorniamo nel contesto
    }
  }, [fetchedTodos, todos, updateTodos]);

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
        ref={searchInputRef} // Colleghiamo il riferimento all'input
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
