


import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import {img1} from "../../_components/imagepath"

const LabTest = (props) => {
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
                            <div className="row align-items-center bg-white p-2" >
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <span className="user-img">
                                                <img src={img1} alt="" />

                                            </span>
                                        </div>
                                        <div className="col-10">
                                            <h6>Jamhur Ghifari</h6>
                                            <span>+628309232142314</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5">

                                </div>
                                <div className="col-3">
                                    <div className="row justify-content-end">

                                    <button className='btn' style={{color:"white", backgroundColor:"#14BEF0"}}>Upload Records</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}
                       
                        <div className="row">
                            
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                       
                                        <div className="row">
                                            <div className="col-6">
                                                <p>Registration Date</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>12-03-2021</p>
                                            </div>
                                        </div>
                                        <br />
                                        <h5><b>Personal Data</b></h5>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Patient Name</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>Clinton Loomish</p>   
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Date of birth</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>01-01-1998</p>  
                                            </div>
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Address</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><b>9705 Tunnel Ave. New York, NY 10016</b></p> 
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Medicine Case</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end", color:"red"}}>Heart Attack</p>   
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5><b>Laboratory Test Result</b></h5>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                                <p>Time</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>12-03-2021</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Rate</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>90</p>   
                                            </div>
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Rate</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>90</p>   
                                            </div>
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Rate</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>90</p>   
                                            </div>
                                            <br />

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Signed by</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end", color:"lightblue"}}>Dr. Bryan O’Conor</p>   
                                            </div>
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
export default LabTest;




