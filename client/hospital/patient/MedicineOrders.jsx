import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import {img1} from "../../_components/imagepath"

import FeatherIcon from 'feather-icons-react';



const MedicineOrders = (props) => {
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
                                            <h5><b>Medication Data</b></h5>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <br />
                                        <p style={{color:"darkblue"}}>Ibuprofen</p>
                                        <div className="row">
                                            <div className="col-6">
                                                <p>Dosage</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>400Mg</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>How Often</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>2x / Day</p>   
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Time of Day taken</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>1PM</p>  
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Reason</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}> <b>Mild pain</b> </p>   
                                            </div>
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Prescribing</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}> <b>Dr. James Sulivan</b> </p>   
                                            </div>
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Currently Taking</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end", color:"lightblue"}}> <b>Yes</b> </p>   
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="card">
                                    <div className="card-body">
                                        <h4>Records</h4>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medicine 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medicine 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medicine 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medicine 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medicine 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
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
export default MedicineOrders;