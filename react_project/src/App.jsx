import React from 'react';
import useFetch from './hook/useFetch';  // Importa il custom hook

const MyApp = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  if (loading) {
    return <div>Caricamento...</div>;
  }
  
  
  if (error) {
    return <div>Errore: dati non recuperati {error}</div>;
  }
  
  return (
    <div>
    <h1>Dati recuperati</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyApp;