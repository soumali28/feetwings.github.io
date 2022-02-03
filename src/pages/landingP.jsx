import React from "react";

function landingP(){
    return(
        <div id="home" class="app-banner-area pt-100">
            <div class="container">
                <div class="row align-items-center sock-reverse">
                    <div class="col-lg-6">
                        <div class="app-bennr-text">
                            <h1>Smart Textile Based Healthcare Assistant</h1>
                            <p>FeetWings is a smart wearable company that aims to provide a solution to diabetes and related complications at an affordable rate.</p>

                            <div class="app-shapes d-flex gap-5 ">
                                <button class="d-flex rounded m-2 ">
                                    <i class="fab fa-apple fa-3x "></i>
                                    <div> 
                                        <h6 style={{fontSize:"15px"}}>
                                            Download on the 
                                        </h6>
                                        <h5>
                                            App store
                                        </h5>
                                    </div>
                                </button>
                                <button class="d-flex rounded m-2">
                                    <i class="fab fa-google-play fa-3x"></i>
                                    <div> 
                                        <h6 style={{fontSize:"15px"}}>
                                            Get it on
                                        </h6>
                                        <h5>
                                            Google Play
                                        </h5>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="app-banner-img">
                            <img src="../assets/sock.png" class="app-img" alt="Image"/>
                            <div class="app-shapes"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-shape">
                </div>
            </div>
        </div>

    )
}

export default landingP;
