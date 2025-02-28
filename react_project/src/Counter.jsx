const ItemList = ({ items }) => {
    return (
      <ul className="p-4 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    );
  };
  
  export default ItemList;
  