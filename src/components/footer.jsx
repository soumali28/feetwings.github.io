import React from "react";
import {FaCode} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FiThumbsUp} from "react-icons/fi";
import {MdOutlineCopyright} from "react-icons/md";


import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = ()=>{
    return (
        <>
            <div className="d-flex flex-column px-3  align-items-center font-linkk " style={{backgroundColor : "#dadada"}}><br />

                <br />


                <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="d-flex align-items-center gap-4 mr-3" style={{cursor:"pointer"}} ><FaGithub size={42} className="fs-4" /></div>
                    <div className="d-flex align-items-center gap-4 mr-3" style={{cursor:"pointer"}}><FaLinkedin size={42} className="fs-4" /></div>
                    <div className="d-flex align-items-center gap-4 mr-1" style={{cursor:"pointer"}}><FaInstagram size={42} className="fs-4" /></div>
                </div>
                
                <div class="mb-2" style={{fontSize:"20px", cursor:"pointer"}}><a href="/toc">Terms & Conditions</a>  |   <a href="/privacy">Privacy Policy</a>  |   <a href="/faq">FAQs</a>  |   <a href="/career">Career</a></div>
                <div class="mb-2" style={{fontSize:"20px", cursor:"pointer"}}></div>
                <div style={{fontSize:"20px"}}>Copyright @2021 FeetWings. All Rights Reserved</div><br />
            </div>
        </>
    );
}

export default Footer;