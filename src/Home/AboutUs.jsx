import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Why You Should Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app and learn all about business what you want. Just download and install start to learn";
const btnText = "Apply Now";

const countList = [
  {
    iconName: 'fa-solid fa-user-plus',
    count: '15000',
    text: 'Marchant Enrolled',
  },
  {
    iconName: 'fa-solid fa-user-graduate',
    count: '25',
    text: 'Certified Courses',
  },
  {
    iconName: 'fa-solid fa-bell',
    count: '1000',
    text: 'Rewards and GiftCards',
  },
]

const AboutUs = () => {
  return <div className='instructor-section style-2 padding-tb section-bg-ash'>
    <div className="container">
      <div className="section-wrapper">
        <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            {
              countList.map((val, i) => (
                <div key={i} className='count-item'>
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className='count-content'>
                      <h2>
                        <span className='count'><CountUp end={val.count} /></span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="col">
            <div className="instructor-content">
              <p className='subtitle'>{subTitle}</p>
              <h2 className='title'>{title}</h2>
              <p className=''>{desc}</p>
              <Link to="/sign-up" className='lab-btn w-50'>{btnText}</Link>
            </div>
          </div>
          <div className='col'>
            <div className="instructor-thumb">
              <img src="public/assets/images/about/01.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

};

export default AboutUs;
