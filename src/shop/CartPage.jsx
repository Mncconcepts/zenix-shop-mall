import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    // Calculate total price for each item
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    // Handle quantity increase
    const handleIncrease = (item) => {
        const updatedItems = cartItems.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
    }

    // Handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            const updatedItems = cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            setCartItems(updatedItems);
            localStorage.setItem("cart", JSON.stringify(updatedItems));
        }
    };

    // Handle item removal
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Cart subtotal calculation
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    // Calculate total quantity of items in the cart
    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const orderTotal = cartSubtotal;

    const handleCouponSubmit = (e) => {
        e.preventDefault();
        // Implement coupon functionality here
    };

    return (
        <div>
            <PageHeader title={"Check-Out Place"} curPage={"Cart Page"} />
            <div className='shop-cart padding-tb'>
                <div className="container">
                    <div className="section-wrapper">
                        {/* Cart Top Section */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className="product-item cat-product">
                                                    <div className='p-thumb'>
                                                        <Link to="/shop"><img src={item.img} alt={item.name} /></Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${item.price}</td>
                                                <td className='cat-quantity'>
                                                    <button onClick={() => handleDecrease(item)}>-</button>
                                                    {item.quantity}
                                                    <button onClick={() => handleIncrease(item)}>+</button>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrice(item).toFixed(2)}</td>
                                                <td className='cat-edit'>
                                                    <button onClick={() => handleRemoveItem(item)}>Remove</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">Your cart is empty.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Cart Bottom Section */}
                        <div className='cart-bottom'>
                            {/* Checkout Box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon' onSubmit={handleCouponSubmit}>
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code...' />
                                    <input className='ms-2' type="submit" value="Apply Coupon" />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage />
                                    </div>
                                </form>
                            </div>

                            {/* Shipping Box */}
                            <div className="shiping-box">
                                <div className='row g-3'>
                                    <div className='col-md-6 col-12'>
                                        <div className='calculate-shiping'>
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="usa">United States (USA)</option>
                                                    <option value="nig">Nigeria (NIG)</option>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="ind">India (IND)</option>
                                                    <option value="eur">Europe (EUR)</option>
                                                    <option value="ger">Germany (GER)</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="fa-solid fa-circle-chevron-down"></i>
                                                </span>
                                            </div>

                                            <div className='outline-select shipping-select'>
                                                <select>
                                                    <option value="usa">America</option>
                                                    <option value="nig">Abuja</option>
                                                    <option value="uk">London</option>
                                                    <option value="ind">Delhi</option>
                                                    <option value="eur">Amsterdam</option>
                                                    <option value="ger">Hamburg</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="fa-solid fa-circle-chevron-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' placeholder='Postal code/ZIP' className='cart-page-input-text' />
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12'>
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Total Quantity</span>
                                                    <p className='pull-right'>{totalQuantity}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubtotal.toFixed(2)}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping/Delivery</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
