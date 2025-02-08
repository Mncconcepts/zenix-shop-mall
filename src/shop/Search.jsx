import React, { useState } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'; // Use

export const Search = ({products, GridList }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
        <div className='widget widget-search'>
            <form className='search-wrapper mb-3'>
                <input type="text" name='search' id='search' placeholder='Search Here...' defaultValue={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} />
                <button type='submit'>
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>

            {/* showing search results */}
            <div>
                {
                    searchTerm && filteredProducts.map((product) => (
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <div className='d-flex gap-3 p-2'>
                                <div>
                                    <div className="pro-thumb h-25">
                                        <img src={product.img} alt="" width={70} className='flex-{grow|shrink}-0' />
                                    </div>
                                </div>
                                <div className="product-content">
                                    <span>
                                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                    </span>
                                    <h6 className='text-danger'>${product.price}</h6>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Search