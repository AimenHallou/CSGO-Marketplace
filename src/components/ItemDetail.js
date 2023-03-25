import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeItems } from './MarketplaceData';

const ItemDetail = () => {
  const { id } = useParams();
  const item = fakeItems.find((i) => i.id === parseInt(id, 10));

  return (
    <div className="item-detail">
      <div className="item-detail-left">
        <p>{item.itemDuration}</p>
        <img
          src={`${process.env.PUBLIC_URL}/${item.image}`}
          alt={item.name}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            maxHeight: '300px',
          }}
        />
        <p>{item.rarity}</p>
      </div>
      <div className="item-detail-right">
        <h2>{item.type}</h2>
        <h2>{item.skin}</h2>
        <h2>{item.rarity}</h2>
        <h1>${item.price}</h1>
        <button>Add to Cart</button>
        <p>Pattern: {item.pattern}</p>
        <p>Float: {item.floatValue.toFixed(3)}</p>
        <p>Description: {item.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
