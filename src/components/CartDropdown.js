import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = ({ cartItems = [], closeCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeCart]);

  return (
    <div className="cart-dropdown" ref={dropdownRef}>
      <div className="cart-header">
        <span>{cartItems.length} items in the cart</span>
        <button className="cart-dropdown-close" onClick={closeCart}>
          &times;
        </button>
      </div>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <Link to={`/item/${item.id}`} onClick={closeCart} key={item.id}>
            <li className="cart-item">
              <img
                src={`${process.env.PUBLIC_URL}/${item.image}`}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <div className="cart-item-details">
                  <p>{item.type}</p>
                  <p>{item.skin}</p>
                  <p>{item.rarity}</p>
                  <p>{item.itemDuration}</p>
                </div>
                <div className="cart-item-price">${item.price}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
