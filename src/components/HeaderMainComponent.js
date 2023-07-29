import React from "react";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";

export default function HeaderMainComponent({openHeadingTabInModalPopup}){
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><NavLink to="/">S.K.MONDAL</NavLink></h1>
                {/*<a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="hero">
                                HOME
                            </Link>
                        </li>
                        <li className="dropdown">
                            <a className={"click_a_tag_header"}>
                                <span>ABOUT ME</span>
                                <i className="bi bi-chevron-down"/>
                            </a>
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
                            <a className={"click_a_tag_header"}>
                                <span>FAMILY STORY</span>
                                <i className="bi bi-chevron-down"/>
                            </a>
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
                            <a className={"click_a_tag_header"}>
                                <span>EDUCATION</span>
                                <i className="bi bi-chevron-down"/>
                            </a>
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
                            <a onClick={()=>openHeadingTabInModalPopup(1)}>
                                STUDY MATERIALS
                            </a>
                        </li>
                        <li className="dropdown">
                            <a className={"click_a_tag_header"}>
                                CLASS LINK
                            </a>
                            <ul>
                                <a onClick={()=>openHeadingTabInModalPopup(2,1)}>
                                    Plus and iconic Class
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,2)}>
                                    FAA, Special Class
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,3)}>
                                    XE:Gate with Mondal
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,4)}>
                                    SSC JE, AE, PSUs
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,5)}>
                                    Mains SSC DRDO ALL
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,6)}>
                                    Virtual Calculator
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,7)}>
                                    Post Gate Guidance
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,8)}>
                                    Bhramastra Batch
                                </a>
                                <a onClick={()=>openHeadingTabInModalPopup(2,9)}>
                                    Quick Revision Course
                                </a>
                            </ul>
                        </li>
                        <li>
                            <a onClick={()=>openHeadingTabInModalPopup(3)}>
                                TESTS
                            </a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"/>
                </nav>
            </div>
        </header>
    )
}