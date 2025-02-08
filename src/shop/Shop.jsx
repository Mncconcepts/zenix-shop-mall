import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";
import Data from "../products.json"; // Ensure this file is in the 'public' folder if using Vercel/GitHub Pages
import ProductCards from '../Home/ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCart from './ShopCart';
import PopularPost from './PopularPost';

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Filter products based on category
    const [SelectedCategory, setSelectedCategory] = useState("All");
    const categories = Array.from(new Set(Data.map((item) => item.category))); // Unique categories

    const filterItem = (category) => {
        const filteredItems = category === "All" ? Data : Data.filter((item) => item.category === category);
        setSelectedCategory(category);
        setProducts(filteredItems);
    };

    return (
        <div>
            <PageHeader title="Our Shop Place" curPage="shop" />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, products.length)} of {products.length} results</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <button
                                            className="grid me-2"
                                            onClick={() => setGridList(true)}
                                            aria-label="Switch to grid view"
                                        >
                                            <i className="fas fa-th"></i>
                                        </button>
                                        <button
                                            className="list"
                                            onClick={() => setGridList(false)}
                                            aria-label="Switch to list view"
                                        >
                                            <i className="fas fa-list"></i>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCart
                                    filterItem={filterItem}
                                    setItems={setProducts}
                                    categories={categories}
                                    selectedCategory={SelectedCategory}
                                />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
