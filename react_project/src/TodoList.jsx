import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useTodos } from './TodoContext'; 
import useFilteredTodos from './useFilteredTodos'; 

const TodoList = () => {
  const { todos, updateTodos, loading, error } = useTodos(); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const searchInputRef = useRef(null);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value); 
  }, []); 

  const filteredTodos = useMemo(() => {
    return useFilteredTodos(todos, searchTerm);
  }, [todos, searchTerm]); 

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); 
    }
  }, []); 

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
        ref={searchInputRef} 
        type="text"
        placeholder="Cerca to-do..."
        value={searchTerm}
        onChange={handleSearchChange} 
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
