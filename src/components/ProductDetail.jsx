import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action/index";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const proId = useParams();
  const proDetail = DATA.filter((x) => x.id == proId.id);
  const product = proDetail[0];

  const dispatch = useDispatch();
  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product mb-5">
            <img src={product.img} alt="image" height={405} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-6 fw-bold gradient__text">
              {product.title}
            </h1>
            <hr />
            <h2 className="my-1 text-primary">${product.price}</h2>
            <p className="my-2">{product.description}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-4"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
