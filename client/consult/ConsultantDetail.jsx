import React, { useState } from "react";
import Banner from "./components/banner";
import SearchArea from "./components/search_area";
import SortArea from "./components/sort_area";
import Footer from "./components/footer";
import { Tabs, Tab } from "react-bootstrap";
import Info from "./components/Info";
import FeedbackTab from "./components/FeedbackTab";
import Sidebardoctor from "../layouts/Sidebar";
import Header from "../layouts/Header";

function ConsultantDetail() {
  const [key, setKey] = useState("info");
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
          {/* details row */}
          <div className="row mt-5 p-2 mb-3 bg-white rounded">
            <div className="col-3">
              <img
                height="453"
                width="384"
                src="../src/assets/img/doctors/rectangle-103-6@2x.png"
                alt=""
              />
            </div>
            <div className="col-9">
              <h1 className="fw-bold text-black">Dr. Sathesh Bathema</h1>
              <div className="row pt-3">
                <div className="col-8">
                  <p className="fs-4">
                    BDS, Doctor of Dental Surgery (DDS) 16 years of experience
                    Cosmetic/Aesthetic Dentist, Dentist, Dental Surgeon
                  </p>
                </div>
                <div className="col-4">
                  <button className="bg-black text-white fw-bold ps-5 pe-5 pt-3 pb-3 fs-4">
                    Give Feedback
                  </button>
                </div>
              </div>

              <div className="row pt-3">
                <br />
                <div className="col-1 pt-1">
                  <img
                    src="../src/assets/img/doctors/thumb-up.png"
                    height="50"
                    widdth="53"
                    alt=""
                  />
                </div>
                <div className="col-11">
                  <p style={{ color: "#128B0F" }} className="fs-5">
                    <b>
                      {" "}
                      <br /> 79%
                    </b>{" "}
                    {"(1234)"} votes
                  </p>
                </div>
              </div>

              <p className="fs-4">
                {" "}
                <br /> Dr. Satheesh B. is a dentist, has 16years of experience.
                You can find various information about me on PayMax
              </p>

              <a href="#" className="fw-bold fs-4 text-black pt-3 ps-2">
                SHARE
              </a>
            </div>
          </div>

          {/* tab row */}
          <div className="row p-4">
            <Tabs
              id="controlled-tab-example"
              defaultActiveKey="info"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="info" title="Info" className="bg-white" style={{marginTop:"-40px", marginLeft:"-12px"}}>
                  <Info/>
              </Tab>

              <Tab eventKey="feedback" title="Feedback(67)" className="bg-white" style={{marginTop:"-40px", marginLeft:"-12px"}}>
                <FeedbackTab/>
              </Tab>
              <Tab eventKey="consult" title="Consult(QA)" className="bg-white" style={{marginTop:"-40px", marginLeft:"-12px"}} disabled>
                <p>Consult</p>
              </Tab>
              <Tab eventKey="healthfead" title="Health Feed" className="bg-white" style={{marginTop:"-40px", marginLeft:"-12px"}} disabled>
                <p>Health Feed</p>
              </Tab>
            </Tabs>
          </div>

          <Footer />
        </div>
      </div>

        </div>
      </div>
    </div>
    
  );
}

export default ConsultantDetail;
