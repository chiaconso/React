import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/Home';
import TodoList from './TodoList'; 
import TodoDetails from './components/TodoDetails'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todo-list" element={<TodoList />} />  
        <Route path="todo/:todoId" element={<TodoDetails />} /> 
      </Route>
    </Routes>
  );
};

export default App;
