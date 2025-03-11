import React, { useState } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  // Funzione per gestire il cambiamento del valore dell'input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="textInput">Inserisci del testo:</label>
      <input
        type="text"
        id="textInput"
        value={inputValue}  // Imposta il valore dell'input dallo stato
        onChange={handleChange}  // Aggiorna lo stato ad ogni cambiamento dell'input
      />
      <p>Il testo inserito è: {inputValue}</p>  {/* Visualizza il valore dell'input */}
    </div>
  );
};

export default TextInput;
