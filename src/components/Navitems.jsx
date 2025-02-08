import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const Navitems = ({ user }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close the menu when an item is clicked
  const handleMenuClose = () => {
    setMenuToggle(false);
  };
  return (
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
      {/* Header Top Section */}
      <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/sign-up" className="lab-btn me-3">
              <span className="text-white">Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      {/* Header Bottom Section */}
      <div className="header-buttom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div>
              <h3 className="mt-2">
                ZENIX <span className="text-danger">STORE</span>
              </h3>
            </div>

            {/* Menu Section */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                  <li onClick={handleMenuClose}>
                    <Link to="/home">Home</Link>
                  </li>
                  <li onClick={handleMenuClose}>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li onClick={handleMenuClose}>
                    <Link to="/about">About</Link>
                  </li>
                  <li onClick={handleMenuClose}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Logged-In User Profile or Login Button */}
              <div className="user-section d-flex align-items-center">
                {user ? (
                  <div className="profile">
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="profile-img"
                      width={40}
                      height={40}
                      style={{ borderRadius: '50%' }}
                    />
                    <span className="ms-2">{user.email}</span>
                  </div>
                ) : (
                  <>
                    <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block text-white">
                      Create Account
                    </Link>
                    <Link to="/login" className="lab-btn text-white d-none d-md-block">
                      Login
                    </Link>
                  </>
                )}
              </div>

              {/* Menu Toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social Toggler */}
              <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                <i className="fa-solid fa-circle-info"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
