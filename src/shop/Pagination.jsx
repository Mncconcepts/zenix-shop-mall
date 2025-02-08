import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePrevClick = () => {
        if (activePage > 1) {
            paginate(activePage - 1);
        }
    };

    const handleNextClick = () => {
        if (activePage < totalPages) {
            paginate(activePage + 1);
        }
    };

    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <button
                    onClick={handlePrevClick}
                    disabled={activePage === 1}
                    aria-label="Previous Page"
                    className='pagination-btn'
                >
                    <i className='icofont-rounded-left'></i>
                </button>
            </li>

            {
                pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-danger" : ""}`}>
                        <button
                            onClick={() => paginate(number)}
                            className='bg-transparent'
                            aria-label={`Go to page ${number}`}
                        >
                            {number}
                        </button>
                    </li>
                ))
            }

            <li>
                <button
                    onClick={handleNextClick}
                    disabled={activePage === totalPages}
                    aria-label="Next Page"
                    className='pagination-btn'
                >
                    <i className='icofont-rounded-right'></i>
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
