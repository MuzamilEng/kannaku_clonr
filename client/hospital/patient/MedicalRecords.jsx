import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import {img1} from "../../_components/imagepath"

import FeatherIcon from 'feather-icons-react';



const MedicalRecords = (props) => {
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
                                        <h5><b>Record Detail</b></h5>
                                        <br />
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
                                                <p style={{textAlign:"end"}}><b>9705 Tunnel Ave. New York, NY 10016</b></p> 
                                                <p style={{color:"red", textAlign:"end"}}>Swelling of the Face or Lips</p> 
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Known Allergen</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end", color:"yellow"}}>Be Sting</p>   
                                            </div>
                                        </div>
                                        <br />
                                        <h5><b>Legal Guardian</b></h5>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Relationship</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>John Loomish</p>   
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Emergency Contact</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}>Parent</p>  
                                                <p style={{textAlign:"end"}}><b>9705 Tunnel Ave. New York, NY 10016</b></p> 
                                                <p  style={{textAlign:"end"}}>646-435-3163</p> 
                                            </div>

                                            <div className="col-6">
                                                <p style={{color:"gray"}}>Known Allergen</p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end", color:"yellow"}}>Be Sting</p>   
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
                                                <p><b>Medical Record 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medical Record 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medical Record 1</b></p>
                                            </div>
                                            <div className="col-6">
                                                <p style={{textAlign:"end"}}><FeatherIcon icon="more-vertical"/></p>
                                            </div>
                                        </div>
                                        <div className="row rounded border p-2 mb-2">
                                            <div className="col-6">
                                                <p><b>Medical Record 1</b></p>
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
export default MedicalRecords;