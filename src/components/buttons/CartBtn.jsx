import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const state = useSelector((state) => state.addItems);
  return (
    <>
      <NavLink className="btn btn-outline-primary ms-2" to="/cart">
        <i className="fa shopping-cart me-1"></i>Cart({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
