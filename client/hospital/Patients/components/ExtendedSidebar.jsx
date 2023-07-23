import React from 'react'

import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

function ExtendedSidebar({styleForActiveLink}) {
    return (
        <>
            <div className="row">
                <div className="col-10">
                    <h5 style={{ color: "#28328C" }}> <span>Client</span></h5>
                </div>
                <div className="col-1"><FeatherIcon className="fs-3" icon="chevron-down" /></div>
            </div>

            <div id="calendar-events" className="mb-3">
                <Link href="/patients/profile">
                    <div className="calendar-events" style={{ styleForActiveLink }}>Profile</div>
                </Link>
                <Link href="/patients/appointment">
                    <div className="calendar-events" >Appointment</div>
                </Link>
            </div>
        </>
    )
}

export default ExtendedSidebar