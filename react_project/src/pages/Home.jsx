import React from 'react';

const Home = () => {
  const todos = [
    { id: 1, text: 'Comprare il pane' },
    { id: 2, text: 'Finire il progetto' },
    { id: 3, text: 'Fare la spesa' },
  ];

  return (
    <div>
      <h2>Lista dei To-Do</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
