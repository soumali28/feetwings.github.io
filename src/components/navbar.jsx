import React from "react";

function navbar(){
    return(
        <nav class="navbar fixed-top navbar-expand-lg main-navbar app-nav">
            <div class="container">
                <a class="navbar-brand" href="app-landing.html">
                    <img src="http://feetwings.com/assets/images/logo_web1.png" alt="logo" />
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#special">Special</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#smart">Smart Yarn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work">Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#faq">FAQs</a>
                        </li>
                    </ul>
                    <div class="nav-btn">
                        <a href="#" class="default-btn bg-main">Download</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default navbar;