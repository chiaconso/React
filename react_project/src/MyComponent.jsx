import React from 'react';
import useFetch from './useFetch';  // Importa il custom hook

const MyComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore: {error}</div>;
  }

  return (
    <div>
      <h1>Dati recuperati</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;