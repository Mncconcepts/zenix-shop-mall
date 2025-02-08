import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Optional prop validation

const PageHeader = ({ title, curPage }) => {
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2 className="text-danger">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    {curPage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  curPage: PropTypes.string.isRequired,
};

export default PageHeader;
