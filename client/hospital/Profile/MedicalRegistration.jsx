import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import Link from 'next/link'
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';
import { useRouter } from 'next/router';

const MedicalRegistration = (props) => {
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
                            <Progress progress={30} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row mb-5">
                                    <div className="col-8">
                                        <h5><b>Medical Registration</b></h5>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 2/5</small>
                                    </div>
                                </div>
                                <form action="">
                                    <label htmlFor="name">Registration Number</label>
                                    <InputGroup className="mb-4" id="name">
                                        <FormControl
                                            placeholder="Type registration number"
                                            aria-label="Type registration number"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Group controlId="form.Name" className='mb-2'>
                                        <Form.Label>Registration Council</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Registration Council</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>



                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>Registration Year</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Registration Year</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                            <Link href="/profile/registration">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="col-6">
                                            <Link href="/profile/educationqualification">
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
                                    <Idea message="This information helps us perform critical checks to ensure that only licensed and genuine medical practitioners are listed on Practo. Your profile will get a “Verified” badge on verification. Doctors with verified profiles get 95% more patient views on Practo." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default MedicalRegistration;

