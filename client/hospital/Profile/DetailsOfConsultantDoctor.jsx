import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';

const DetailsOfConsultantDoctor = (props) => {
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
                                        <h5><b>Details of Consultant Doctor</b></h5>
                                        <span><b>Jamhur Ghifari</b></span>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 3/3</small>
                                    </div>
                                </div>
                                <form action="">
                                    <label htmlFor="name">Consultation Fees</label>
                                    <InputGroup className="mb-3" id="name">
                                        <InputGroup.Text id="basic-addon1">Rs.</InputGroup.Text>
                                        <FormControl
                                            placeholder="Type Consultation fee"
                                            
                                            aria-label="Type Consultation fee"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <label htmlFor="doctorshours">Doctors Hours</label> <br />
                                    <Form.Check
                                        // block
                                        label="Same as establishment hours"
                                        name="same"
                                        type="radio"
                                        id="doctorshours"
                                    />
                                    <Form.Check
                                        // block
                                        label="Different from establishment hours"
                                        name="different"
                                        type="radio" 
                                        id="doctorshours"
                                    />
                                   <p style={{color:"lightgray"}}>Note: you can add more doctors later.</p >
                                   <br />
                                   <hr />
                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                            <Link href="/profile/establishmenttimings">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="col-6">
                                            <Link href="/profile/profile">
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
                                    <Idea message="2.5M patients are looking for a doctor on Practo. Verify your credentials and reach out to them"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default DetailsOfConsultantDoctor;

