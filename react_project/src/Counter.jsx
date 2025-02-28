import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        className="border p-2 rounded w-full mb-2"
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className="border p-2 rounded w-full mb-2"
        placeholder="Password"
      />
       <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded w-full mt-2"
      >
        Submit
      </button>
      <p className="mt-2 text-gray-700">Username: {username}</p>
      <p className="mt-2 text-gray-700">Password: {password}</p>
    </div>
  );
};

export default LoginForm;
