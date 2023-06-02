import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";
import CrtImg from "../assets/images/cart0.jpg";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div
        className="px-4 my-5 bg-light rounded-3 section__margin"
        key={cartItem.id}
      >
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt="image"
                height={250}
                width={200}
                style={{ marginBottom: "40px" }}
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold text-primary fs-3">
                ${cartItem.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="container  section__padding">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center py-6">
              <img src={CrtImg} alt="image" height={360} width={360} />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <h1
                className="fw-bold fs-1 gradient__text"
                style={{ marginTop: "40px" }}
              >
                YOUR CART IS EMPTY!
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  };
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-secondary mb-5 w-100 mx-auto fs-5"
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
