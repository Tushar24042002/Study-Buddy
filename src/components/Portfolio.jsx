import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import AboutText from './AboutText'

import PortfolioSlider from './Sliders/PortfolioSlider'

const Portfolio = () => {
    return (
        <div className='portfolio-page'>
             <section id="home">
            <div class="section_2 pb-5 h-cover">
                <div class="container h-100 pt-90 h-cover">
                    <div class="row d-flex">
                        <div class="col-lg-6 h-cover my-auto">
                            <div class="profile-info">
                                <div class="profile-inner text-center">
                                    <div class="img-radius">
                                        <div class="img-box mt-auto wow
                                        animate__animated
                                        animate__fadeInRight">
                                            <img src="assets/images/portfolio/tushar2.jpg" alt=" Tushar profile"
                                                width="100%" />
                                        </div>
                                    </div>
                                    <div class="profile-name">
                                        <h1>Tushar</h1>
                                    </div>
                                    <div class="profle-social">
                                        <div class="social-media">
                                            <ul>
                                                <li><a href="https://www.instagram.com/tushar_gupta2404/"><i class="fa fa-brands fa-instagram"></i></a></li>
                                                <li><a href="https://www.facebook.com/sahilgupta3756"><i class="fa fa-brands
                                                        fa-facebook"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/tushar-gupta-778375227"><i class="fa fa-brands fa-linkedin-in"></i></a></li>
                                                <li><a href="https://wa.me/918882060228/?text=I'm%20Tushar.%20 How%20 Can %20I%20help%20you?"><i class="fa
                                                        fa-brands fa-whatsapp"></i></a></li>
                                                <li><a href="tel:+91 8882060228"><i class="fa
                                                        fa-phone"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 my-auto">
                            <div class="profile-details pt-5">
                                <div class="profile-details-inner">
                                    <div class="section-title">
                                        <h3>Profile</h3>
                                    </div>
                                    <div class="profile-content
                                    table-responsive">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><i class="fa
                                                        fa-solid
                                                        fa-user"></i></td>
                                                    <td><span>Name</span></td>
                                                    <td> <b>:</b> </td>
                                                    <td>Tushar</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa
                                                        fa-solid
                                                        fa-calendar"></i></td>
                                                    <td><span>Date if Birth</span>
                                                    </td>
                                                    <td> <b>:</b> </td>
                                                    <td>April 24, 2002</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa
                                                        fa-solid
                                                        fa-location-arrow"></i></td>
                                                    <td><span>Address</span>
                                                    </td>
                                                    <td> <b>:</b> </td>
                                                    <td>H-134 Aman vihar
                                                        kirari</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa
                                                        fa-solid
                                                        fa-phone"></i></td>
                                                    <td><span>Phone</span></td>
                                                    <td> <b>:</b> </td>
                                                    <td><a href="tel:+91 8882060228">+91 8882060228</a> </td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa
                                                        fa-solid
                                                        fa-envelope"></i></td>
                                                    <td><span>Email</span></td>
                                                    <td> <b>:</b> </td>
                                                    <td><a href="mailto:sahilgupta24042002@gmail.com">sahilgupta24042002@gmail.com</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="btn-list">
                                        <a href="assets/images/portfolio/resume.pdf" target="_blank" class="btn port-btn mb-3">Download
                                            CV</a>
                                        <a href="https://wa.me/918882060228/?text=I'm%20Tushar.%20 How%20 Can %20I%20help%20you?" class="btn port-btn mb-3">Hire
                                            Me</a>
                                        <a href="http://indimart.netlify.app" class="btn port-btn mb-3">Recent
                                            Work</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

        <AboutText />

        </div>
    )
}

export default Portfolio