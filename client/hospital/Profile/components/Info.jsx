import React from "react";

function Info() {

    return (
        <div className="row pt-5 ps-3 pe-3">
            <div className="col-5">
                <p><b>St. Imam Bonjo, Denpasar</b></p>
                <h6 style={{ color: "#14BEF0" }}> <b>Maria Dharma Perfect Dental Care</b> </h6>
                <div className="row p-1">
                    <div className="col-1">
                        <img
                            src="/src/assets/img/doctors/thumb-up.png"
                            style={{ height: "25px", width: "27px" }}
                            alt=""
                        />
                    </div>
                    <div className="col-9 pt-2">
                        <span style={{ color: "#14BEF0" }}>95% {"(120 votes)"}</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris, mauris, nulla.</p>
                <p style={{ color: "#14BEF0" }}>GET DIRECTION</p>
            </div>

            <div className="col-4">
                <span><b>MON-FRI</b></span>
                <p>08:00AM:05:00PM</p>
                <span><b>SAT</b></span>
                <p>08:00AM:05:00PM</p>
                <button className="btn" style={{ backgroundColor: "#14BEF0" , color:"white" }}>Book Appointment</button>
            </div>

            <div className="col-3">
                <h4 style={{ color: "#14BEF0" }}>$1000</h4>
                <p>/Appointment</p>
            </div>
            <br />
            <hr />
        </div>
    );
}

export default Info;
