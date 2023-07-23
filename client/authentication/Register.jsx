import React, { useEffect, useState } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@material-ui/core";
import { Card } from "react-bootstrap";
import images from "./Images";
import RegisterForm1 from "./RegisterForm1";
import RegisterForm2 from "./RegisterForm2";

const Register = (props) => {
  const [values, setValues] = useState({
    step: 1,
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    type: "",
  });

  //Proceed to next step
  const nextStep = () => {
    const { step } = values;
    setValues({ ...values, step: step + 1 });
  };

  // Go back to previous step
  const prevStep = () => {
    const { step } = values;
    setValues({ ...values, step: step - 1 });
  };

  const sendInfo = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      userType: values.type,
    });

    try {
      fetch("https://apis-paymax.herokuapp.com/usermgt/user/signup", {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
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

  useEffect(() => {
    const mod = document.querySelector("#register-modal");
    // mod?.modal({ show: true });
    console.log(mod);
  }, []);

  const { step } = values;

  switch (step) {
    case 1:
      return (
        <>
          <Grid container>
            <Grid item xs={2} md={8}>
              <div
                className="imgslider"
                style={{ paddingLeft: "2rem", marginTop: "4.5rem" }}
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
                  marginTop: "3rem",
                }}
              >
                <RegisterForm1
                  values={values}
                  setValues={setValues}
                  sendInfo={sendInfo}
                  nextStep={nextStep}
                />
              </div>
            </Grid>
          </Grid>
        </>
      );

    case 2:
      return (
        <>
          <Grid container>
            <Grid item xs={2} md={8}>
              <div
                className="imgslider"
                style={{ paddingLeft: "2rem", marginTop: "4.5rem" }}
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
                  marginTop: "3rem",
                }}
              >
                <RegisterForm2
                  values={values}
                  sendInfo={sendInfo}
                  prevStep={prevStep}
                />
              </div>
            </Grid>
          </Grid>
        </>
      );
  }
};
export default Register;
