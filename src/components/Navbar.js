import CartDropdown from './CartDropdown';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cartItems }) => {
  const [showCart, setShowCart] = useState(false);
  const cartLength = cartItems ? cartItems.length : 0;

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Logo"
              style={{ height: '30px', marginRight: '1rem' }}
            />
          </Link>
        </li>
        <li className="search-bar">
          <input type="search" placeholder="Search items..." />
        </li>
        <li className="nav-cart">
          <span onClick={toggleCart} style={{ cursor: 'pointer', marginRight: '1rem' }}>
            <FontAwesomeIcon icon={faShoppingCart} /> ({cartLength})
          </span>
          {showCart && <CartDropdown cartItems={cartItems} closeCart={() => setShowCart(false)} />}
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
