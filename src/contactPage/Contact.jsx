import React from 'react';
import PageHeader from '../components/PageHeader';
import GoogleMap from '../components/GoogleMap';

// Import Images
import icon01 from '../assets/images/icon/01.png';
import icon02 from '../assets/images/icon/02.png';
import icon03 from '../assets/images/icon/03.png';
import icon04 from '../assets/images/icon/04.png';

const subTitle = "Get in touch with us";
const title = "We're Available & Eager To Hear From You!";
const conSubTitle = "Contact Us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send Us Messages";

// Contact List Data
const contactList = [
  {
    imgUrl: icon01,
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "1201 Park Street, Fifth Avenue",
  },
  {
    imgUrl: icon02,
    imgAlt: "contact icon",
    title: "Phone Number",
    desc: "+22698 745 632, 02 982 745",
  },
  {
    imgUrl: icon03,
    imgAlt: "contact icon",
    title: "Send Email",
    desc: "admin@Zenixstore.com",
  },
  {
    imgUrl: icon04,
    imgAlt: "contact icon",
    title: "Our Website",
    desc: "www.Zenixstore.com",
  },
];

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />

      {/* Map and Address Section */}
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h3 className="title">{title}</h3>
            <hr />
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              {/* Contact Details */}
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div key={i} className="contact-item">
                      <div className="contact-thumb">
                        <img src={val.imgUrl} alt={val.imgAlt} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h3 className="title">{conTitle}</h3>
          </div>
          <div className="section-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  rows="6"
                />
              </div>
              <div className="form-group w-100 text-center">
                <button type="submit" className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
