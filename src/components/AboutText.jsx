import React from 'react';
import PortfolioSlider from './Sliders/PortfolioSlider';
import Skillstab from './Tabs/Skillstab';

export default function AboutText() {
  return (
    <div>
           <div class="about__area about__area_one p-relative pt---100 pb---120" id="aboutAuthor">
                <div class="container pt-60">
                    <div class="row">
                        <div class="col-lg-6 mb-2">
                        <Skillstab/>
                        </div>
                        <div class="col-lg-6 mb-2">
                            <div class="">
                                <h2 class="about__title">About Us</h2>
                                <p class="about__paragraph">
                                    Hello! My name is Tushar Gupta & I enjoy creating things that live on the Internet. I'm a passionate Frontend Developer, with Strong Technical Skills, good attention to detail & the ability to write efficient code.
                                </p>
                                <p class="about__paragraph">
                                    Fast forwarding to today, I am working as a Frontend Developer at Radionics Technology. As I begin the next chapter of my Career, I am very eager to Learn, Grow and Contribute to my new role. And I want to Become a Full Stack Developer (MERN Stack).
                                </p>
                               
                            </div>
                           
                        </div>
                        <div className="col-lg-12">
                            <PortfolioSlider/>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}
