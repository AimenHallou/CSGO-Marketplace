import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import CartDropdown from './CartDropdown';

const Navbar = ({ cartItems, removeFromCart, clearCart }) => {
    const [showCart, setShowCart] = useState(false);
    const cartLength = cartItems ? cartItems.length : 0;

    const [user, setUser] = useState(null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoadingAuthState(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error("Error signing out:", error);
            console.error("Error signing out:", error);
        }
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/logo.png`}
                            alt="Logo"
                            style={{ height: '30px', marginRight: '1rem' }}
                        />
                    </Link>
                </li>
                <li className="search-bar">
                    <input type="search" placeholder="Search items..." />
                </li>
                <li className="nav-cart">
                    <span onClick={toggleCart} style={{ cursor: 'pointer', marginRight: '1rem' }}>
                        <FontAwesomeIcon icon={faShoppingCart} /> ({cartLength})
                    </span>
                    {showCart && (
                        <CartDropdown
                            cartItems={cartItems}
                            closeCart={() => setShowCart(false)}
                            removeFromCart={removeFromCart}
                            clearCart={clearCart}
                        />
                    )}
                </li>
                {!loadingAuthState && (
                    <>
                        {!user ? (
                            <>
                                <li>
                                    <Link to="/signin">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <button className="user-email-button" onClick={handleSignOut}>{user.email}</button>
                                </li>
                                <li>
                                    <button className="sell-button">Sell</button>
                                </li>
                            </>
                        )}
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
