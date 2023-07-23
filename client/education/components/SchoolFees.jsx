import React, { useEffect, useState } from 'react';

const Jamb = () => {
    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">School Type </label>
                <div className="col-lg-7">
                    <select className="form-control">
                        <option>-- Select --</option>
                        <option>Tertiary</option>
                        <option>College</option>
                        <option>KG</option>


                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">School Name </label>
                <div className="col-lg-7">
                    <select className="form-control">
                        <option>-- Select --</option>
                        <option>ABC College</option>
                        <option>Base School</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Academic Session</label>
                <div className="col-lg-7">
                    <select className="form-control">
                        <option>-- Select --</option>
                        <option>2021/2022</option>
                        <option>2022/2023</option>
                        <option>2023/2024</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Semester/Term</label>
                <div className="col-lg-7">
                    <select className="form-control">
                        <option>-- Select --</option>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Reg Or Matric Number</label>
                <div className="col-lg-7">
                    <input type="text" className="form-control" placeholder="Your Reg or Matric Number" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Student Name</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">

                        </div>
                        <input type="text" className="form-control" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Phone Number</label>
                <div className="col-lg-7">
                    <input type="text" className="form-control" placeholder="Your Phone Number" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jamb;