import React, { useState } from "react";
import Link from "next/link";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import UpcomingComponent from "./components/UpcomingComponent";
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

const Upcoming = (props) => {
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
                  <h3 className="page-title">Communications</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/index">
                        <a>Dashboard</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Communications</li>
                    <li className="breadcrumb-item active">Upcoming</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  /Page Header */}

            <div className="row">
              <div className="col-lg-3 col-md-4 bg-white">
                <h4 className="card-title mt-2" style={{ color: "#28328C" }}>
                  Clinic Name
                </h4>
                <hr />

                {/* communications  */}

                <div id="calendar-events" className="mb-3">
                  <Link href="/communications/campaign">
                    <a>
                      <div className="calendar-events">Campaign</div>
                    </a>
                  </Link>
                  <Link href="/communications/delivery-reports">
                    <a>
                      <div className="calendar-events">Delivery Reports</div>
                    </a>
                  </Link>
                  <Link href="/communications/upcoming">
                    <a>
                      <div
                        className="calendar-events"
                        style={{ backgroundColor: "#14BEF0", color: "white" }}
                      >
                        Upcoming
                      </div>
                    </a>
                  </Link>
                  <Link href="/communications/sms-center">
                    <a>
                      <div className="calendar-events">SMS Center</div>
                    </a>
                  </Link>
                  <Link href="/communications/usage-report">
                    <a>
                      <div className="calendar-events">Usage Report</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="card bg-white calendarIndex">
                  <div className="card-body">
                    <div className="row ">
                      <div className="col-6"></div>
                      <div className="col-6 mb-2">
                        <small>
                          <span style={{ color: "#A7A7A7" }}>
                            Communications Credits:
                          </span>
                          <span style={{ color: "blue" }}>
                            0 SMS Free, 144 SMS Paid
                          </span>
                        </small>
                      </div>
                      <hr />
                    </div>
                    <div className="row">
                      <div className="col-3">
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
                      <div className="col-3">
                        <DropdownButton
                          variant="outline-secondary"
                          title="Transactional SMS"
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
                      <div className="col-2"></div>

                      <div className="col-4">
                        <button
                          className="btn"
                          style={{ backgroundColor: "#14BEF0", color: "white" }}
                        >
                          Add New Campaign
                        </button>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-3">From:</div>
                      <div className="col-3">To:</div>
                    </div>

                    <div className="row">
                      <div className="col-3">
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
                      <div className="col-3">
                        <DropdownButton
                          variant="outline-secondary"
                          title="23 May 2022"
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
                    </div>

                    <div className="row">
                      <UpcomingComponent />
                      <UpcomingComponent />
                      <UpcomingComponent />
                      <UpcomingComponent />
                      <UpcomingComponent />
                      <UpcomingComponent />
                      <UpcomingComponent />
                      <UpcomingComponent />
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
export default Upcoming;
