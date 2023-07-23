import React, { useEffect, useState } from 'react';
import Select2 from 'react-select2-wrapper';


const Airtime = () => {

    const [telcoOptions, setTelcoOptions] = useState([
        { id: 1, text: 'MTN' },
        { id: 2, text: 'GLO' },
        { id: 3, text: '9Mobile' },
        { id: 4, text: 'Airtel' }
    ]);
    const [formType, setFormType] = useState("");

    function changeForm(event) {
        setFormType(event.target.value);
        console.log("Hi there, user!", event.target.value);
    }

    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Telco Provider </label>
                <div className="col-lg-7">
                    <Select2
                        className="w-100"
                        data={telcoOptions}
                        onChange={changeForm}
                        options={{
                            placeholder: 'Select Telco Provider',
                        }}
                    />
                </div>
            </div>
            {/* <div className="form-group row">
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
            </div> */}
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Mobile Number</label>
                <div className="col-lg-7">
                    <input type="tel" className="form-control" id="tel" placeholder="Mobile Phone Number" onChange={changeForm} value="" />
                </div>
            </div>



            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="mySpanClass input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" onChange={changeForm} placeholder="Amount" aria-label="amount" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Airtime;