import { useState } from "react"

const TextInput = () => {
    const [text, setText] = useState("");
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Scrivi qualcosa..."
        />
        <p className="mt-2 text-gray-700">Valore: {text}</p>
      </div>
    );
  };
  
  export default TextInput;