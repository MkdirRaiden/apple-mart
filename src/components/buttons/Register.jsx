import React from "react";

const Register = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#registerModal"
      >
        <i className="fa fa-user-plus me-1"></i>Register
      </button>

      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content gradient__bg">
            <div className="modal-header">
              <h1
                className="modal-title fs-1 gradient__text ms-auto"
                id="registerModalLabel"
              >
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ backgroundColor: "#fff" }}
              ></button>
            </div>
            <div className="modal-body">
              <form className="register-form">
                <div className="mb-3">
                  <label
                    htmlFor="registerInputUserName1"
                    className="form-label text-primary fs-4"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerInputUserName1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="registerInputEmail1"
                    className="form-label
                  text-primary fs-4"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="registerInputEmail1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="registerInputPassword1"
                    className="form-label text-primary fs-4"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="registerCheck1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="registerCheck1"
                    style={{ color: "#fff" }}
                  >
                    I agree to the terms & conditions.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mb-4"
                >
                  Submit
                </button>

                <button className="btn btn-primary w-100 mb-2 mt-2">
                  <span className="fa fa-google me-2"></span>Sign up with Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span>Sign up with
                  Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
