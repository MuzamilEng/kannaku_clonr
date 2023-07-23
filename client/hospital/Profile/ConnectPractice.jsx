import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';

import { Form, Col, Row } from "react-bootstrap";

const ConnectPractice = (props) => {
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
                            <Progress progress={80} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row mb-5">
                                    <div className="col-8">
                                        <h5><b>Connect a Practice</b></h5>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 4/5</small>
                                    </div>
                                </div>
                                <form action="">
                                    <fieldset>
                                        <Form.Group>
                                        <Form.Label>
                                            Please Selectany of the following:
                                        </Form.Label>
                                      
                                        <Form.Check
                                            type="radio"
                                            label="I own a establishment"
                                            name="practice"
                                            id="practice1"
                                            />
                                            <Form.Check
                                            type="radio"
                                            label="I visit a establishment"
                                            name="practice"
                                            id="practice2"
                                            />
                                        
                                        </Form.Group>
                                    </fieldset>
                                    <span style={{color:"gray"}}>Note: You can add multiple establishments one by one.</span>
                                    <br />
                                    <br />
                                    <hr />
                                    <div className="row ps-1">
                                        <div className="col-6">
                                        <Link href="/profile/educationqualification">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>
                                           
                                        </div>
                                        <div className="col-6">
                                        <Link href="/profile//establishmentdetails">
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
                                <Idea  message="Patients often search for doctors by locality. Therefore, adding all your practice establishments ensures that your profile is visible to patients in all the relevant searches."/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default ConnectPractice;

