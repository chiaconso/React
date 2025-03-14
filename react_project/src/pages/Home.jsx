// src/pages/Home.js
import React, { useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Compra il latte' },
    { id: 2, text: 'Studia per l\'esame' },
    { id: 3, text: 'Fai la spesa' },
  ]);

  return (
    <div>
      <h1>Lista dei To-Do</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
