import React from "react";

// Componente ItemList
const ItemList = ({ items }) => {
  return (
    <ul className="p-4 list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const itemsArray = ["Elemento A", "Elemento B", "Elemento C", "Elemento D", "Elemento E"]; // Array di esempio

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Applicazione React</h1>
      <h2 className="text-xl font-bold mb-2">Lista di Elementi</h2>
      {/* Usa il componente ItemList passando l'array itemsArray */}
      <div className="card p-4 border rounded shadow">
        <ItemList items={itemsArray} />
      </div>
    </div>
  );
};

export default App;
