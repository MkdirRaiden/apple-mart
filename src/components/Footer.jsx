import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Apple from "../assets/images/apple.png";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 50,
    });
  }, []);
  return (
    <>
      <div
        className="home_page__footer section__padding"
        data-aos="flip-down"
        data-aos-easing="linear"
      >
        <div className="home_page__footer-links">
          <div className="home_page__footer-links_logo">
            <img src={Apple} alt="home_page_logo" />
            <p>
              Muktadir Raiden..., <br /> All Rights Reserved
            </p>
          </div>
          <div className="home_page__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="home_page__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="home_page__footer-links_div">
            <h4>Get in touch</h4>
            <p> Muktadir Raiden...</p>
            <p>+91-8474884459</p>
            <p>info@payme.net</p>
          </div>
        </div>

        <div className="home_page__footer-copyright">
          <p>@2023 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
