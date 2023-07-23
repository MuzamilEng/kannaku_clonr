import React, { useEffect, useState } from 'react';

const Jamb = () => {
    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">WAEC Package  </label>
                <div className="col-lg-7">
                    <select className="form-control">
                        <option>-- Select --</option>
                        <option>WAEC PIN</option>
                        <option>GCE PIN</option>
                        <option>NECo/GCE Form</option>
                    </select>
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
                            <span className="mySpanClass input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Jamb;