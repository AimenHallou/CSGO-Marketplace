import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Marketplace from './components/Marketplace';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoadingAuthState(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
        <Routes>
          <Route path="/" element={<Marketplace addToCart={addToCart} isLoggedIn={!!user} />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
