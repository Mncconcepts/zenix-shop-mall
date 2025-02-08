import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const ProductCards = ({ GridList, products }) => {
  // console.log(products)
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {
        products.map((product, i) => (
          <div key={i} className='col-lg-4 col-md-6 col-12'>
            <div className='product-item'>
              {/* product images */}
              <div className="product-thumb">
                <div data-aos='fade-up' className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>

                {/* product action link */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}><i className="fa-solid fa-eye"></i></Link>
                  <a href="#">
                  <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>


              {/* product-content */}
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p>
                  <Ratting/>
                </p>
                <h6>${product.price}</h6>
              </div>
            </div>


            {/* list style */}
            <div className='product-list-item'>
              {/* product images */}
              <div className="product-thumb">
                <div className="pro-thumb">
                  <img src={product.img} alt="" />
                </div>

                {/* product action link */}
                <div className="product-action-link">
                  <Link to={`/shop/${product.id}`}><i className="fa-solid fa-eye"></i></Link>
                  <a href="#">
                  <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>


              {/* product-content */}
              <div className="product-content">
                <h5>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </h5>
                <p>
                  <Ratting/>
                </p>
                <h6>${product.price}</h6>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductCards