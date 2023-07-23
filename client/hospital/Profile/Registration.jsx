import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Link from 'next/link'
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton, InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import Image from 'next/image'
import createprofile from "../../assets/img/createprofile.png"
import { useRouter } from 'next/router';

  

const Registration = (props) => {
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
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/index">
                                                <a>Dashboard</a>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Registration</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}

                        <div className="row">
                            <div className="col-6">
                                <h4>Hello Dr. Jamhur Ghifari! Lets build your dedicated profile.</h4>
                                <p>Section A: Profile details</p>
                                <form action="">
                                    <label htmlFor="name">Name</label>
                                    <InputGroup className="mb-3" id="name">
                                        <InputGroup.Text id="basic-addon1">Dr./Mr./Ms</InputGroup.Text>
                                        <FormControl
                                            placeholder="City or Location"
                                            value="Jamhur Ghifari"
                                            aria-label="City or Location"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Group controlId="form.Name" className='mb-3 mt-4'>
                                        <Form.Label>Specialization</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Specialization</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <label htmlFor="gender">Gender</label> <br />
                                    <Form.Check
                                        inline
                                        label="Male"
                                        name="male"
                                        type="radio"
                                        id="gender"
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        name="female"
                                        type="radio" 
                                        id="gender"
                                    />
                                    <Form.Check
                                        inline
                                        label="Other"
                                        name="other"
                                        type="radio"
                                        id="gender"
                                    />

                                    <Form.Group controlId="form.Name" className='mb-2 mt-4'>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select City</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Link href="/profile/medicalregistration">
                                                <a>
                                                    <div className="row p-2 mt-2">
                                                        <ContinueButton />

                                                    </div>
                                                </a>
                                            </Link>
                                    
                                </form>
                            </div>
                            <div className="col-6 p-4">
                                <Image src={createprofile} alt="" layout='responsive'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default Registration;

