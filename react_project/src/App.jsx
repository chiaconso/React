// App.js
import React from 'react';
import { TodoProvider } from './TodoContext'; // Importiamo il provider
import TodoList from './TodoList';  // Importiamo il componente TodoList

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
