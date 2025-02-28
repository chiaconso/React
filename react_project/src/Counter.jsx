const ItemList = ({ items }) => {
    return (
      <ul className="p-4 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    );
  };
  
  const Card = ({ children }) => {
    return <div className="card p-4 border rounded shadow">{children}</div>;
  };
  
  const App = () => {
    const items = ["Elemento 1", "Elemento 2", "Elemento 3"];
    
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Lista di Elementi</h1>
        <Card>
          <ItemList items={items} />
        </Card>
      </div>
    );
  };
  
  export default App;
  