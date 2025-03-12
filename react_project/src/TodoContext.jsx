// TodoContext.js
import React, { createContext, useState, useContext } from 'react';

// Crea il contesto per i to-do
const TodoContext = createContext();

// Il provider del contesto che fornisce lo stato e la funzione di aggiornamento
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  
  // Funzione per aggiornare la lista dei to-do
  const updateTodos = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, updateTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

// Hook personalizzato per accedere al contesto
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve essere usato all\'interno di un TodoProvider');
  }
  return context;
};
