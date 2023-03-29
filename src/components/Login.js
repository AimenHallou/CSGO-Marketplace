import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      navigate('/');
    } catch (error) {
      console.error("Error during login:", error.message);
      window.alert("Account doesn't exist. Please try again.");
    }
  };
  



  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="field">
          <label className="label">Email:</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="label">Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button is-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
