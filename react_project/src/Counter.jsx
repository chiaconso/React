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
    const items = ["Elemento 1", "Elemento 2", "Elemento 3"];
    
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Lista di Elementi</h1>
        <ItemList items={items} />
      </div>
    );
  };
  
  export default App;
  