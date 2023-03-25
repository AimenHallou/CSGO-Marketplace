import React from 'react';

const CartDropdown = ({ cartItems = [], closeCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-dropdown">
      <button className="cart-dropdown-close" onClick={closeCart}>
        &times;
      </button>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src={`${process.env.PUBLIC_URL}/${item.image}`}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <p>{item.type}</p>
              <p>{item.skin}</p>
              <p>{item.rarity}</p>
              <p>{item.itemDuration}</p>
            </div>
            <div className="cart-item-price">${item.price}</div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartDropdown;
