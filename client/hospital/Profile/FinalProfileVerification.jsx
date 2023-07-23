import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import Idea from './components/Idea';
import checkcircle from "../../assets/img/icons/check-circle.png";
import createprofile from "../../assets/img/createprofile.png";

const FinalProfileVerification = (props) => {
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
                                        <li className="breadcrumb-item"><Link href="/index"><a>Dashboard</a></Link></li>
                                        <li className="breadcrumb-item active">Profile</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}

                        <div className="row">
                            <div className="col-6">
                                <h4><b>Great Progress!</b></h4>
                                <p>Your profile is just few steps away from going live.</p>
                                <div className="row">
                                    <small>Section A: Profile details</small>
                                    <p>Doctor’s basic details, medical registration, education qualification, establishment details etc.</p>
                                     <div className="col-1">
                                         <Image layout="responsive" src={checkcircle} alt="" />
                                     </div>
                                     <div className="col-6">
                                        <Link style={{color:"#14BEF0"}} href="/profile/profile"><a>Change</a></Link>
                                     </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <small>Section B: Profile verification</small>
                                    <p>Doctor’s basic details, medical registration, education qualification, establishment details etc.</p>
                                    <div className="col-1">
                                         <Image layout="responsive" src={checkcircle} alt="" />
                                     </div>
                                     <div className="col-6">
                                        <Link style={{color:"#14BEF0"}} href="/profile/profile"><a>Change</a></Link>
                                     </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <small>Step C: Start getting patients</small>
                                    <p>Location, Timings, Fees</p>
                                    <div className="col-1">
                                         <Image layout="responsive" src={checkcircle} alt="" />
                                     </div>
                                     <div className="col-6">
                                        <Link style={{color:"#14BEF0"}} href="/profile/profile"><a>Change</a></Link>
                                     </div>
                                </div>
                                <hr />

                                <div className="row p-2">
                                    <Idea message="Basic details about your practice helps patients reach you easily for appointment booking and inquiries."/>
                                </div>
                                

                            </div>
                            <div className="col-6 p-4">
                                <Image layout="responsive" src={createprofile} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default FinalProfileVerification;

