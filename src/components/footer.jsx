import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column px-3 py-3 align-items-center font-link text-center footer ">
        <br />

        <br />

        <div className="d-flex align-items-center gap-4 mb-4">
          <div
            className="d-flex align-items-center gap-4 mr-3"
            style={{ cursor: "pointer" }}
          >
            <FaGithub size={25} className="fs-4" />
          </div>
          <div
            className="d-flex align-items-center gap-4 mr-3"
            style={{ cursor: "pointer" }}
          >
            <FaInstagram size={25} className="fs-4" />
          </div>
          <div
            className="d-flex align-items-center gap-4 mr-1"
            style={{ cursor: "pointer", color: "#0A66C2" }}
          >
            <FaLinkedin size={25} className="fs-4" />
          </div>
        </div>

        <div class="mb-2">
          <a href="/toc" class="anchor">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy" class="anchor">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/faq" class="anchor">
            FAQs
          </a>{" "}
          |{" "}
          <a href="/career" class="anchor">
            Career
          </a>
        </div>
        <div class="mb-2" style={{ fontSize: "20px", cursor: "pointer" }}></div>
        <div class="copyright">
          Copyright @2021 FeetWings. All Rights Reserved
        </div>
        <br />
      </div>
    </>
  );
};

export default Footer;
