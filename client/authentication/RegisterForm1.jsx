// import Card from "react-bootstrap/esm/Card";
import Link from "next/link";
import { Card } from "react-bootstrap";

const RegisterForm1 = ({ values, sendInfo, nextStep, setValues }) => {
  return (
    <Card>
      <div className="login-wrapper" style={{ paddingTop: "0" }}>
        <div>
          {/* <span className="img-fluid logo-dark mb-2">
                  <Image src={Logo} alt="Logo" />
              </span> */}
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Adventure starts here</h1>
                <p className="account-subtitle">
                  Making app management easy and fun!
                </p>

                {/* Form */}
                <form>
                  <div className="form-group">
                    <label className="form-control-label">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter User Name"
                      value={values.name}
                      onChange={(e) => {
                        setValues({ ...values, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your Phone Number"
                      value={values.phoneNumber}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          phoneNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="customer"
                      className="mr-4"
                      style={{ marginRight: "1rem" }}
                    >
                      <input
                        type="radio"
                        name="customer"
                        id="customer"
                        className="mr-2"
                        value="CUSTOMERS"
                        checked={values.type === "CUSTOMERS"}
                        onChange={(e) => {
                          setValues({
                            ...values,
                            type: e.target.value,
                          });
                        }}
                      />
                      Customer
                    </label>
                    <label htmlFor="service" className="mr-3">
                      <input
                        type="radio"
                        name="service"
                        id="service"
                        className="mr-2"
                        value="MERCHANTS"
                        checked={values.type === "MERCHANTS"}
                        onChange={(e) => {
                          setValues({
                            ...values,
                            type: e.target.value,
                          });
                        }}
                        onClick={nextStep}
                      />
                      Service Provider/Merchant
                    </label>
                  </div>
                  {/* <div className="form-group d-flex align-items-center  justify-content-between">
                <div className="w-100 mr-2">
                  Major Category
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle w-100 bg-transparent text-secondary"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Consulting
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-100 ml-2">
                  Sub Category
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle w-100 bg-transparent text-secondary"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Health
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                  <div className="form-group mb-0">
                    <button
                      className="btn btn-lg btn-block btn-primary w-100"
                      onClick={sendInfo}
                      type="button"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                {/* /Form */}

                {/* <div className="login-or">
                              <span className="or-line"></span>
                              <span className="span-or">or</span>
                          </div> */}
                {/* Social Login */}
                {/* <div className="social-login">
                              <span>Register with</span>
                              <a href="#" className="facebook">
                                  <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="#" className="google">
                                  <i className="fab fa-google"></i>
                              </a>
                          </div> */}
                {/* /Social Login */}
                <div className="text-center dont-have" onClick={sendInfo}>
                  Already have an account?{" "}
                  <Link href="/login">Sign in instead</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RegisterForm1;
