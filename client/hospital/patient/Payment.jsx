import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import {img1} from "../../_components/imagepath"

const Appointments = (props) => {
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
                            <div className="card p-5">
                                <div className="row mt-5 pt-5">
                                    <div className="col-3">
                                        <button className='btn' style={{color:"white", backgroundColor:"#14BEF0"}}>Accept Payment</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn border' style={{color:"black", backgroundColor:"white"}}>Decline Payment</button>
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
export default Appointments;

