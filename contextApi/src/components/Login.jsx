import React from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";
import { useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };
  return (
    <div>
      <h2>Login Bhai</h2>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
