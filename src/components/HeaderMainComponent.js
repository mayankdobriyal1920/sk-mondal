import React from "react";
import { Link } from "react-scroll";

export default function HeaderMainComponent(){
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>
                {/*<a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="projects">
                                PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="blog">
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}