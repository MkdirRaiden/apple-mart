import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              velit, optio beatae eius eum deleniti autem at inventore,
              consectetur ducimus ipsa facilis saepe corrupti aliquam assumenda.
              Quasi aut, unde vitae distinctio quibusdam earum nemo dolorem
              aperiam, consectetur perspiciatis voluptatum esse. Ut, eos rerum.
              Vero libero veritatis, incidunt soluta quae dicta ullam possimus
              at obcaecati nulla illum temporibus quas. Recusandae, mollitia
              neque? Sed animi ullam at incidunt nesciunt id quibusdam itaque
              reiciendis, porro molestias ad nulla ratione et voluptatem
              asperiores dolore perferendis officia totam obcaecati. Itaque
            </p>
            <NavLink
              to="/contact"
              className="btn btn-outline-primary px-3 mb-4"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/About.jpg"
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
