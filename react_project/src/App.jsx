import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';  // Importa Link da react-router-dom
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div>
      {/* Aggiungi la barra di navigazione */}
      <nav>
        <ul>
          <li>
            {/* Collegamento per la Home */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Collegamento per la pagina About */}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Definisci le rotte */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
