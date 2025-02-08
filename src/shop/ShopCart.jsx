import React from 'react';
import Data from '../products.json';

const ShopCart = ({ filterItem, setProducts, SelectedCategory, categories }) => {
    return (
        <>
            <div className="widget-header">
                <h5 className='ms-2'>All Categories</h5>
            </div>
            <div>
                <button onClick={() => setProducts(Data)} className={`m-2 ms-2 d-block ${SelectedCategory === "All" ? "bg-danger" : ""}`}>All</button>
            </div>
            <div className="category-buttons">
                {/* Render category buttons dynamically */}
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => filterItem(category)}
                        className={`m-2 btn ${SelectedCategory === category ? "btn-danger" : "btn-outline-danger"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ShopCart;
