import React from 'react';

const btnText = "Sign Up For Free";
const title = "Shop Anytime, Anywhere";
const desc = "Shop on any device with our app & learn all time what you want, download our app install it to get started";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div data-aos="fade-right" className="container">
        <div className="section-header text-center">
          <a href="/sign-up" className="lab-btn mb-4">{btnText}</a>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div data-aos="fade-right" className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img src="./assets/images/app/01.jpg" alt="App Preview 1" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./assets/images/app/02.jpg" alt="App Preview 2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
