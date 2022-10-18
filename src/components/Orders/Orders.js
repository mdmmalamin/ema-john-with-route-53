import React, { useState } from 'react';
import './Orders.css';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

const Orders = () => {
    const { initialCart } = useLoaderData(); // return { products: products, initialCart: initialCart };
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 className='no-items'>No Items for Order Review. Please <Link to='/'>Shop Now</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to='/checkout'>
                        <button className='btn-order'>
                            Proceed Checkout <span><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon></span>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;