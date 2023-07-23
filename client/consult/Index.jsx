import React from "react";
import Banner from "./components/banner";
import SearchArea from "./components/search_area";
import SortArea from "./components/sort_area";
import Footer from "./components/footer";
import Doctor from "./components/doctor";
import doctorsdata from "../json/doctors";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

function Doctors() {
  return (
    <div className="main-wrapper">
      <Header/>
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <Banner />
          <SearchArea />
          <SortArea />
          <div className="row">
            <div className="col-12 doctor-body">
              <div className="row ms-5 p-3">
                <h2 className="fw-bold" style={{ color: "#072F15" }}>
                  Featured Health Insurance Providers
                </h2>
              </div>

              <div className="row p-3">
                {doctorsdata.map((data, index) => {
                  return (
                    <div key={index} className="col-md-4 ps-4 pe-4 pb-4">
                      <Doctor doctor={data} />
                    </div>
                  );
                })}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
