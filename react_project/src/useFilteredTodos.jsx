// useFilteredTodos.js
import { useState, useEffect } from 'react';

const useFilteredTodos = (todos, searchTerm) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (searchTerm) {
      const filtered = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todos); // Se non c'è termine di ricerca, restituiamo tutti i to-do
    }
  }, [todos, searchTerm]);

  return filteredTodos;
};

export default useFilteredTodos;
