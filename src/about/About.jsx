import React from 'react'
import PageHeader from '../components/PageHeader';


const subTitle = "About The Brand Zenix Store";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "10+";
const expareance = "Years Of Experiences";

const aboutList = [
    {
        imgUrl: './assets/images/about/icon/01.jpg',
        imgAlt: 'about icon zenixstore',
        title: 'Skilled Instructors',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: './assets/images/about/icon/02.jpg',
        imgAlt: 'about icon zenixstore',
        title: 'Get Certificate',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: './assets/images/about/icon/03.jpg',
        imgAlt: 'about icon zenixstore',
        title: 'Online Classes',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]


const About = () => {
    return (
        <div>
            <PageHeader title={"About Brand"} curPage={"About"} />
            <div className="about-section style-3 pt-5 section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img className='' src="./assets/images/bg-img/21.jpg" alt="" />
                                </div>
                                <div className='abs-thumb'>
                                    <img src="./assets/images/about/02.jpg" alt="" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd col */}
                        <div className="col">
                            <div className="about-right">
                                <div data-aos='fade-right' className="section-header">
                                    <h6 className='subtitle pt-5'>{subTitle}</h6>
                                    <h3 className='title'>{title}</h3>
                                    <span className=''>{desc}</span>
                                </div>

                                <div data-aos='fade-right' className="section-wrapper">
                                    <ul className="lab-ul ms-4">
                                        {
                                            aboutList.map((val, i) => (
                                                <li key={i}>
                                                    <div className="sr-left">
                                                        <img src={val.imgUrl} alt="" />
                                                    </div>
                                                    <div className="sr-right">
                                                        <h5>{val.title}</h5>
                                                        <span>{val.desc}</span>
                                                        <hr />
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About