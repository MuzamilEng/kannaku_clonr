import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { InputGroup, FormControl, Form } from "react-bootstrap";
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';

import GoogleMapReact from "google-map-react";
import LocationPin from "./components/LocationPin";

const MapLocation = (props) => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }


    const location = {
        address:
          "New Road, Ester Close, Badore road, Ajah Lagos State, Nigeria LandMark: Pearl Prestige, Bus stop",
        lat: 37.42216,
        lng: -122.08427,
      };

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
                                        <h5><b>Map Location</b></h5>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 1/3</small>
                                    </div>
                                </div>
                                <form action="">


                                    <label htmlFor="name">Phone Number</label>
                                    <InputGroup className="mb-4" id="name">
                                         <FormControl
                                            placeholder="+628654654654"
                                            aria-label="Type Phone Number"
                                            aria-describedby="basic-addon1"
                                        />
                                        <span style={{color:"lightgray"}}>Note: Patient calls will be directed to this number. You can update it later also.</span>
                                    </InputGroup>
                                    
                                    
                                    <label htmlFor="name">Email Address</label>
                                    <InputGroup className="mb-4" id="name">
                                         <FormControl
                                            placeholder="Type Email Address"
                                            aria-label="Type Email Address"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <Form.Group controlId="form.Name" className='mb-2'>
                                        <Form.Label>Street Address</Form.Label>
                                        <Form.Control as="select">
                                            <option>Select Street Address</option>
                                            <option>option 1</option>
                                            <option>option 2</option>
                                        </Form.Control>
                                    </Form.Group>
                                    
                                    <span className='mt-2'>Drag n drop the pin to your location:</span>
                                    <h6 style={{color:"#14BEF0"}}> USE CURRENT LOCATION</h6>
                                    <div className="row">
                                        <div className="map mt-3 rounded">
                                        <div className="google-map">
                                            <GoogleMapReact
                                                bootstrapURLKeys={{
                                                    //   your Api key here
                                                    key: "AIzaSyBt624gLn64GjAfNwU4cSsV7KhuNucNGDw",
                                                }}
                                                defaultCenter={location}
                                                defaultZoom={17}
                                                height="60px"
                                                >
                                                <LocationPin
                                                    lat={location.lat}
                                                    lng={location.lng}
                                                    text={location.address}
                                                />
                                            </GoogleMapReact>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                        <Link href="/profile/profile">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>
                                           
                                        </div>
                                        <div className="col-6">
                                        <Link href="/profile/establishmenttimings">
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
                                    <Idea message="This information helps us perform critical checks to ensure that only licensed and genuine medical practitioners are listed on Practo. Your profile will get a “Verified” badge on verification. Doctors with verified profiles get 95% more patient views on Practo."/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default MapLocation;

