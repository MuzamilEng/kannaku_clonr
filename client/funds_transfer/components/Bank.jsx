import React, { useEffect, useState } from 'react';
import Select2 from 'react-select2-wrapper';

const Bank = () => {
    const [bankNameOptions, setBanknameOptions] = useState([
        { id: 1, text: 'GTB' },
        { id: 2, text: 'UBA' },
        { id: 3, text: 'First Bank of Nigeria' },

    ]);
    const [ReceiveBankNameOptions, setReceiveBankNameOptions] = useState([
        { id: 1, text: 'GTB' },
        { id: 2, text: 'UBA' },
        { id: 3, text: 'First Bank of Nigeria' },

    ]);
    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">My Bank Name </label>
                <div className="col-lg-7">
                    <Select2
                        className="w-100"
                        data={bankNameOptions}
                        options={{
                            placeholder: 'Select My Registered Bank',
                        }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Account Number</label>
                <div className="col-lg-7">
                    <input type="number" className="form-control" id="bankaccount" placeholder="My registered Account Number" value="" readOnly />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Destination Bank </label>
                <div className="col-lg-7">
                    <Select2
                        className="w-100"
                        data={ReceiveBankNameOptions}
                        options={{
                            placeholder: 'Select Destination Bank',
                        }}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Account Number</label>
                <div className="col-lg-7">
                    <input type="number" className="form-control" id="bankaccount" placeholder="Destination Account Number" value="" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Recipient Name</label>
                <div className="col-lg-7">
                    <input type="text" className="form-control" id="accountName" placeholder="Recipient Name Validated" value="" readOnly />
                </div>
            </div>


            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Phone Number</label>
                <div className="col-lg-7">
                    <input type="tel" className="form-control" id="reg" placeholder="Bind My Registered Tel Number" value="" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="mySpanClass input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Enter Amount to be Transferred" aria-label="amount" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bank;