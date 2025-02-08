import React from 'react'
import { Link } from 'react-router-dom';
import Register from '../Home/Register';

const title = "Most Popular Post";

const postList =
    [{
        id: 1, imgUrl: './assets/images/blog/10.jpg', imgAlt: 'lorem',
        title: 'lorem adipisicing elit. In aspernatur', date: 'Jun 04,2024',
    },
    {
        id: 2, imgUrl: './assets/images/blog/11.jpg', imgAlt: 'lorem',
        title: 'lorem adipisicing elit. In aspernatur', date: 'Jun 05,2024',
    },
    {
        id: 3, imgUrl: './assets/images/blog/12.jpg', imgAlt: 'lorem',
        title: 'lorem adipisicing elit. In aspernatur', date: 'Jun 06,2024',
    },
    {
        id: 4, imgUrl: './assets/images/blog/09.jpg', imgAlt: 'lorem',
        title: 'lorem adipisicing elit. In aspernatur', date: 'Jun 07,2024',
    },]


const PopularPost = () => {
    return (
        <div className='widget widget-post'>
            <div className="widget-header">
                <h5 className='title'>{title}</h5>
            </div>

            <ul className="widget-wrapper">
                {
                    postList.map((blog, i) => (
                        <li key={i} className='d-flex flex-wrap justify-content-between'>
                            <div className='post-thumb'>
                                <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                            </div>
                            <div className="post-content">
                                <Link to={`blog/${blog.id}`}><span>{blog.title}</span></Link>
                                <span className='text-danger'>{blog.date}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
                <div className="section-wrapper pt-5">
                    <h3 className='mt-5'>Subscribe To Our Newsletter</h3>
                    <form className='register-form'>
                        <input type="email" name='email' placeholder='email' className='reg-input' />
                        <button type='submit' className='mt-2 text-white lab-btn'>
                            subscribe
                            <Link to={`/Register/${Register.id}`}></Link>
                        </button>
                    </form>
                </div>
            </div>

    )
}

export default PopularPost