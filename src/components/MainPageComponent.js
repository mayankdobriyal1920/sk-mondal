import React from 'react';
import slider1 from "../assets/img/slider/slide-1.jpg";
import slider2 from "../assets/img/slider/slide-2.jpg";
import slider3 from "../assets/img/slider/slide-3.jpg";
import family1 from "../assets/img/family-1.jpg";
import family2 from "../assets/img/family-2.jpg";
import school1 from "../assets/img/school-1.jpg";
import school2 from "../assets/img/school-2.jpg";
import school3 from "../assets/img/school-3.jpg";
import school4 from "../assets/img/school-4.jpg";

import gallery1 from "../assets/img/gallery/gallery2.jpg";
import gallery2 from "../assets/img/gallery/gallery3.jpg";
import gallery3 from "../assets/img/gallery/gallery4.jpg";
import gallery4 from "../assets/img/gallery/gallery5.JPG";
import gallery5 from "../assets/img/gallery/gallery6.jpg";
import gallery6 from "../assets/img/gallery/gallery7.jpg";
import gallery8 from "../assets/img/gallery/gallery9.jpg";
import gallery9 from "../assets/img/gallery/gallery10.jpg";
import gallery10 from "../assets/img/gallery/gallery11.jpg";
import gallery11 from "../assets/img/gallery/gallery12.jpg";
import about from "../assets/img/about.jpg";
import story1 from "../assets/img/story-1.JPG";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ContactUsComponent from "./ContactUsComponent";

