import React, { useState } from 'react';
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';


const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(1).png',
        cate: 'Wrist Watch',
        title: 'Essential wrist watch',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$100.00',
        id: 4,
    },

    {
        imgUrl: 'src/assets/images/categoryshowcase/new(1).jpg',
        cate: 'Shoes',
        title: 'Essential Outdoor Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$135.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(2).png',
        cate: 'Wrist Watch',
        title: 'Essential wrist watch',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Gucci',
        price: '$200.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(3).png',
        cate: 'Wrist Watch',
        title: 'Essential wrist watch',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$150.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(4).png',
        cate: 'Shoes',
        title: 'Casual Shoe',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$100.00',
        id: 8,
    },
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(5).png',
        cate: 'Shoes',
        title: 'Premier Shoe',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$190.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(6).png',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$100.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryshowcase/new(7).png',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'D&J Bags',
        price: '$250.00',
        id: 3,
    },


];



const CategoryShow = () => {
    const [items, setItems] = useState(ProductData);

    //category based filtering
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });

        setItems(updateItems)
    };
    return (
        <div className='course-section style-3 padding-tb'>
            <div className='course-shape one'><img src="src/assets/images/shape-img/icon/01.png" alt="" /></div>
            <div className='course-shape two'><img src="src/assets/images/shape-img/icon/02(1).png" alt="" /></div>


            {/* main section */}
            <div className="container">
                {/* section header */}
                <div data-aos='fade-left' className="section-header">
                    <h2 className='title'>{title}</h2>
                    <div className='course-filter-group'>
                        <ul className='lab-ul'>
                            <li onClick={() => setItems(ProductData)}>All</li>
                            <li onClick={() => filterItem("Shoes")}>Shoes</li>
                            <li onClick={() => filterItem("Bags")}>Bags</li>
                            <li onClick={() => filterItem("Wrist Watch")}>Wrist Watch</li>
                        </ul>
                    </div>
                </div>

                {/* section body */}
                <div className="section-wrapper">
                    <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                        {
                            items.map((product) => <div key={product.id} className='col'>
                                <div className='course-item style-4'>
                                    <div className='course-inner'>
                                        <div data-aos='zoom-in' className="course-thumb">
                                            <img src={product.imgUrl} alt="" />
                                            <div className='course-category'>
                                                <div className="course-cate">
                                                    <a href="#">{product.cate}</a>
                                                </div>
                                                <div className='course-relow'>
                                                    <Ratting />

                                                </div>
                                            </div>

                                        </div>

                                        {/* content */}
                                        <div className="course-content">
                                            <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
                                            <div className='course-footer'>
                                                <div className='course-author'>
                                                    <Link to="/" className='ca-name'>{product.brand}</Link>
                                                </div>
                                                <div className="course-price">
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryShow;