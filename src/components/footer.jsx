import React from "react";

function footer(){
    return (
        <footer class="footer-area pt-200">
                <div class="footer-widget">
                  <div class="logo">
                    <img src="../assets/logo_web.png" alt="logo" />
                    <p class="footer-text">Smart Textile Based Healthcare Assistant</p>
                  </div>

                <div class="pages">
                  <h1 class="title">Pages</h1>
                    <ul class="footer-text">
                      <li><a href="#features">Features</a></li>
                      <li><a href="#work">Work</a></li>
                      <li><a href="#faq">FAQ</a></li>
                      <li><a href="#">Career</a></li>
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
                      <li><a href="https://www.linkedin.com/company/feetwings-pvt-ltd/" target="_blank">LinkedIn</a></li>
                      <li><a href="#" target="_blank">Twitter</a></li>
                      <li><a href="#" target="_blank">Facebook</a></li>
                      <li><a href="https://www.instagram.com/feet.wings/" target="_blank">Instagram</a></li>
                    </ul>
                </div>

                <div class="reach-us">
                  <h1 class="title">Reach Us</h1>
                  <p class="footer-text"><a href="mailto:feetwings@gmail.com" target="_blank">feetwings@gmail.com</a></p>
                </div>

                <div class="backToTop"></div>
                </div>
                <div class="copyright-text">
                    <p>Copyright @2021 FeetWings. All Rights Reserved </p>
                </div>
        </footer>
    );
}

export default footer;
