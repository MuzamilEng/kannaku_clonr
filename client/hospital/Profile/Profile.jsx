import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Tabs, Tab } from "react-bootstrap";
import Info from './components/Info';
import FeedbackTab from './components/FeedbackTab';
import Image from 'next/image';

import thumbUp from "../../assets/img/doctors/thumb-up.png";
import profilebg from "../../assets/img/doctors/profilebg.png"
import profile from "../../assets/img/doctors/profile.png"

const Profile = (props) => {
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    const [key, setKey] = useState("info");
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

                        <div className="row">
                            <div className="col-12">
                                <Image layout='responsive' style={{ marginLeft: "-30px", marginRight: "-30px", width: "1300px", height: "262px" }} src={profilebg} alt="" />

                            </div>
                            <div className="col-12">
                                <div className="row justify-content-center">
                                    <Image layout='responsive' style={{ marginTop: "-70px", height: "156px", width: "156px" }} src={profile} alt="" />
                                    <br />

                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4">
                                        <h1>Jamhur Ghifari</h1>
                                        D.B.S {"(Ind)"}, D.D.S{"(USA)"}, Fellowship in Implantology{"(USA)"}, CBM{"(USA)"}, PGDMLE{"(Ind)"}, Fellowship in Orthodntics Denstist.
                                        <div className="row p-1">
                                            <div className="col-1">
                                                <Image layout='responsive'
                                                    src={thumbUp}
                                                    style={{ height: "25px", width: "27px" }}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-9 pt-2">
                                                <span style={{ color: "#14BEF0" }}>95% {"(120 votes)"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="row p-4">
                                    <Tabs
                                        id="controlled-tab-example"
                                        defaultActiveKey="info"
                                        activeKey={key}
                                        onSelect={(k) => setKey(k)}
                                        className="mb-3"
                                    >
                                        <Tab eventKey="info" title="Info" className="bg-white" style={{ marginTop: "-40px", marginLeft: "-12px" }}>
                                            <Info />
                                            <Info />
                                        </Tab>

                                        <Tab eventKey="feedback" title="Feedback(67)" className="bg-white" style={{ marginTop: "-40px", marginLeft: "-12px" }}>
                                            <FeedbackTab />
                                            <FeedbackTab />
                                            <FeedbackTab />
                                        </Tab>
                                        <Tab eventKey="consult" title="Consult(QA)" className="bg-white" style={{ marginTop: "-40px", marginLeft: "-12px" }} disabled>
                                            <p>Consult</p>
                                        </Tab>
                                        <Tab eventKey="healthfead" title="Health Feed" className="bg-white" style={{ marginTop: "-40px", marginLeft: "-12px" }} disabled>
                                            <p>Health Feed</p>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default Profile;

