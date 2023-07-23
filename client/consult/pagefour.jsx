import React from "react";
import Banner from "./components/banner";
import SearchArea from "./components/search_area";
import SortArea from "./components/sort_area";
import Footer from "./components/footer";
import Card from "./components/Card";
import Specialist from "./components/Specialist";
import Insurance from "./components/Insurance";
import TopSpecialist from "./components/TopSpecialist";
import Doctor from "./components/Doctor";
import doctorsdata from "../json/doctors";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sidebardoctor from "../layouts/Sidebar";
import Header from "../layouts/Header";

import baby from "../assets/img/specialist/baby.png";
import sex from "../assets/img/specialist/sex.png";
import uterus from "../assets/img/specialist/uterus.png";
import pimples from "../assets/img/specialist/pimples.png";
import prostate from "../assets/img/specialist/prostate.png";
import pregnant from "../assets/img/specialist/pregnant.png";
import mentaldisorder from "../assets/img/specialist/mental-disorder.png";


function Pagefour() {
  const bookAppointment = () => {};
  const consult = () => {};
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const specialistsResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebardoctor />

      <div className="page-wrapper">
        <div className="content container-fluid">
        <Banner />
          <SearchArea />
          <SortArea />

          <div className="row">
            <div className="col-12 doctor-body">
              <div className="row pt-5">
                <div className="col-4">
                  <Card
                    title="Doctor On the Cloud"
                    description="Video Consultation with top  specialists in less than N500 per session"
                    buttontxt="Book An Appointment"
                    action={bookAppointment}
                  />
                </div>
                <div className="col-4">
                  <Card
                    title="Doctors Online Now"
                    description="Video Consultation with top  specialists in less than N500 per session"
                    buttontxt="Find Doctors"
                    action={bookAppointment}
                  />
                </div>
                <div className="col-4">
                  <Card
                    title="Book a Lab Test"
                    description="Order Pick up and drop off of your lab test kits at an instant of a click"
                    buttontxt="Find Doctors"
                    action={bookAppointment}
                  />
                </div>
              </div>

              <div className="row p-5">
                <div className="col-4">
                  <p>Verified Doctors</p>
                </div>
                <div className="col-4">Digital Prescription and Delivery</div>
                <div className="col-4">Follow up</div>
              </div>

              <div className="row">
                <p style={{ color: "#072F15" }} className="fs-2 fw-bold ps-5">
                  Medical Specialists
                </p>
              </div>

              <div
                className="row"
                style={{ display: "block", width: "100%", padding: 30 }}
              >
                <Carousel responsive={specialistsResponsive}>
                  <div>
                    <Specialist
                      img={baby}
                      title="Pediatrics"
                      action={consult}
                    />
                  </div>

                  <div>
                    <Specialist
                      img={sex}
                      title="Sexology"
                      action={consult}
                    />
                  </div>

                  <div>
                    <Specialist
                      img={uterus}
                      title="Performance issues in bed"
                      action={consult}
                    />
                  </div>

                  <div>
                    <Specialist
                      img={pimples}
                      title="Dermatologist"
                      action={consult}
                    />
                  </div>

                  <div>
                    <Specialist
                      img={prostate}
                      title="Urology"
                      action={consult}
                    />
                  </div>

                  <div>
                    <Specialist
                      img={pregnant}
                      title="Gynaecology"
                      action={consult}
                    />
                  </div>

                  <div>
                    <Specialist
                      img={mentaldisorder}
                      title="Psychiatry"
                      action={consult}
                    />
                  </div>
                </Carousel>
                ;
              </div>

              <div className="row">
                <p style={{ color: "#072F15" }} className="fs-2 fw-bold ps-5">
                  Featured Health Insurance Providers
                </p>
              </div>

              <div className="row">
                <Carousel responsive={responsive}>
                  <div>
                    <Insurance />
                  </div>
                  <div>
                    <Insurance />
                  </div>
                  <div>
                    <Insurance />
                  </div>
                  <div>
                    <Insurance />
                  </div>
                </Carousel>
              </div>

              <div className="row mt-3 mb-2">
                <p style={{ color: "#072F15" }} className="fs-2 fw-bold ps-5">
                  Top specialists Doctors
                </p>
              </div>

              <div className="row">
                <Carousel responsive={responsive}>
                  <div>
                    <TopSpecialist />
                  </div>
                  <div>
                    <TopSpecialist />
                  </div>
                  <div>
                    <TopSpecialist />
                  </div>
                  <div>
                    <TopSpecialist />
                  </div>
                </Carousel>
              </div>

              <div className="row mt-2 mb-3">
                <p style={{ color: "#072F15" }} className="fs-2 fw-bold ps-5">
                  Common Health Concerns
                </p>
              </div>

              <div className="row ps-4 pe-4 pb-4">
                <Carousel responsive={responsive}>
                  {doctorsdata.map((data, index) => {
                    return (
                      <div key={data.doctor_title} className="ps-4 pe-4 pb-4">
                        <Doctor doctor={data} />
                      </div>
                    );
                  })}
                </Carousel>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagefour;
