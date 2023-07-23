import React, { useState } from "react";
import Link from "next/link";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import { img1 } from "../../_components/imagepath";
import InvoicesComponent from "./components/InvoicesComponent";

const Invoices = (props) => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Clients</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/index">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Billing</li>
                    <li className="breadcrumb-item active">Invoices</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  /Page Header */}

            <div className="row">
              <div className="col-lg-3 col-md-4 bg-white">
                <div className="row">
                  <div className="col-2">
                    <span className="user-img">
                      <img src={img1} alt="" />
                      <span className="status online"></span>
                    </span>
                  </div>
                  <div className="col-5">
                    <h5
                      className="card-title mt-2"
                      style={{ color: "#28328C" }}
                    >
                      James s.{" "}
                    </h5>
                  </div>
                  <div className="col-5">
                    <small>Male, 13 years</small>
                  </div>
                </div>
                <hr />

                {/* Clients  */}
                <div className="row">
                  <div className="col-10">
                    <h5 style={{ color: "#28328C" }}>
                      {" "}
                      <span>Client</span>
                    </h5>
                  </div>
                  <div className="col-1">
                    <FeatherIcon className="fs-3" icon="chevron-down" />
                  </div>
                </div>

                <div id="calendar-events" className="mb-3">
                  <Link href="/patients/profile">
                    <a>
                      <div className="calendar-events">Profile</div>
                    </a>
                  </Link>
                  <Link href="/patients/appointment">
                    <a>
                      <div className="calendar-events">Appointment</div>
                    </a>
                  </Link>
                </div>

                {/* EMR  */}
                <div className="row">
                  <div className="col-10">
                    <h5 style={{ color: "#28328C" }}>
                      {" "}
                      <span>EMR</span>
                    </h5>
                  </div>
                  <div className="col-1">
                    <FeatherIcon className="fs-3" icon="chevron-down" />
                  </div>
                </div>

                <div id="calendar-events" className="mb-3">
                  <Link href="/emr/client-notes">
                    <a>
                      <div className="calendar-events">Client Notes</div>
                    </a>
                  </Link>
                  <Link href="/emr/threatment-plan">
                    <a>
                      <div className="calendar-events">Threatment Plan</div>
                    </a>
                  </Link>
                  <Link href="/emr/completed-procedures">
                    <a>
                      <div className="calendar-events">
                        Completed Procedures
                      </div>
                    </a>
                  </Link>
                  <Link href="/emr/files">
                    <a>
                      <div
                        className="calendar-events"
                      >
                        Files
                      </div>
                    </a>
                  </Link>
                  <Link href="/emr/prescription">
                    <a>

                    <div className="calendar-events">Prescription</div>
                    </a>
                  </Link>
                  <Link href="/emr/timeline">
                    <a>
                      <div className="calendar-events">Time Line</div>
                    </a>
                  </Link>
                </div>

                {/* Billing  */}
                <div className="row">
                  <div className="col-10">
                    <h5 style={{ color: "#28328C" }}>
                      {" "}
                      <span>Billing</span>
                    </h5>
                  </div>
                  <div className="col-1">
                    <FeatherIcon className="fs-3" icon="chevron-down" />
                  </div>
                </div>
                <div id="calendar-events" className="mb-3">
                  <Link href="/billing/invoices">
                    <a>
                      <div className="calendar-events" style={{ backgroundColor: "#14BEF0", color: "white" }}>Invoices</div>
                    </a>
                  </Link>
                  <Link href="/billing/payments">
                    <a>
                      <div className="calendar-events">Payments</div>
                    </a>
                  </Link>
                  <Link href="/billing/ledger">
                    <a>
                      <div className="calendar-events">Ledger</div>
                    </a>
                  </Link>
                </div>

              </div>
              <div className="col-lg-9 col-md-8">
                <div className="card bg-white calendarIndex">
                  <div className="card-body">
                    <input
                      className="form-control"
                      placeholder="Search Client Name/ Id / Phone"
                    />
                    <div className="row pt-2 pb-2 mt-2 align-items-center">
                      <div className="col-10">
                        <DropdownButton
                          variant="outline-secondary"
                          title="13 May 2022"
                          id="basic-addon1"
                          className="w-full"
                        >
                          <Dropdown.Item href="#">Action</Dropdown.Item>
                          <Dropdown.Item href="#">Another action</Dropdown.Item>
                          <Dropdown.Item href="#">
                            Something else here
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>

                      <div className="col-2">
                        <button
                          className="btn"
                          style={{ backgroundColor: "#14BEF0", color: "white" }}
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <InvoicesComponent />
                      <InvoicesComponent />
                      <InvoicesComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoices;
