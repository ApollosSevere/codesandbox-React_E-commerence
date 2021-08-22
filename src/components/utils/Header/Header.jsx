import{ React, useState} from 'react'
import {Link} from 'react-router-dom' 

function Header() {
    
    window.addEventListener('scroll', () => {
        let header = document.getElementById("header")
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    
    return (
        // <div className="headWrapper">
             <div id="header" className="header d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="left">
                        <div className="logo">
                            <Link to="/"><img src="/images/logo.png" alt="" /></Link>
                        </div>
                    </div>

                    <div className="right">
                        <div className="navbar">
                            <ul class="nav">
                                <li class="dropdown active">
                                    <a href="#.">Home</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="index.html">Index Default</a></li>
                                        <li><a href="index-1.html">Index 2</a></li>
                                        <li><a href="index-2.html">Index 3</a></li>
                                        <li><a href="index-header-1.html">Index Header 1</a></li>
                                        <li><a href="index-header-2.html">Index Header 2</a></li>
                                        <li><a href="index-header-3.html">Index Header 3</a></li>
                                        <li><a href="index-header-4.html">Index Header 4</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown m">
                                    <a href="#">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">test</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown m">
                                    <a href="#">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">test</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown m">
                                    <a href="#">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">test</a></li>
                                    </ul>
                                </li>

                                <li class="dropdown m">
                                    <a href="#">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">test</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        /* </div> */
       
    )
}

export default Header
