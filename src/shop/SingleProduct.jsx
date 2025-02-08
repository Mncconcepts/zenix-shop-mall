import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductDisplay from './ProductDisplay';
import Review from './Review';

const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // For showing the popup
    const [selectedItem, setSelectedItem] = useState(null); // For storing the selected item details
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("./src/products.json")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const result = product.filter((p) => p.id === id);

    const addToCart = (newItem) => {
        // Get current cart items from LocalStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item already exists in the cart
        const existingItem = storedCartItems.find((item) => item.id === newItem.id);

        let updatedCart;
        if (existingItem) {
            // If item exists, update its quantity
            updatedCart = storedCartItems.map((item) =>
                item.id === newItem.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // If item does not exist, add it to the cart
            updatedCart = [...storedCartItems, { ...newItem, quantity: 1 }];
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Set cartItems state and show the popup
        setCartItems(updatedCart);
        setSelectedItem(newItem);
        setShowPopup(true);

        // Redirect to checkout page after showing the popup
        setTimeout(() => {
            navigate('/cart-page');
        }, 3000); // Wait for 3 seconds before redirecting
    };

    return (
        <div>
            <PageHeader title={"Order Place"} curPage={"Shop/Single Product"} />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={"true"}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}
                                                        className="mySwiper">
                                                        {result.map((item, i) => (
                                                            <SwiperSlide key={i}>
                                                                <div className='single-thumb'>
                                                                    <img src={item.img} alt="" />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                {result.map(item => <ProductDisplay key={item.id} item={item} />)}
                                                <button
                                                    onClick={() => addToCart({
                                                        id: result[0].id,
                                                        name: result[0].name,
                                                        price: result[0].price,
                                                        img: result[0].img
                                                    })}
                                                    className="add-to-cart-btn">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* reviews */}
                                <div className="reviews">
                                    <Review />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Card */}
            {showPopup && selectedItem && (
                <div className="popup-card">
                    <div className="popup-content">
                        <h4>Item Added to Cart</h4>
                        <img src={selectedItem.img} alt={selectedItem.name} width={50} />
                        <p>Name: {selectedItem.name}</p>
                        <p>Price: ${selectedItem.price}</p>
                        <p>Quantity: 1</p>
                        <p>Total: ${selectedItem.price}</p>
                        <p>Redirecting to checkout page</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;
