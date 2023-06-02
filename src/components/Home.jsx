import React from "react";
import Product from "./Product";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 1000,
    });
  }, []);
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
              src="/assets/images/home/iPhone11.jpg"
              className="d-block w-100"
              alt="image"
            />
            <div className="carousel-caption  d-md-block" data-aos="fade-up">
              <h1 className="gradient__text fw-bold">LATEST PRODUCT ARRIVAL</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/iPhone12.jpg"
              className="d-block w-100"
              alt="image"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/assets/images/home/iPhone14.jpg"
              className="d-block w-100"
              alt="image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/img5.jpg"
              className="d-block w-100"
              alt="image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/img6.jpg"
              className="d-block w-100"
              alt="image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/img4.jpg"
              className="d-block w-100"
              alt="image"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/img2.jpg"
              className="d-block w-100"
              alt="image"
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