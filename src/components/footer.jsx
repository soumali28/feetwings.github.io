import React from "react";

function footer(){
    return (
        <footer class="footer-area pt-200">
                <div class="footer-widget">
                <div class="logo">
                  <img src="../assets/logo_web.png" alt="logo" />
                  <p class="footer-text">Smart IoT based Early Warning and Management tool</p>
                </div>
                <div class="pages">
                  <h1 class="title">Pages</h1>
                  <ul class="footer-text">
                  <li>Features</li>
                  <li>Work</li>
                  <li>FAQ</li>
                  <li>Career</li>
                  </ul>
                </div>
                <div class="company">
                  <h1 class="title">Company</h1>
                  <ul class="footer-text">
                  <li>About us</li>
                  <li>Our Services</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  </ul>
                </div>
                <div class="social">
                  <h1 class="title">Follow us</h1>
                  <ul class="footer-text">
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  </ul>
                </div>
                <div class="reach-us">
                  <h1 class="title">Reach Us</h1>
                  <p class="footer-text">Feetwings@gmail.com</p>
                </div>
                <div class="backToTop">
                <a href="#home">
                  <i class="fas fa-long-arrow-alt-up"></i>
                </a>
                </div>
                </div>
                <div class="copyright-text">
                    <p>Copyright @2021 FeetWings. All Rights Reserved </p>
                </div>
        </footer>
    );
}

export default footer;
