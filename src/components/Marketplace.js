import React from 'react';
import ItemCard from './ItemCard';
import { fakeItems } from './MarketplaceData';

const Marketplace = ({ addToCart }) => {
    return (
        <div>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Marketplace</h1>
            <img
                src={`${process.env.PUBLIC_URL}/image.png`}
                alt="Marketplace Banner"
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <div className="items-container">
                {fakeItems.map((item) => (
                    <ItemCard key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
