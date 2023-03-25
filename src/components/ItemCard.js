import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, addToCart }) => {
  return (
    <div className="item-card">
      <p>{item.itemDuration}</p>
      <Link to={`/item/${item.id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/${item.image}`}
          alt={item.name}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '150px' }}
        />
      </Link>
      <h2>${item.price}</h2>
      <p>{item.type}</p>
      <p>{item.skin}</p>
      <p>{item.rarity}</p>
      <p>Float: {item.floatValue.toFixed(3)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
