import React from 'react';
import './assets/css/style.css';
import './assets/css/template-style.css';
import HeaderMainComponent from "./components/HeaderMainComponent";
import slider1 from "./assets/img/slider/slide-1.jpg";
import slider2 from "./assets/img/slider/slide-2.jpg";
import slider3 from "./assets/img/slider/slide-3.jpg";
import about from "./assets/img/about.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
      <div className="App">
        <HeaderMainComponent/>
          <section id="hero" className="d-flex justify-content-center align-items-center">
              <Carousel interval={3000} autoPlay={false} swipeable={true} showThumbs={false}>
                  <div>
                      <img src={slider1} />
                      <p className="legend">
                          <div className="legend-inner-container" data-aos="zoom-in" data-aos-delay="100">
                              <h1>My Achievements</h1>
                              <h2>Worked at NTPC and attended various training programs</h2>
                              <h2>on hydro power plant in different Hydro power projects and NPTI.</h2>
                              <a href="#" className="btn-get-started">READ MORE</a>
                          </div>
                      </p>
                  </div>
                  <div>
                      <img src={slider2} />
                      <p className="legend">
                          <div className="legend-inner-container" data-aos="zoom-in" data-aos-delay="100">
                              <h1>Education</h1>
                              <h2>Shri S K Mondal started his engineering in 1998 and</h2>
                              <h2>graduated from the Bengal Engineering College, Shibpur...</h2>
                              <a href="#" className="btn-get-started">READ MORE</a>
                          </div>
                      </p>
                  </div>
                  <div>
                      <img src={slider3} />
                      <p className="legend">
                          <div className="legend-inner-container-2" data-aos="zoom-in" data-aos-delay="100">
                              <h1>Family Life</h1>
                              <h2>He was born as the seventh child out of the eight siblings</h2>
                              <h2>to Late Shri Gopal Chandra Mondal and Late Shrimati Niyati Mondal.</h2>
                              <a href="#" className="btn-get-started">READ MORE</a>
                          </div>
                      </p>
                  </div>
              </Carousel>
          </section>
          <main id="main">
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={about} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>MY HUMBLE BEGINNING.</h3>
                            <p>
                                <b>Shri Swapan Kumar Mondal</b>, famously known as S K Mondal (Ex IES Officer) was born on 10th Feb 1978 in a very remote village, Narayan Pur, of Paschim Medinipur district of West Bengal, India, it may be pertinent to mention that despite coming from such a small village in India he has made a mark for himself across the country today.
                            </p>
                            <p>
                                He grew up in a village which remains flooded and inundated for at least one third of the year, and throughout this time the village remains out of communication with the rest of the country and one can reach there only by a boat. In addition to floods another major challenge he faced during his childhood was draught, something which is not experienced by everyone, his main family income was from agriculture so it’s not only admirable but appreciable also that he rose from the dust and shines like a star today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
          </main>
          <section id="story" className="counts section-bg">
              <div className="container">
                  <div className="section-title">
                      <h2>MY STORY</h2>
                  </div>
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                      <div className="col-lg-12 col-md-12 d-flex align-items-stretch">
                          <div className="course-item">
                              <img src={slider1} className="img-fluid"/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="achievements" className="courses">
              <div className="container">
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                      <div className="col-lg-12 col-md-12 d-flex align-items-stretch">
                          <div className="course-item">
                              <div className="course-content">
                                  <h2>Achievements</h2>
                                  <p>
                                      Worked at NTPC and attended various training programs on hydro power plant in different Hydro power projects and NPTI. His two major contributions were the Hydro Power Plant familiarization manual for future engineers who would be posted in NTPC and in addition contribute to the frame Policy of CEA (Central Electricity Authority) to prevent hydro plant flooding.
                                  </p>
                                  <p>
                                      After qualifying ESE-2005 exam and again ESE-2007 exam he joined the Indian Railways under the Ministry of Railways as ADME, however he was not contended with his job profile and his dream to revolutionize the education system of engineering students across the country was somewhere left untouched. In order to fulfill this dream he decided to move further and do something for the youth and budding engineers of the country.
                                  </p>
                                  <p>
                                      He then joined the IES Academy and was appointed as a Director. Also worked as managing editor of "Engineers Today" magazine.
                                  </p>
                                  <p>
                                      However, that did not deter him and he joined as a faculty of “MADE EASY” a renowned institute which is given the title of “India’s best institute of IES, GATE and PSUs”, wherein he is mostly known for his knowledge and expertise in Production Engineering. In “MADE EASY”, he was the first teacher who used audio visual system to make the subjects interesting and also through his various innovative and imaginative ideas reduced the fatigue of teachers due to long teaching hours. In the subject of Production Engineering he added many videos of manufacturing processes which was the first in the country. Even before than IITs; and no doubt he is known for the JUGAD he made to learn this Production Engineering subject in entertaining and interesting way.
                                  </p>
                                  <p>
                                      He is not only known for Production Engineering, but because of his wit and unique innovative style of teaching he is a known faculty of Strength of Materials and also of difficult subject Robotics which was newly introduced in 2017 for the ESE exam.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="accomplishments" className="courses about">
              <div className="container">
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                      <div className="col-lg-12 col-md-12 d-flex align-items-stretch">
                          <div className="course-item">
                              <div className="course-content content">
                                  <h2>Accomplishments</h2>
                                  <ul>
                                      <li><i className="bi bi-check-circle"></i> Selected in IES (Indian Engineering Service) conducted by UPSC, and got appointed in Ministry of Railway.</li>
                                      <li><i className="bi bi-check-circle"></i> Ex. Director of IES Academy, New Delhi.</li>
                                      <li><i className="bi bi-check-circle"></i> Qualified GATE with 99.96 Percentile.</li>
                                      <li><i className="bi bi-check-circle"></i> Appointed in NTPC Corporate Center and served for 5 years.</li>
                                      <li><i className="bi bi-check-circle"></i> Made Hydro Power Familiarization (Available in NTPC Ltd. Intranet).</li>
                                      <li><i className="bi bi-check-circle"></i> Selected as Scientist in BARC (Bhabha Atomic Research Centre).</li>
                                      <li><i className="bi bi-check-circle"></i> Selected for National Scholarship, recipient of Alumni Scholarship, Vivekananda Youth Scholarship, Scholarship from Sarada Kalyan Bhandar.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="inspirational" className="courses about">
              <div className="container">
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                      <div className="col-lg-12 col-md-12 d-flex align-items-stretch">
                          <div className="course-item">
                              <div className="course-content content">
                                  <h2>Inspirational Leader</h2>
                                  <p>
                                      It may be noteworthy to mention that many engineering students have problems regarding employment; however his attitude of Live & Let Live with a smile has changed the lives of millions. His ability to make the class full of energy and making the curriculum simple by his self made jingles has made it a rare feat that almost all government organizations have his students today.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="philosopher" className="courses about">
              <div className="container">
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                      <div className="col-lg-12 col-md-12 d-flex align-items-stretch">
                          <div className="course-item">
                              <div className="course-content content">
                                  <h2>Philosopher & Guide</h2>
                                  <p>
                                      As a service to the nation he has ensured that all latest editions of study material are continuously updated and available to the serious and dedicated aspirants. He has 15 online publications on various Mechanical Engineering subjects and students can access these study material free of cost from website by searching “S K Mondal IES” in Google. He has around 75000 followers and 5000 friends connected with him on his Facebook profile www.facebook.com/SKMondalIES for continuous guidance and support both pre exam and post exam.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="conclusion" className="courses about">
              <div className="container">
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                      <div className="col-lg-12 col-md-12 d-flex align-items-stretch">
                          <div className="course-item">
                              <div className="course-content content">
                                  <h2>Conclusion</h2>
                                  <p>
                                      Since Shri S K Mondal grew up in a poor family and had to struggle for everything in life, he now with his creative abilities works with a penchant for exactitude to repay the almighty in whatever manner he can. Young budding engineers who wish to share his expertise and knowledge can either meet him personally by taking an prior appointment by contacting him at +918888888888 or log on to his website www.ooooooo.ooooo.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}

export default App;
