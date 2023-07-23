import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';
import CampaignComponent from './components/CampaignComponent';

import ApexCharts from 'apexcharts';

const DeliveryReports = (props) => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    const invoiceOptions = {
        colors: ['#1ec1b0', '#ff737b'],
        chart: {
            fontFamily: 'Poppins, sans-serif',
            height: 350,
            type: 'donut',
        },
        series: [100, 50],
        labels: ['Sent', 'failed'],
        legend: { show: false },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }

    useEffect(() => {

        let reportColumn = document.getElementById("report_chart");
        let reportChart = new ApexCharts(reportColumn, invoiceOptions);
        reportChart.render();
    }, []);

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
                                    <h3 className="page-title">Communications</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                        <Link href="/index">
                        <a>Dashboard</a>
                      </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Communications</li>
                                        <li className="breadcrumb-item active">Delivery Reports</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}

                        <div className="row">
                            <div className="col-lg-3 col-md-4 bg-white">
                                <h4 className="card-title mt-2" style={{ color: "#28328C" }}>Clinic Name</h4>
                                <hr />

                                {/* communications  */}

                                <div id="calendar-events" className="mb-3">
                                <Link href="/communications/campaign">
                    <a>
                      <div
                        className="calendar-events"
                        
                      >
                        Campaign
                      </div>
                    </a>
                  </Link>
                  <Link href="/communications/delivery-reports">
                    <a>
                      <div className="calendar-events" style={{ backgroundColor: "#14BEF0", color: "white" }}>Delivery Reports</div>
                    </a>
                  </Link>
                  <Link href="/communications/upcoming">
                    <a>
                      <div className="calendar-events">Upcoming</div>
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
                                            <div className="col-6 mb-2" >
                                                <small><span style={{ color: "#A7A7A7" }}>Communications Credits:</span>
                                                    <span style={{ color: "blue" }}>0 SMS Free, 144 SMS Paid</span></small>
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
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
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
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                </DropdownButton>
                                            </div>
                                            <div className="col-2"></div>

                                            <div className="col-4">
                                                <button className='btn' style={{ backgroundColor: "#14BEF0", color: "white" }}>Add New Campaign</button>
                                            </div>

                                        </div>
                                        <hr />

                                        <div className="row"><h5><b>Delivery Reports</b></h5></div>
                                        <div className="row p-2 border mb-1">
                                            <div id="report_chart"> </div>
                                            <hr />
                                            <div className="text-center text-muted">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate"> SMS Sent</p>
                                                            <h5>100</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate">Today</p>
                                                            <h5>50</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate">Las 30 days</p>
                                                            <h5>50</h5>
                                                        </div>
                                                    </div>

                                                    <div className="col-2">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate" style={{ color: "green" }}>Delivered</p>
                                                            <h5>100</h5>
                                                        </div>
                                                    </div>

                                                    <div className="col-2">
                                                        <div className="mt-4">
                                                            <p className="mb-2 text-truncate" style={{ color: "red" }}>Failed</p>
                                                            <h5>50</h5>
                                                        </div>
                                                    </div>
                                                </div>

                                                <br />
                                                <button className='btn' style={{ backgroundColor: "#14BEF0", color:"white" }}>Download Report</button>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="row mt-3"><h5><b>Messages</b></h5></div>
                                        <div className="row">
                                            <CampaignComponent />
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
export default DeliveryReports;

