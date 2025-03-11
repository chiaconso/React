import React, { useState } from 'react';

const TextInput = () => {
  // Stato per mantenere il valore dell'input
  const [inputValue, setInputValue] = useState('');

  // Funzione per aggiornare il valore dello stato quando l'utente digita
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textInput">Inserisci qualcosa: </label>
      <input
        id="textInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Valore inserito: {inputValue}</p>
    </div>
  );
};

export default TextInput;