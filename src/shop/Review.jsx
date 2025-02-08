import React, { useState } from 'react'
import Ratting from '../components/Ratting';
const reviwtitle = "Add A Review";

let ReviewList = [];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>


            {/* desc and review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        {/* <img src={review.imgUrl} alt="" /> */}
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                            </div>
                                        </div>
                                        <div className='entry-content'></div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* review ffield */}
                    <div className='client-review'>
                        <div className="review-form">
                            <div className="review-title">
                                <h4 className='pt-3'>{reviwtitle}</h4>
                            </div>

                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' id='name' placeholder='Full Name' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name='email' id='name' placeholder='Your Email' />
                                </div>
                                <div className="col-md-4 col-12">
                                        <div className='rating'>
                                            <span className='me-2 mt-2'>Your Ratings </span>
                                            <Ratting />
                                        </div>
                                </div>
                                <div className="col-md-12 col-12 mt-3">
                                    <textarea name="message" id="message" rows="8" placeholder='Type Your Message'></textarea>
                                </div>
                                <div className="col-12">
                                    <button type='submit' className='lab-btn'>
                                        <span className='text-white'>Submit Reviews</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )

}

export default Review