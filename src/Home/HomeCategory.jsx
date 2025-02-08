import React from 'react'
import { Link } from 'react-router-dom';


const subTitle = "Buy Anything From Us";
const title = "Our Most Popular Products";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/categoryshowcase/new(2).png',
    imgAlt: 'category',
    iconName: 'fa-solid fa-cart-shopping',
    title: 'Wrist watch',
  },
  {
    imgUrl: 'src/assets/images/categoryshowcase/new(4).png',
    imgAlt: 'category',
    iconName: 'fa-solid fa-cart-shopping',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/categoryshowcase/new(6).png',
    imgAlt: 'category',
    iconName: 'fa-solid fa-cart-shopping',
    title: 'Colorful Bags',
  },
  {
    imgUrl: 'src/assets/images/categoryshowcase/new(1).jpg',
    imgAlt: 'category',
    iconName: 'fa-solid fa-cart-shopping',
    title: 'Outdoor Shoes',
  },
  {
    imgUrl: 'src/assets/images/categoryshowcase/new(7).png',
    imgAlt: 'category',
    iconName: 'fa-solid fa-cart-shopping',
    title: 'Asthetic Bags',
  },
  {
    imgUrl: 'src/assets/images/categoryshowcase/new(2).png',
    imgAlt: 'category',
    iconName: 'fa-solid fa-cart-shopping',
    title: 'Wrist Watch',
  },
];

const HomeCategory = () => {
  return <div className='category-section style-4 padding-tb'>
    <div className='container'>
      <div data-aos='fade-right'  className='section-header text-center'>
        <span className='subtitle text-danger'>{subTitle}</span>
        <h2 className='title'>{title}</h2>
      </div>

      {/* section card */}
      <div className='section-wrapper'>
        <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
          {
            categoryList.map((val, i) => (<div key={i} className='col'>
              <Link to="/shop" className='category-item'>
                <div className='category-inner'>
                  <div data-aos='fade-up' data-aos-duration='1000' className='category-thumb'>
                    <img src={val.imgUrl} alt="" />
                  </div>

                  {/* content */}
                  <div className="category-content">
                    <div className="cate-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <Link to="/shop"><h6>{val.title}</h6></Link>
                  </div>
                </div>
              </Link>
            </div>))
          }
        </div>

          <div data-aos='fade-right' className='text-center mt-5'>
            <Link to="/shop" className='lab-btn'><span className='text-danger'>Get Started</span></Link>
          </div>

      </div>
    </div>
  </div>

};

export default HomeCategory;