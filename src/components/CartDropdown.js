import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const CartDropdown = ({
  cartItems = [],
  closeCart,
  removeFromCart,
  clearCart,
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const dropdownRef = useRef();
  const navigate = useNavigate();

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

  const viewCart = () => {
    closeCart();
    navigate('/cart');
  };

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
          <li key={item.id} className="cart-item">
            <div className="cart-item-content">
              <Link to={`/item/${item.id}`} onClick={closeCart}>
                <img
                  src={`${process.env.PUBLIC_URL}/${item.image}`}
                  alt={item.name}
                  className="cart-item-image"
                />
              </Link>
              <div className="cart-item-details">
                <p>{item.type}</p>
                <p>{item.skin}</p>
                <p>{item.rarity}</p>
                <p>{item.itemDuration}</p>
              </div>
              <div className="remove-item-container">
                <div className="cart-item-price">${item.price}</div>
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  &times;
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-dropdown-buttons">
          <button onClick={viewCart}>View Cart</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
