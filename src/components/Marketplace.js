import React from 'react';
import ItemCard from './ItemCard';

export const fakeItems = [
    { id: 1, name: 'Item 1', price: 10, image: 'gun1.png' },
    { id: 2, name: 'Item 2', price: 20, image: 'gun2.png' },
    { id: 3, name: 'Item 3', price: 30, image: 'gun3.png' },
    { id: 4, name: 'Item 4', price: 40, image: 'gun4.png' },
];

const Marketplace = ({ addToCart }) => {
    return (
        <div>
            <h1>Marketplace</h1>
            <img
                src={`${process.env.PUBLIC_URL}/image.png`}
                alt="Marketplace Banner"
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <input
                type="search"
                placeholder="Search items..."
                style={{ marginBottom: '1rem' }}
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
