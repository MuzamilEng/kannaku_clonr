import React, { useState } from 'react';
import Link from "next/link";
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';

import { img1 } from '../../_components/imagepath';
import FeatherIcon from 'feather-icons-react';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";


const TimeLine = (props) => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    return (

        <>
            <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

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
                                        <li className="breadcrumb-item"><Link href="/index">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Clients</li>
                                        <li className="breadcrumb-item active">Time Line</li>
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
                                        <h5 className="card-title mt-2" style={{ color: "#28328C" }}>James s. </h5>

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
                      <div className="calendar-events" style={{ backgroundColor: "#14BEF0", color: "white" }}>Time Line</div>
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
                      <div className="calendar-events">Invoices</div>
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
                                        <input className='form-control' placeholder='Search Client Name/ Id / Phone' />
                                        <div className="row mt-2">
                                            <div className="col-3">
                                               
                                            </div>
                                            <div className="col-9">
                                               <div className="row">
                                                   <div className="col-3">
                                                    <button className='btn border'><small>Email Case Sheet</small></button>
                                                   </div>
                                                   <div className="col-3">
                                                    <button className='btn border'><small>Dot Matrix Print</small></button>
                                                   </div>
                                                   <div className="col-3">
                                                    <button className='btn border'><small>Customize Print</small></button>
                                                   </div>
                                                   <div className="col-3">
                                                   <button className='btn' style={{ backgroundColor: "#14BEF0" }}> <small>Print Case Sheet</small> </button>
                                                   </div>
                                                  
                                               </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mt-3">
                                            <div className="col-3">
                                                <label htmlFor="doctorshours"><b>Types</b></label> <br />
                                                <Form.Check
                                                    label="Appointment"
                                                    name="same"
                                                    type="checkbox"
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Files"
                                                    name="different"
                                                    type="checkbox" 
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Client Notes"
                                                    name="different"
                                                    type="checkbox" 
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Prescriptions"
                                                    name="same"
                                                    type="checkbox"
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Treatment Plans"
                                                    name="different"
                                                    type="checkbox" 
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Procedures"
                                                    name="same"
                                                    type="checkbox"
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Invoices"
                                                    name="different"
                                                    type="checkbox" 
                                                    id="doctorshours"
                                                /> 
                                                <Form.Check
                                                    label="Payments"
                                                    name="different"
                                                    type="checkbox" 
                                                    id="doctorshours"
                                                /> 
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div className="col-2"></div>
                                                    <div className="col-1">
                                                        <div className="row" style={{height:"400px", width:"4px", backgroundColor:"#14BEF0"}}>
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <div className="row border rounded p-2 mb-3">
                                                            <h6>13 May 2022</h6>
                                                            <p>Client Notes Added</p>
                                                            <p style={{color:"#14BEF0"}}>SHOW MORE</p>
                                                        </div>
                                                        <div className="row border rounded p-2 mb-2">
                                                            <h6>10 May 2022</h6>
                                                            <p>Client Notes Added</p>
                                                            <p style={{color:"#14BEF0"}}>SHOW MORE</p>
                                                        </div>
                                                        <div className="row border rounded p-2">
                                                            <h6>08 May 2022</h6>
                                                            <p>Client Notes Added</p>
                                                            <p style={{color:"#14BEF0"}}>SHOW MORE</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

}
export default TimeLine;

