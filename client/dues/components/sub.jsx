import React, { useEffect, useState } from 'react';
import Select2 from 'react-select2-wrapper';


const Sub = () => {
    const [subOptions, setSubOptions] = useState([
        { id: 1, text: 'MTN' },
        { id: 2, text: 'GLO' },
        { id: 3, text: '9Mobile' },
        { id: 4, text: 'Airtel' }
    ]);
    const [groupOptions, setGroupOptions] = useState([
        { id: 1, text: '1GB' },
        { id: 2, text: '2GB' },
        { id: 3, text: '3GB' },
        { id: 4, text: '4GB' }
    ]);
    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Telco Provider </label>
                <div className="col-lg-7">
                    <Select2
                        className="w-100"
                        data={telcoOptions}
                        options={{
                            placeholder: 'Select Telco Provider',
                        }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Data Plan </label>
                <div className="col-lg-7">
                    <Select2
                        className="w-100"
                        data={dataOptions}
                        options={{
                            placeholder: 'Select Data Plan',
                        }}
                    />
                </div>
            </div>



            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Mobile Number</label>
                <div className="col-lg-7">
                    <input type="tel" className="form-control" id="tel" placeholder="Mobile Phone Number" value="" />
                </div>
            </div>



            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="mySpanClass input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby="basic-addon1" readOnly />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sub;