import React from "react";
// import "../../public/assets/work1.jpg"
function work() {
    return (
        <div id="work" class="how-we-work service-shape pt-100 pb-70 ">
            <div class="container hide-on-mobile">
                <div class="section-title">
                    <h1 class="work-heading-text"></h1>
                </div>
                <img src="../assets/how-we-work.png" class="step-1" alt="Image" />
                <br></br><br></br>
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Wear the sock</h3>
                            <p class="work-text">Use the socks for a while, let the sensors gather information about your body.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Get the app</h3>
                            <p class="work-text">The reader connects to your phone directly via bluetooth and sends the data to be stored on the app.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Alerts & Prevention</h3>
                            <p class="work-text">If we detect any anomaly the app immediately alerts you and advises a course of action.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Get in touch with doctor</h3>
                            <p class="work-text">All that data makes communication with your doctor much easier and allows them to treat you better.</p>
                        </div>
                    </div>
                </div>
            </div>






            <div class=" container show-on-mobile">
                <div class="section-title">
                    <h1 class="work-heading-text"></h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-5">
                        <img src="../assets/work1.svg" alt="Image" />
                    </div>
                    <div class="col-2">
                        <hr style={{ border:"5px solid rgba(90, 89, 84, 0.5)",borderRadius:"5px" }}></hr>
                    </div>
                    <div class="col-5">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Wear the sock</h3>
                            <p class="work-text">Use the socks for a while, let the sensors gather information about your body.</p>
                        </div>
                    </div>
                </div>
                {/* //////////////////// */}
                <div class="row align-items-center">
                    <div class="col-5">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Get the app</h3>
                            <p class="work-text">The reader connects to your phone directly via bluetooth and sends the data to be stored on the app.</p>
                        </div>
                    </div>
                    <div class="col-2">
                        <hr style={{ border:"5px solid rgba(90, 89, 84, 0.5)",borderRadius:"5px" }}></hr>
                    </div>
                    <div class="col-5">
                        <img src="../assets/work2.svg" alt="Image" />
                    </div>
                </div>
                {/* //////////////////// */}
                <div class="row align-items-center">
                    <div class="col-5">
                        <img src="../assets/work3.svg" alt="Image" />
                    </div>
                    <div class="col-2">
                        <hr style={{ border:"5px solid rgba(90, 89, 84, 0.5)",borderRadius:"5px" }}></hr>
                    </div>
                    <div class="col-5">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Alerts & Prevention</h3>
                            <p class="work-text">If we detect any anomaly the app immediately alerts you and advises a course of action.</p>
                        </div>
                    </div>
                </div>
                {/* //////////////////// */}
                <div class="row align-items-center">
                    <div class="col-5">
                        <div class="how-we-work-card">
                            <h3 class="text-heading">Get in touch with doctor</h3>
                            <p class="work-text">All that data makes communication with your doctor much easier and allows them to treat you better.</p>
                        </div>
                    </div>
                    <div class="col-2">
                        <hr style={{ border:"5px solid rgba(90, 89, 84, 0.5)",borderRadius:"5px" }}></hr>
                    </div>
                    <div class="col-5">
                        <img src="../assets/work4.svg" alt="Image" />
                    </div>
                </div>

            </div>

        </div>








    );
}

export default work;
