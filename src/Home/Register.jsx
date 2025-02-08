import React from 'react';

const subTitle = "Save The Day";
const title = (
    <h3 className="title">Join us now and send us messages for your orders and preferred products</h3>
);

const desc = "Limited Time Offer Hurry Now";

const Register = () => {
    return (
        <section className="register-section padding-tb pb-0">
            <div className="container">
                <div className="row g-4 row-cols-1 row-cols-md-2 align-items-center">
                    {/* Left Section */}
                    <div className="col">
                        <div data-aos="fade-right" className="section-header">
                            <span className="subtitle pt-5">{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                            <a href="/sign-up" className="lab-btn">
                                <span className="text-white">Join Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col">
                        <div
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            className="section-wrapper"
                        >
                            <h2>Register Now</h2>
                            <form className="register-form">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Username"
                                    className="reg-input"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="reg-input"
                                />
                                <input
                                    type="number"
                                    name="number"
                                    placeholder="Phone"
                                    className="reg-input"
                                />
                                <a href="/contact" className="lab-btn">
                                    <span className="text-white">Register</span>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
