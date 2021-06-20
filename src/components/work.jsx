import React from "react";

function work(){
    return (
<div id="work" class="how-we-work service-shape pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <h1>How we work. . .</h1>
                </div>
                <img src="http://feetwings.com/assets/images/how-we-work.png" class="step-1" alt="Image" />
                <br></br><br></br>
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3>Wear the sock</h3>
                            <p>Use the socks for a while, let the sensors gather information about your body.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3>Get the app</h3>
                            <p>The reader connects to your phone directly via bluetooth and sends the data to be stored on the app.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3>Alerts & Prevention</h3>
                            <p>If we detect any anomaly the app immediately alerts you and advises a course of action.</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="how-we-work-card">
                            <h3>Get in touch with doctor</h3>
                            <p>All that data makes communication with your doctor much easier and allows them to treat you better.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default work;