function MainPageComponent() {
    return (
     <>
         <section id="hero" className="d-flex justify-content-center align-items-center">
             <Carousel interval={3000} autoPlay={false} swipeable={true} showThumbs={false}>
                 <div>
                     <img src={slider1} />
                     <p className="legend">
                         <div className="legend-inner-container-2" data-aos="zoom-in" data-aos-delay="100">
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
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-6 order-1 order-lg-2">
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
                             <img src={story1} className="img-fluid"/>
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
         <section id="family" className="events">
             <div className="container" data-aos="fade-up">
                 <div className="row">
                     <div id="family" className="col-md-6 d-flex align-items-stretch">
                         <div className="card">
                             <div className="card-img">
                                 <img src={family1}/>
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title"><a>Family</a></h5>
                                 <p className="card-text">He was born as the seventh child out of the eight siblings to Late Shri Gopal Chandra Mondal and Late Shrimati Niyati Mondal. It needs to be highlighted here that despite being born in such a poor family which depended only on agricultural income, his father with his persistent determination and punctilious & conscientious attitude in life ensured that he gave the best to all his eight children and educated them. It proved that if you are endowed with a sharp intellect & analytical mind, then no one can stop you from pursuing your dreams.</p>
                             </div>
                         </div>
                     </div>
                     <div id="challenges" className="col-md-6 d-flex align-items-stretch">
                         <div className="card">
                             <div className="card-img">
                                 <img src={family2}/>
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title"><a>Challenges in the Family</a></h5>
                                 <p className="card-text">Shri Swapan Kumar Mondal though only 13 had realized it by now that he needed to take on the responsibility of the family. He then in a most methodical & perceptive manner took over one farmland from his father and did agriculture growing cucumber and green chilly, here he used his indomitable will, presence of mind and uncanny foresightedness and sold the product in the market, however due to his exact calculation of profit loss he found certain losses and soon realized that agriculture is not solution. He then ventured into jewelry work and because of his exemplary dedication and unparalleled sincerity resolved the financial crisis to some extent.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
         <section className="events">
             <div className="container" data-aos="fade-up">
                 <div className="row">
                     <div id="marriage"  className="col-md-6 d-flex align-items-stretch">
                         <div className="card">
                             <div className="card-img">
                                 <img src={school3}/>
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title"><a>Marriage & Family</a></h5>
                                 <p className="card-text">
                                     In 2006, he finally found the love of his life and got married to Mausumi Mondal, who was not only an MA in English but also a very good singer of Ravindra Sangeet, they both are blessed with one son Master Saunak Mondal.
                                 </p>
                             </div>
                         </div>
                     </div>
                     <div id="school" className="col-md-6 d-flex align-items-stretch">
                         <div className="card">
                             <div className="card-img">
                                 <img src={school1}/>
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title"><a>School Education</a></h5>
                                 <p className="card-text">
                                     The genesis of this honest & humble human started from a primary school in his village Narayanpur, which was without a building and the children had to get their own mats to sit. The scenario in the school was so distracting that the school teacher never thought that the students could do anything in their lives and entered their date of birth at his own peril; as a result all students of his batch had the same date of birth that is 05 Jan 1980. After completing his primary education, he then moved to Maharajpur School for his secondary education, it may be praiseworthy to note that due to his undeviating determination and tremendous sense of judgment, he balanced both sides that is work at the jewelry shop and also topped his class from 5th to 10th standard. Since he had worked with tremendous resolution & perseverance, he got admission in the renowned school Shyamsunderpur Patna High School wherein the National Prize winner Shri Nirmal Chandra Maity was the Head Teacher who had taken tremendous pains to take the school to a higher level in terms of education and facilities. Shri S K Mondal got highly motivated by him and he then decided to either do Engineering or join the Ramakrishna Mission as a saint.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
         <section className="events">
             <div className="container" data-aos="fade-up">
                 <div className="row">
                     <div id="influenced"  className="col-md-6 d-flex align-items-stretch">
                         <div className="card">
                             <div className="card-img">
                                 <img src={school2}/>
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title"><a>Influenced by Noteworthy Scholars</a></h5>
                                 <p className="card-text">
                                     Shri S K Mondal was highly influenced by two persons in his life who changed not only his approach but his attitude also, the first was Shri Saugata Samanta, a National Award Winner, who was 100% dedicated to only education, his principle was clear "Either lead or follow, otherwise get out from the way." Shri S K Mondal followed Shri Saugata Sasmal 100% and moved to his house since his place was very conducive for education.

                                     One fine morning another prodigious student, Shri Shubha Sankar Chowdhury, who too had secured extraordinary results, came to meet them from the Ramakrishna Mission, Rahara, Kolkata. In him Shri S K Mondal found another idol and followed him too. In 3 to 4 months Shri Shubha came from Kolkata to teach him only for one day and disseminated plethora of knowledge to Shri S K Mondal sometimes studying for 20 hours continuously with Subha. Shri S K Mondal then decided to crack the engineering exam and since he was endowed with a sharp intellect & analytical mind, he achieved the impossible. It may be pertinent to mention that securing a rank in the Joint Entrance was not easy, in the whole of West Bengal only 1500 Engineering seats were available at that time and there were 1400 Higher Secondary Schools in Bengal and from his school in the previous four years no one had cracked the exam but because of his natural inventive and creative abilities to solve unforeseen problems he achieved his goal. He then never looked back and at the same time he also qualified for the Narendrapur Ramakrishna Mission and Bengal's No.1 institute Presidency College for Graduation.
                                 </p>
                             </div>
                         </div>
                     </div>
                     <div id="college" className="col-md-6 d-flex align-items-stretch">
                         <div className="card">
                             <div className="card-img">
                                 <img src={school4}/>
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title"><a>College Education</a></h5>
                                 <p className="card-text">
                                     Shri S K Mondal started his engineering in 1998 and graduated from the Bengal Engineering College, Shibpur (Estd. 1856, 2nd oldest Engineering Institute of India after IIT Roorkee) in 2002. Simultaneously he started grooming young students from rural background and honed their careers; some became international figures while some became IIT professors. To enhance his own education Shri S K Mondal began his preparations for competitive exams and cleared all of them like GATE, IES, PSUs etc.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
         <section id="gallery" className="trainers section-bg">
             <div className="container" data-aos="fade-up">
                 <div className="section-title"><h2>GALLERY</h2></div>
                 <div className="row" data-aos="zoom-in" data-aos-delay="100">
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery1} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery2} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery3} className="img-fluid" alt=""/>
                         </div>
                     </div>
                 </div>
                 <div className="row" data-aos="zoom-in" data-aos-delay="100">
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery4} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery5} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery3} className="img-fluid" alt=""/>
                         </div>
                     </div>
                 </div>
                 <div className="row" data-aos="zoom-in" data-aos-delay="100">
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery8} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery6} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery9} className="img-fluid" alt=""/>
                         </div>
                     </div>
                 </div>
                 <div className="row" data-aos="zoom-in" data-aos-delay="100">
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery10} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery11} className="img-fluid" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                         <div className="">
                             <img src={gallery5} className="img-fluid" alt=""/>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
         <ContactUsComponent/>
     </>
    );
}

export default MainPageComponent;
