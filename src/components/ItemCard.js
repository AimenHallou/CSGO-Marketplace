import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ItemCard = ({ item, addToCart, isLoggedIn }) => {
    const navigate = useNavigate();

    const handleAddToCart = () => {
      if (isLoggedIn) {
        addToCart(item);
      } else {
        navigate('/signin');
      }
    };
  return (
    <div className="item-card">
      <p>{item.itemDuration}</p>
      <Link to={`/item/${item.id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/${item.image}`}
          alt={item.name}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '120px', borderRadius: '4px' }}
        />
      </Link>
      <h2>${item.price}</h2>
      <p>{item.type}</p>
      <p>{item.skin}</p>
      <p>{item.rarity}</p>
      <p>{item.floatValue.toFixed(3)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
