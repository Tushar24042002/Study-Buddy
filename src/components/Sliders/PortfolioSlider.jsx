import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Carousel } from 'react-responsive-carousel';  

import Slider from "react-slick";

export default function PortfolioSlider() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        slickGoTo: true,
        lazyLoad: true,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "60px",
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "60px",
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "60px",
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container" id='portfolio-slider'>
            <div className="row">
                <h2>Our <em>Portfolio</em></h2>
                <div className="col-lg-12 px-0">
                    <Slider {...settings}>
                    <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/indimart.png" alt="Indimart By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://indimart.netlify.app/"> <div className="btn btn-dark-blue">Indimart Ecommerce</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/astropeople.png" alt="Astropeople By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://radionics.org.in/nfc/astrology/"> <div className="btn btn-dark-blue">Astropeople (Progress)</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/bearing-factory.png" alt="The Bearing Factory By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://7536ed.myshopify.com/"> <div className="btn btn-dark-blue">The Bearing Factory</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/lawyerpedia.png" alt="the Lawyer Pedia By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://thelawyerpedia.com"> <div className="btn btn-dark-blue">The Lawyer Pedia</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/kidoosleep.png" alt="KidooSleep By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://kidoosleep.com" target="_blank"> <div className="btn btn-dark-blue">Kidoosleep</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/python-page.png" alt="Python Course By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://radionics.org.in/nfc/python-page/"> <div className="btn btn-dark-blue">python Course</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/whatsappEcommerce.png" alt="bussiness Ecommerce By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://radionics.org.in/nfc/businessEcommerce"> <div className="btn btn-dark-blue">Bussiness Ecommerce</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/dahlieez.png" alt="Dahlieez By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://radionics.org.in/nfc/dahlieez-landing-page/"> <div className="btn btn-dark-blue">Dahlieez</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/dancing-cactus.png" alt="Dancing Cactus By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://radionics.org.in/nfc/kidsPurpose/"> <div className="btn btn-dark-blue">Dancing Cactus</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/flying-ball.png" alt="Flying Ball By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://radionics.org.in/nfc/productlanding/"> <div className="btn btn-dark-blue">Flying Ball</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-30s'>
                            <div className="card">
                                <div className="card-body">
                                    <div className="img-box">
                                        <img src="assets/images/portfolio/tuliphouse.png" alt="TulipHouse By tushar" width="100%" />
                                    </div>
                                    <div className="d-flex justify-content-around align-items-center sites mt-3">
                                        <a href="https://tuliphouse.com/"> <div className="btn btn-dark-blue">Tulip House</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </Slider>
                    <div className="btn btn-dark-yellow px-5">View All</div>
                </div>
            </div>
        </div>

    );
}