import React from "react";
import Product from "./Product";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img7.jpg"}
              className="d-block w-100"
              alt=""
            />
            <div
              className="carousel-caption  d-md-block"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="gradient__text fw-bold">LATEST PRODUCT ARRIVAL</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img1.jpg"}
            />
          </div>

          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img2.jpg"}
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img6.jpg"}
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img5.jpg"}
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img4.jpg"}
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/home/img9.jpg"}
            />
          </div>
        </div>
      </div>
      <Product />
      <Footer />
    </>
  );
};

export default Home;
