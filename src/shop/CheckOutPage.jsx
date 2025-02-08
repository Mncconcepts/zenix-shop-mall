import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../components/Modal.css"

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setactiveTab] = useState("visa");

    //handle Tab change
    const handleTabChange = (tabId) => {
        setactiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(true);



    return (
        <>
            <div className='modalCard'>
                <Button variant="primary" onClick={handleShow}>
                    Checkout Now
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    animation={false}
                    className='modal fade'
                    centered
                    backdrop="static"
                    keyboard={false}
                >
                    <div className='modal-dialog'>
                        <h3 className='px-3 mb-3 mt-3 text-center'>Select Your <br /> Payment Method</h3>
                        <div className='modal-content mb-4'>
                            <div className='modal-body mb-4'>
                                <div className="tabs mt-3">
                                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                        <li className='nav-item' role='presentation'>
                                            <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                                id='visa-tab'
                                                data-toggle="tab"
                                                role='tab'
                                                aria-controls='visa'
                                                aria-selected={activeTab === "visa"}
                                                onClick={() => handleTabChange("visa")}
                                                href="#visa"><img src="./assets/images/payment/pyvisa.png" className='' alt="" width="80" /></a>
                                        </li>
                                        <li className='nav-item' role='presentation'>
                                            <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                                id='paypal-tab'
                                                data-toggle="tab"
                                                role='tab'
                                                aria-controls='paypal'
                                                aria-selected={activeTab === "paypal"}
                                                onClick={() => handleTabChange("paypal")}
                                                href="#paypal"><img src="./assets/images/payment/paypalvisa.png" className='' alt="" width="80" /></a>
                                        </li>
                                    </ul>

                                    {/* contents */}
                                    <div className='tab-content' id='my-TabContent'>
                                        {/* visa content */}
                                        <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                            id='visa'
                                            role='tabpanel'
                                            aria-labelledby='visa-tab'
                                        >
                                            {/* visa tab content */}
                                            <div className='mt-4 mx-4'>
                                                <div className='text-center'>
                                                    <h5>Credit Card Info</h5>
                                                </div>
                                                <div className='form mt-3'>
                                                    <div className='inputbox mb-2'>
                                                        {/* <span>Card Holder Name</span> */}
                                                        <input type="text" name='name' id='name' className='form-control' required />
                                                        <span>Card Holder Name</span>
                                                    </div>
                                                    <div className='inputbox mb-2'>
                                                        {/* <span className=''>Card Number</span><i className="fa-solid fa-eye-slash"></i> */}
                                                        <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                        <span className=''>Card Number</span><i className="fa-solid fa-eye-slash"></i>
                                                    </div>
                                                    <div className='d-flex flex-row'>
                                                        <div className='inputbox mb-2'>
                                                            {/* <span className=''>Expiry Date</span> */}
                                                            <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                            <span className=''>Expiry Date</span>
                                                        </div>
                                                        <div className='inputbox ms-1'>
                                                            {/* <span>CVV</span> */}
                                                            <input type="text" name='name' id='name' className='form-control' required />
                                                            <span>CVV</span>
                                                        </div>
                                                    </div>
                                                    <div className='px-5 pay pt-2 pb-2 text-center pay'>
                                                        <button className='btn btn-primary btn-block '>Pay now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* paypal content */}
                                        <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                            id='paypal'
                                            role='tabpanel'
                                            aria-labelledby='paypal-tab'
                                        >
                                               <div className='mt-4 mx-4'>
                                                <div className='text-center'>
                                                    <h5>Paypal Account Info</h5>
                                                </div>
                                                <div className='form mt-3'>
                                                    <div className='inputbox mb-2'>
                                                        {/* <span>Card Holder Name</span> */}
                                                        <input type="text" name='name' id='name' className='form-control' required />
                                                        <span>Enter Your Email</span>
                                                    </div>
                                                    <div className='inputbox mb-2'>
                                                        {/* <span className=''>Card Number</span><i className="fa-solid fa-eye-slash"></i> */}
                                                        <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                        <span className=''>Your Full name</span>
                                                    </div>
                                                    <div className='d-flex flex-row'>
                                                        <div className='inputbox mb-2'>
                                                            {/* <span className=''>Expiry Date</span> */}
                                                            <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                            <span className=''>Your Info</span>
                                                        </div>
                                                    </div>
                                                    <div className='px-5 pay pt-2 pb-2 text-center'>
                                                        <button className='btn btn-danger btn-block text-center'>Pay Now</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* payment disclaimer */}
                                    <p className=" text-center px-1 p-Disclaimer align-item-center"><em>Payment Disclaimer: on no event shall payment by owner for any material or services be refunded. </em></p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>

            </div>
        </>
    )
}

export default CheckOutPage