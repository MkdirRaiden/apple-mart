import React from "react";

import "aos/dist/aos.css";

const Footer = () => {
  return (
    <>
      <div
        className="home_page__footer section__padding"
        data-aos="zoom-in"
        data-aos-easing="linear"
      >
        <div className="home_page__footer-links">
          <div className="home_page__footer-links_logo">
            <img src={process.env.PUBLIC_URL + "/assets/images/apple.png"} />
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
