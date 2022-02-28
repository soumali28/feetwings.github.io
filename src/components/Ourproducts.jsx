import React from "react";

function Ourproducts() {
  return (
    <div id="home" class="app-banner-area pt-100">
      <div class="container">
        <div class=" align-items-center text-center">
          <div>
            <h1 class="heading">FeetWings</h1>
            <br></br>
            <h2 class="subheading">
              Smart IoT based Early warning and management tool
            </h2>
            <br></br>
            <br></br>
            <p class="paragraph">
              Smart socks that help in early detection and management of
              diabetic complications using non-invasive, affordable and
              continous monitoring
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <h1 class="problem">The Problem</h1>
          <p class="para">
            Patients with lifestyle diseases like diabetes deal with the
            constant risk of developing life-threatening complications like
            neuropathy, hypertension, and blindness.
            <br></br>
            <br></br>
            This happens because of the lack of continuous and consistent
            monitoring of critical parameters of the patient. India has close to
            about 77 million diabetic patients second to China.
          </p>
          <div class="rectangle container">
            <div class="mes">Uncontrolled diabetes</div>
            <div class="line"></div>
            <div class="mes">Foot ulcers, CVD and retinopathy</div>
            <div class="line"></div>
            <div class="mes">
              Heart/Kidney failure, amputations and blindness
            </div>
          </div>
        </div>
        <div>
          <img src="assets/landing_img/ps.svg" alt="ps" />
        </div>
      </div>
      <div class="column">
        <div>
          <h1>Our Solution</h1>
          <p class="para">
            Constant and continuous monitoring of critical parameters using IoT
          </p>
          <div>
            <h3>Temperature monitoring can reduce foot ulcer by</h3>
            <h3>
              Glucose monitoring can reduce risk of contracting any diabetic
              complication by
            </h3>
          </div>
        </div>
        <div>
          <img src="assets/landing_img/doublesock.svg" alt="hehe"></img>
        </div>
      </div>
    </div>
  );
}

export default Ourproducts;
