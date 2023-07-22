import React from "react";
import { Link } from "react-scroll";

export default function HeaderMainComponent(){
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a>S.K.MONDAL</a></h1>
                {/*<a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="hero">
                                HOME
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link activeClass="active" smooth spy to="about">
                                <span>ABOUT ME</span>
                                <i className="bi bi-chevron-down"/>
                            </Link>
                            <ul>
                                <Link activeClass="active" smooth spy to="story">
                                    Blessing for the World
                                </Link>
                                <Link activeClass="active" smooth spy to="achievements">
                                    Achievements
                                </Link>
                                <Link activeClass="active" smooth spy to="accomplishments">
                                    Accomplishments
                                </Link>
                                <Link activeClass="active" smooth spy to="inspirational">
                                    Inspirational Leader
                                </Link>
                                <Link activeClass="active" smooth spy to="philosopher">
                                    Philosopher & Guide
                                </Link>
                                <Link activeClass="active" smooth spy to="conclusion">
                                    Conclusion
                                </Link>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link activeClass="active" smooth spy to="family">
                                <span>FAMILY STORY</span>
                                <i className="bi bi-chevron-down"/>
                            </Link>
                            <ul>
                                <Link activeClass="active" smooth spy to="family">
                                    Family Life
                                </Link>
                                <Link activeClass="active" smooth spy to="challenges">
                                    Challenges in the Family
                                </Link>
                                <Link activeClass="active" smooth spy to="marriage">
                                    Marriage Life
                                </Link>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link activeClass="active" smooth spy to="school">
                                <span>EDUCATION</span>
                                <i className="bi bi-chevron-down"/>
                            </Link>
                            <ul>
                                <Link activeClass="active" smooth spy to="school">
                                    School Education
                                </Link>
                                <Link activeClass="active" smooth spy to="influenced">
                                    Influenced by Noteworthy Scholars
                                </Link>
                                <Link activeClass="active" smooth spy to="college">
                                    College Education
                                </Link>
                            </ul>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="gallery">
                                GALLERY
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"/>
                </nav>
            </div>
        </header>
    )
}