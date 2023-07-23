import React, { useState, useContext } from "react";
import Link from "next/link";
import AuthContext from "../store/authStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import images from "./Images";

const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Token 86b23051dded7a8aafc0a6d2add87475dad29e31"
    );

    var raw = JSON.stringify({
      email: values.email,
      password: values.password,
    });

    try {
      fetch("https://apis-paymax.herokuapp.com/usermgt/user/login", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          authCtx.login(data);
        });

      setValues({ email: "", password: "" });

      // history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      {/* Main Wrapper */}
      <Grid container>
        <Grid item xs={2} md={8}>
          <div
            className="imgslider"
            style={{ paddingLeft: "2rem", marginTop: "5.5rem" }}
          >
            <Slider {...settings}>
              {images.map((item) => (
                <div key={item.id}>
                  <img src={item.src} alt={item.alt} width="100%" />
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
        <Grid item xs={10} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5.5rem",
            }}
          >
            <Card>
              <div className="login-wrapper">
                <div>
                  {/* <span className="img-fluid logo-dark mb-2">
                            <Image src={Logo} alt="Logo" />
                        </span> */}
                  <div className="loginbox">
                    <div className="login-right">
                      <div className="login-right-wrap">
                        <h1>Login</h1>
                        <p className="account-subtitle">
                          Making app management easy and fun!
                        </p>
                        <div>
                          <div className="form-group">
                            <label className="form-control-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email"
                              value={values.email}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-control-label">
                              Password
                            </label>
                            <div className="pass-group">
                              <input
                                type="password"
                                className="form-control pass-input"
                                placeholder="Enter password"
                                value={values.password}
                                onChange={(e) =>
                                  setValues({
                                    ...values,
                                    password: e.target.value,
                                  })
                                }
                              />
                              <span className="fas fa-eye toggle-password" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-6">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cb1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cb1"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                              <div className="col-6 text-end">
                                <Link href="/forgot-password">
                                  <a className="forgot-link">
                                    Forgot Password ?
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn btn-lg btn-block btn-primary w-100"
                            type="submit"
                            onClick={loginHandler}
                          >
                            Login
                          </button>
                          {/* <div className="login-or">
                                            <span className="or-line" />
                                            <span className="span-or">or</span>
                                        </div> */}
                          {/* Social Login */}
                          {/* <div className="social-login mb-3">
                                            <span>Login with</span>
                                            <a href="#" className="facebook">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a href="#" className="google">
                                                <i className="fab fa-google" />
                                            </a>
                                        </div> */}
                          {/* /Social Login */}
                          <div className="text-center dont-have">
                            Don't have an account yet?{" "}
                            <Link href="/register">Register</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Login;
