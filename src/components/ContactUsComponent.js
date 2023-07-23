import React from "react";

export default function ContactUsComponent(){
    return (
        <section id="contact" className="contact">
            <div data-aos="fade-up">
                <iframe style={{"border":0, "width": "100%", "height": "350px"}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7010.279599864667!2d77.24395093488769!3d28.535517400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d63a400001%3A0x4fd65382ea6dcf58!2sChittaranjan%20Park%2CDelhi!5e0!3m2!1sen!2sin!4v1614355089799!5m2!1sen!2sin"
                        frameBorder="0" allowFullScreen/>
            </div>

            <div className="container" data-aos="fade-up">

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"/>
                                <h4>Location:</h4>
                                <p>K-2131 Ground Floor<br/>, Chittaranjan Park, South Delhi, Delhi - 110019</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@skmondal.com<br/>contact@skmondal.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 9582314327</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form action={"#"} method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                           placeholder="Your Name" required/>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email"
                                           placeholder="Your Email" required/>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject"
                                       placeholder="Subject" required/>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                          required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}