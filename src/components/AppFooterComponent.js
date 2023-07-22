import React from "react";
import { Link } from "react-scroll";

export default function AppFooterComponent(){
    return (
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>CONTACT ME</h3>
                            <p>
                                K-2131 Ground Floor Chittaranjan Park, <br/>
                                South Delhi<br/>
                                Delhi - 110019 <br/><br/>
                                <strong>Phone:</strong> +91 9582314327<br/>
                                <strong>Email:</strong> mswapankumar385@gmail.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Achievements</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Accomplishments</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Family Life</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">School Education</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Find Me</h4>
                            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7010.279599864667!2d77.24395093488769!3d28.535517400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d63a400001%3A0x4fd65382ea6dcf58!2sChittaranjan%20Park%2CDelhi!5e0!3m2!1sen!2sin!4v1614355089799!5m2!1sen!2sin"}/>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Youtube Video</h4>
                            <iframe src={"https://www.youtube.com/embed/lgaTMVFyDNg"}/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>S.K. Mondal</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">Mayank Developer</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/SKMondalIES" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.youtube.com/channel/UCLOw1Lu64HPzgyjTbZgBfVA" className="instagram"><i className="bx bxl-youtube"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
    )
}