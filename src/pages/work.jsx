import React from "react";
import "../styles/work.css";

function work() {
  return (
    <div id="work" class="how-we-work service-shape pt-100 pb-70 ">
      <div class="container hide-on-mobile" style={{ marginBottom: "80px" }}>
        <div class="section-title">
          <h1 class="work-heading-text" aria-hidden="true"></h1>
        </div>
        <img
          src="../assets/landing_img/how-we-work.png"
          class="step-1"
          alt="Work"
        />

        <div class="row card-container">
          <div class="col-lg-3 col-sm-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="800">
            <div class="how-we-work-card">
              <h3 class="text-heading">Wear the sock</h3>
              <p class="work-text">
                Use the socks for a while, let the sensors gather information
                about your body.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="800">
            <div class="how-we-work-card">
              <h3 class="text-heading">Get the app</h3>
              <p class="work-text">
                The reader connects to your phone directly via bluetooth and
                sends the data to be stored on the app.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="800" >
            <div class="how-we-work-card">
              <h3 class="text-heading">Alerts & Prevention</h3>
              <p class="work-text">
                If we detect any anomaly the app immediately alerts you and
                advises a course of action.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="800">
            <div class="how-we-work-card">
              <h3 class="text-heading">Get in touch with doctor</h3>
              <p class="work-text">
                All that data makes communication with your doctor much easier
                and allows them to treat you better.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class=" container show-on-mobile ">
        <div class="section-title">
          <h1 class="work-heading-text" aria-hidden="true"></h1>
        </div>
        <div class="row align-items-center flex-card-div">
          <div class="col-5 card-img-container">
            <img
              style={{ height: "100%", width: "100%" }}
              src="../assets/work/sock.svg"
              alt="FeetWings"
            />
          </div>
          <div class="col-2">
            <hr
              style={{
                border: "5px solid rgba(90, 89, 84, 0.5)",
                borderRadius: "5px",
              }}
            ></hr>
          </div>
          <div class="col-5 ">
            <div class="how-we-work-card">
              <h3 class="text-heading">Wear the sock</h3>
              <p class="work-text">
                Use the socks for a while, let the sensors gather information
                about your body.
              </p>
            </div>
          </div>
        </div>
        {/* //////////////////// */}
        <div class="row align-items-center flex-card-div">
          <div class="col-5  ">
            <div class="how-we-work-card unique-card-container  ">
              <h3 class="text-heading">Get the app</h3>
              <p class="work-text">
                The reader connects to your phone directly via bluetooth and
                sends the data to be stored on the app.
              </p>
            </div>
          </div>
          <div class="col-2">
            <hr
              style={{
                border: "5px solid rgba(90, 89, 84, 0.5)",
                borderRadius: "5px",
              }}
            ></hr>
          </div>
          <div class="col-5 card-img-container">
            <img
              style={{ height: "100%", width: "100%" }}
              src="../assets/work/app.svg"
              alt="FeetWings"
            />
          </div>
        </div>
        {/* //////////////////// */}
        <div class="row align-items-center flex-card-div">
          <div class="col-5 card-img-container">
            <img
              style={{ height: "100%", width: "100%" }}
              src="../assets/work/alerts.svg"
              alt="FeetWings"
            />
          </div>
          <div class="col-2">
            <hr
              style={{
                border: "5px solid rgba(90, 89, 84, 0.5)",
                borderRadius: "5px",
              }}
            ></hr>
          </div>
          <div class="col-5">
            <div class="how-we-work-card">
              <h3 class="text-heading">Alerts & Prevention</h3>
              <p class="work-text">
                If we detect any anomaly the app immediately alerts you and
                advises a course of action.
              </p>
            </div>
          </div>
        </div>
        {/* //////////////////// */}
        <div class="row align-items-center flex-card-div">
          <div class="col-5 ">
            <div class="how-we-work-card unique-card-container ">
              <h3 class="text-heading">Get in touch with doctor</h3>
              <p class="work-text">
                All that data makes communication with your doctor much easier
                and allows them to treat you better.
              </p>
            </div>
          </div>
          <div class="col-2">
            <hr
              style={{
                border: "5px solid rgba(90, 89, 84, 0.5)",
                borderRadius: "5px",
              }}
            ></hr>
          </div>
          <div class="col-5 card-img-container">
            <img
              style={{ height: "100%", width: "100%" }}
              src="../assets/work/doctor.svg"
              alt="FeetWings"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default work;
