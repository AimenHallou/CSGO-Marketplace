import React from 'react';
import ItemCard from './ItemCard';
import { fakeItems } from './MarketplaceData';

const Marketplace = ({ addToCart, isLoggedIn }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Marketplace</h1>
            <img
                src={`${process.env.PUBLIC_URL}/image.png`}
                alt="Marketplace Banner"
                style={{ width: '50%', marginBottom: '1rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <div className="items-container">
                {fakeItems.map((item) => (
                    <ItemCard key={item.id} item={item} addToCart={addToCart} isLoggedIn={isLoggedIn} />
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
