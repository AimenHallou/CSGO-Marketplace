import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
