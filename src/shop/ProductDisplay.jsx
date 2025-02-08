import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing Placeat laborum enim nobis esse assumenda veniam.";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    const exixtingCart = JSON.parse(localStorage.getItem('Cart')) || [];

    const exixtingProductIndex = exixtingCart.findIndex((item) => item.id === id);

    if (exixtingProductIndex !== -1) {
      exixtingCart[exixtingProductIndex].quantity += prequantity;
    } else {
      exixtingCart.push(product);
    }

    // Update local storage with the updated cart
    localStorage.setItem('Cart', JSON.stringify(exixtingCart));

    // Popup alert when an item is added to the cart
    alert(`${name} has been added to your cart!`);

    // Reset form fields after adding to cart
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h5>{name}</h5>
        <p className='rating'>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>{ratingsCount} reviews</span>
        </p>
        <h4 className='text-danger'>${price}</h4>
        <h6>{seller}</h6>
        <span>{desc}</span>
      </div>

      {/* Cart components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* Select sizing */}
          <div className='select-product size'>
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          {/* Select color */}
          <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
              <option>Black</option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          {/* Cart plus-minus */}
          <div className="cart-plus-minus">
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input 
              className='cart-plus-minus-box' 
              type="text" 
              name='qtybutton' 
              id='qtybutton'
              value={prequantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))} 
            />
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>

          {/* Coupon field */}
          <div className='discount-code mb-2'>
            <input 
              type="text" 
              placeholder='Enter Discount Code' 
              onChange={(e) => setCoupon(e.target.value)} 
            />
          </div>

          {/* Buttons */}
          <button type='submit' className='lab-btn text-white'>
            <span>Add To Cart</span>
          </button>
          <Link to="/cart-page" className='lab-btn bg-primary text-white'>
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
