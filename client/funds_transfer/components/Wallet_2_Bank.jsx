import React, { useEffect, useState } from 'react';

const Wallet_2_Bank = () => {
    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">My Cashback Value</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="mySpanClass input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" placeholder="25,000" aria-label="amount" aria-describedby="basic-addon1" readOnly />
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount to Transfer</label>
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
export default Wallet_2_Bank;