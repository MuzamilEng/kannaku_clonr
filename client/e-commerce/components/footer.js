import React from "react";

function footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#323232" }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#282828" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">LET US HELP YOU</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#323232",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-darkwhite">
                    Help center
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    How to shop on PayMax?
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    Delivery options and timelines
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    How to return a product on PayMax?
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">ABOUT PayMax</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-darkwhite">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    PayMax careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    PayMax Express
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    Terms and Conditions
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                  MAKE MONEY WITH PayMax
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-darkwhite">
                    Sell on PayMax
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    Become a Sales Consultant
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    Become a PayMax Vendor Service Provider
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-darkwhite">
                    Become a Logistics Service Partner
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="row mt-1">
            <div className="col-3"></div>
            {/* <div className="col-4"><a href="#" className="text-yellow">Sell on PayMax</a></div> */}

            <div className="col-4"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
