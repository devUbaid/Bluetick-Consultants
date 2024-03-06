import React from "react";
import "./style.css";
import logo1 from "../../assets/images/logo-white.png";
import {
    FaArrowRight,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagramSquare,
  } from "react-icons/fa";

import glassdoor from "../../assets/images/glassdoor.webp";
import iso from "../../assets/images/iso.webp";

function Footer() {

  return (
    <>
    <footer>
            <div className="container">
            <div className="content-footer">
                <div className="profile">
                <div className="logo__area">
                    <img src={logo1} alt="" />
                    <span className="logo__name">Bluetick Consultants LLP</span>
                    <p className="contact-email">contact@bluetickconsultans</p>
                </div>
                <div className="desc__area">
                    <a href="#"><img src={glassdoor} alt="" /></a>
                    <a href="#"><img src={iso} alt="" /></a>
                </div>
                </div>
                <div className="service__area">
                <ul className="service__header">
                    <li className="service__name">RESOURCES</li>
                    <li>
                    <a href="#">Blogs</a>
                    </li>
                </ul>
                <ul className="service__header">
                    <li className="service__name">PRODUCTS</li>
                    <li>
                    <a href="#">
                        Talk To Code
                    </a>
                    </li>
                    <li>
                    <a href="#">InterviewGPT</a>
                    </li>
                    <li>
                    <a href="#">PrivacyDoc</a>
                    </li>
                    <li>
                    <a href="#">Sales Call Evaluator</a>
                    </li>
                </ul>
                <ul className="service__header">
                    <li className="service__name">USECASES</li>
                    <li>
                    <a href="#">For Developers</a>
                    </li>
                
                </ul>
                <ul className="service__header">
                    <li className="service__name">COMPANY</li>
                    <li>
                    <a href="#">About Us</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                    <li>
                    <a href="#">Career</a>
                    </li>
                </ul>
                </div>
            </div>
            <hr />
            <div className="footer__bottom">
                <div className="tou">
                <div className="social_media">
                    <a href="#">
                    <FaFacebook />
                    </a>
                    <a href="#">
                    <FaTwitter />
                    </a>
                    <a href="#">
                    <FaLinkedin />
                    </a>
                    <a href="#">
                    <FaInstagramSquare />
                    </a>
                </div>
                <div className="terms">
                    <a href="#">Terms of Services</a>
                    <a href="#">Privacy</a>
                </div>
                </div>
                <div className="copy_right">
                <p>2024 © All rights reserved by Bluetick Consultants LLP</p>
                </div>
            </div>
            </div>
    </footer>

    </>
  )
}

export default Footer