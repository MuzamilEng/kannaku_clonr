import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';

const EstablishmentDetails = (props) => {
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
                            <Progress progress={100} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row mb-5">
                                    <div className="col-8">
                                        <h5><b>Establishment basic details</b></h5>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 4/5</small>
                                    </div>
                                </div>
                                <form action="">
                                    <label htmlFor="name">Establishment Name</label>
                                    <InputGroup className="mb-4" id="name">
                                        <FormControl
                                            placeholder="Type registration establishment name"
                                            aria-label="Type registration establishment name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select City</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>Locality</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Locality</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                            <Link href="/profile/connectpractice">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="col-6">
                                            <Link href="/profile/profileverification">
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
                                    <Idea message="Basic details about your practice helps patients reach you easily for appointment booking and inquiries." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default EstablishmentDetails;

