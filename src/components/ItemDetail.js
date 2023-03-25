import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fakeItems } from './Marketplace';

const ItemDetail = () => {
  const { id } = useParams();
  const item = fakeItems.find((item) => item.id === parseInt(id));

  if (!item) return <h1>Item not found</h1>;

  return (
    <div>
      <Link to="/" className="back-button">Back to Marketplace</Link>
      <div className="item-detail">
        <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.name} />
        <div className="item-info">
          <h1>{item.name}</h1>
          <p>Price: ${item.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
