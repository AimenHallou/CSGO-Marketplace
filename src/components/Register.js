import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [receiveSpecialOffers, setReceiveSpecialOffers] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registration successful!");
      navigate('/');
      // Redirect or perform another action after successful registration
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Register</h1>
      <form onSubmit={handleRegister}>
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
        <div className="field">
          <label className="label">Confirm Password:</label>
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={receiveSpecialOffers}
              onChange={() => setReceiveSpecialOffers(!receiveSpecialOffers)}
            />
            {' '}Receive special offers
          </label>
        </div>
        <button className="button is-primary" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
