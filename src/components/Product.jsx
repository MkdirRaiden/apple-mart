import React from "react";
import { DATA } from "../Data.js";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const cardItem = (item) => {
  return (
    <div
      className="card my-4 py-2 mb-5"
      key={item.id}
      style={{ width: "18rem" }}
      data-aos="zoom-in-up"
    >
      <img src={item.img} className="card-img-top" alt="image" />
      <div className="card-body text-center">
        <h5 className="card-title" data-aos="fade-right">
          {item.title.slice(0, 26)}...
        </h5>
        <p className="card-text" data-aos="fade-in">
          ${item.price}
        </p>
        <NavLink
          to={`/products/${item.id}`}
          className="btn btn-outline-primary"
          data-aos="fade-left"
        >
          Buy now
        </NavLink>
      </div>
    </div>
  );
};

const Product = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
      offset: 25,
    });
  }, []);
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-up">
            <h1 className="lead fw-bold fs-1 gradient__text ">PRODUCTS</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
