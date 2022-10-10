import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


const Cart = ({cart, clearCart, children}) => {
    // const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = +((total * 0.1).toFixed(2));
    // const grand = +((total + shipping + tax).toFixed(2));
    const grand = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>

            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>

            <h5>Grand Total: {grand.toFixed(2)}</h5>

            <div className='cart-btn'>
                <button onClick={clearCart} className='btn-delete'>
                    Clear Cart
                    <span><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></span>
                    
                </button>
                <br />
                {children}
            </div>
        </div>
    );
};

export default Cart;