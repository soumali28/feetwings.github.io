import React from "react";

function special(){
    return (
        <div id="special" class="easy-step-area ptb-100">
            <div class="container">
                <div class="section-title pb-4">
                    <h1>What Makes Us Special ?</h1>
                </div>

                <div class="row align-items-between ">

                    <div class="col-lg-4 mt-5">
                        <div class="easy-step-card left-text">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-sm-6">
                                    <img src="../assets/icons/Early%20Detection.png" width="110" />
                                </div>
                                <div class="col-lg-8 col-sm-6">
                                    <h5>Early Detection & prevention of Diabetic Complications</h5>
                                    <p>Find out early signs of risk for severe diabetic complications such as Diabetic Foot Ulcers, Hypertension & Chronic Kidney Disease.</p>
                                </div>
                            </div>
                        </div>

                        <div class="easy-step-card right-text">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-sm-6">
                                    <img src="../assets/icons/Remote%20Monitoring.png" width="110" />
                                </div>
                                <div class="col-lg-8 col-sm-6">
                                    <h5>Remote & Continuous Monitoring</h5>
                                    <p>Real-time and long-term data that helps reduce false positives and helps you make better lifestyle choices from the convenience of your homes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                       

                    <div class="col-lg-4 mt-n5 mobile-special">
                        <div class="easy-step-img">
                            <img src="../assets/app-img/mobile-app.png" class="step-1" alt="Image" />
                            <div class="easy-step-shape">
                            </div>
                        </div>
                    </div>

                        
                    <div class="col-lg-4 mt-5">
                        <div class="easy-step-card left-text">
                            <div class="row align-items-center">
                                <div class="col-lg-8 col-sm-6">
                                    <h5>Ease of Access</h5>
                                    <p>Our smart yarn is completely machine-washable and dryable, functionally smart, but just as easy to use!</p>
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                    <img src="../assets/icons/Ease%20of%20access.png" width="110" />
                                </div>
                            </div>
                        </div>
                        <div class="easy-step-card right-text">
                            <div class="row align-items-center">
                                <div class="col-lg-8 col-sm-6">
                                    <h5>Affordability</h5>
                                    <p>For the first time ever, continuous, specific and feature-rich diabetic monitoring that is extremely affordable and value-driven with plans starting as low as ₹299/month!</p>
                                </div>
                                <div class="col-lg-4 col-sm-6">
                                        <img src="../assets/icons/Affordability.png" width="110" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default special;