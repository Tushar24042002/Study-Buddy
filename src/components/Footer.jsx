import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
function Footer() {
    const [state, handleSubmit] = useForm("xlevzplg");
    if (state.succeeded) {
        return (
            <div className="col-lg-6 mx-auto mt-5">
                <div className="align-items-center">
                    <div text-center><p>Thanks for Subscribe Our Newsletter!</p>
                        <a exact href="/"><div className="btn btn-primary">Back to Home page</div></a>

                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <footer id="react-footer" class="react-footer home-four">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-1">
                                    <div className="footer-logo white">
                                        <a href="/" class="logo-text"> <img src="./assets/images/studybuddylogo.png"
                                            alt="logo" /></a>
                                    </div>
                                    <h5 class="footer-subtitle">We offer something special, practical, and, most importantly, enjoyable. To help every student be independent in practising and finishing their homework, we provide them with a tool that will instantly resolve any questions they may have.</h5>
                                    <ul class="footer-address">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            class="feather feather-phone">
                                            <path
                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                            </path>
                                        </svg><a href="tel:918882060228"> +91 8882060228</a></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            class="feather feather-mail">
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                            </path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg><a href="mailto:tushargupta24042002@gmail.com"> studybuddy@gmail.com </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-2">
                                    <h3 class="footer-title">About Us</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/py-ques">Previous Year Papers</a></li>
                                            <li><a href="/quespaper">Sample Paper</a></li>
                                            <li><a href="/syllabus">Syllabus</a></li>
                                            <li><a href="/notes">Notes</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-3">
                                    <h3 class="footer-title">Useful Links</h3>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><a href="/cbse-date-sheet">CBSE Date Sheet</a></li>
                                            <li><a href="/courses-10">Sample Paper 10th</a></li>
                                            <li><a href="courses-12">Sample Paper 12th</a></li>
                                            <li><a href="py-12">Previous Papers 12th</a></li>
                                            <li><a href="py-10">Previous Papers 10th</a></li>
                                            <li><a href="/portfolio-page">Tushar's Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget-4">
                                    <h3 class="footer-title">Newsletter</h3>
                                    <div className="footer3__form">
                                        <p>Subscribe The Newsletter For Better Amazing Courses</p>
                                        <form onSubmit={handleSubmit}>
                                            <input type="email" id='email' name='email' placeholder="Enter your email" />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                            <button type="submit" disabled={state.submitting} class="footer3__form-1">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </form>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="react-copy-left">© 2022 <a href="#">StudyBuddy.</a> All Rights Reserved</div>
                        <div className="react-copy-right">
                            <ul class="social-links">
                                <li class="follow">Follow us</li>
                                <li><a href="https://www.facebook.com/sahilgupta3756"><span aria-hidden="true" class="fa fa-brands fa-facebook-f"></span></a></li>
                                <li><a href="https://www.instagram.com/tushar_gupta2404/"><span aria-hidden="true" class="fa fa-brands fa-instagram"></span></a></li>
                                <li><a href="https://www.linkedin.com/in/tushar-gupta-778375227"><span aria-hidden="true" class="fa fa-brands fa-linkedin-in"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="backscrollUp" class="home">
                <span aria-hidden="true" class="arrow_carrot-up"></span>
            </div>
        </div>
    )
}
export default Footer;