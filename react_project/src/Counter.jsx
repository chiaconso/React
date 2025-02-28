import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        ref={inputRef}
        className="border p-2 rounded w-full mb-2"
        placeholder="Scrivi qualcosa..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded w-full mt-2"
      >
        Submit
      </button>
    </div>
  );
};

export default UncontrolledInput;
