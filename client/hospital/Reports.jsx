import React, { useState } from 'react';
import Link from 'next/link'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';
import CampaignComponent from './communications/components/CampaignComponent';

const Reports = (props) => {
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
                                    <h3 className="page-title">Reports</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/index"><a>Dashboard</a></Link></li>
                                        <li className="breadcrumb-item active">Reports</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}

                        <div className="row">
                            <h5 className="card-title mt-2" style={{ color: "#28328C" }}>Clinic Name</h5>
                            <hr />
                            <div className="card bg-white calendarIndex">
                                <div className="card-body">
                                    <div className="row ps-2">
                                        <div className="col-3">Category:</div>
                                        <div className="col-3">From:</div>
                                        <div className="col-3">To:</div>
                                    </div>
                                    <div className="row p-2">
                                        <div className="col-3">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Category"
                                                id="basic-addon1"
                                                className="w-full"
                                            >
                                                <Dropdown.Item href="#">Income</Dropdown.Item>
                                                <Dropdown.Item href="#">Payments</Dropdown.Item>
                                                <Dropdown.Item href="#">Sales</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div className="col-3">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="20 May 2022"
                                                id="basic-addon1"
                                                className="w-full"
                                            >
                                                <Dropdown.Item href="#">20 May 2022</Dropdown.Item>
                                                <Dropdown.Item href="#">21 May 2022</Dropdown.Item>
                                                <Dropdown.Item href="#">22 May 2022</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div className="col-3">
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="30 May 2022"
                                                id="basic-addon1"
                                                className="w-full"
                                            >
                                                <Dropdown.Item href="#">30 May 2022</Dropdown.Item>
                                                <Dropdown.Item href="#">01 June 2022</Dropdown.Item>
                                                <Dropdown.Item href="#">02 June 2022</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                        <div className="col-1">
                                            <button className='btn border'>Mail</button>
                                        </div>
                                       
                                        <div className="col-1">
                                            <button className='btn' style={{ backgroundColor: "#14BEF0" }}>Print</button>
                                        </div>
                                    </div>

                                    <div className="row p-2 mt-2">
                                        <h5>Summary</h5>
                                    </div>
                                    <CampaignComponent/>
                                    <div className="row p-2 mt-2">
                                        <h5>Details</h5>
                                    </div>
                                    <CampaignComponent/>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default Reports;

