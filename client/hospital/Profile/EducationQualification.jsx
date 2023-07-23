import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';

const EducationQualification = (props) => {
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
                                        <h5><b>Education Qualification</b></h5>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 3/5</small>
                                    </div>
                                </div>
                                <form action="">
                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>Degree</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Degree</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>College/Institute</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select College/Institute</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>Year of Completion</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Year of Completion</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>Year of Expriece</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Year of Expriece</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                        <Link href="/profile/medicalregistration">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>
                                            
                                        </div>
                                        <div className="col-6">
                                        <Link href="/profile/connectpractice">
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
                                    <Idea message="On Practo, doctors are listed under the relevant specializations based on their academic degrees.
Both, education and years of experience, showcase doctor’s expertise and are among the top 3 things that patients consider while making their decision"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default EducationQualification;

