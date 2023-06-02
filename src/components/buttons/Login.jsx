import React from "react";

const Login = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <i className="fa fa-sign-in me-1"></i>Login
      </button>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content gradient__bg">
            <div className="modal-header">
              <h1
                className="modal-title fs-1 gradient__text ms-auto"
                id="loginModalLabel"
              >
                Sign In
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
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="loginInputEmail1"
                    className="form-label text-primary fs-4"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginInputEmail1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="loginInputPassword1"
                    className="form-label text-primary fs-4"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="loginCheck1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="loginCheck1"
                    style={{ color: "#fff" }}
                  >
                    Remember me.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mb-4"
                >
                  Submit
                </button>

                <button className="btn btn-primary w-100 mb-2 mt-2">
                  <span className="fa fa-google me-2"></span>Sign in with Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-facebook me-2"></span>Sign in with
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

export default Login;
