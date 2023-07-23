import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';

const EstablishmentTimings = (props) => {
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
                                    <h3 className="page-title">Profile</h3>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}
                        <div className="row mb-5" style={{ marginLeft: "-50px", marginTop: "-10px", height: "1px", color: "#28328C", width: "1200px" }}>
                            <Progress progress={60} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row mb-5">
                                    <div className="col-8">
                                        <h5><b>Establishment Timings</b></h5>
                                        <span>Practice name</span>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 2/3</small>
                                    </div>
                                </div>
                                <form action="">
                                    <label htmlFor="name">Sessions 1</label>
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Control as="select">
                                                <option>09:00AM</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                            </Form.Control>
                                        </div>
                                        <div className="col-6">
                                            <Form.Control as="select">
                                                <option>09:PM</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <br />
                                    <label htmlFor="name">Sessions 2</label>
                                    <div className="row">
                                        <div className="col-6">
                                            <Form.Control as="select">
                                                <option>09:00AM</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                            </Form.Control>
                                        </div>
                                        <div className="col-6">
                                            <Form.Control as="select">
                                                <option>09:PM</option>
                                                <option>option 1</option>
                                                <option>option 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <br />
                                    <hr />
                                    <p style={{ color: "#14BEF0" }}>+ ADD TIMING FOR REMAINING DAYS</p>
                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                            <Link href="/profile/maplocation">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="col-6">
                                            <Link href="/profile/detailsofconsultantdoctor">
                                                <a>
                                                    <div className="row p-2">
                                                        <ContinueButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="col-6 p-4">
                                <div className="row align-items-center justify-content-center">
                                    <Idea message="2.5M patients are looking for a doctor on Practo. Verify your credentials and reach out to them" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default EstablishmentTimings;

