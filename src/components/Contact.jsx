import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1 className="lead text-primary fw-bold fs-1">
              Have Some Question?
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="image"
              width={375}
              height={375}
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="nameFormControlInput" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailFormControlInput" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailFormControlInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="textAreaFormControlTextarea"
                  className="form-label"
                >
                  Enter Your Message.
                </label>
                <textarea
                  className="form-control"
                  id="textAreaFormControlTextarea"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary mb-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
