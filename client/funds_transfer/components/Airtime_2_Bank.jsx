import React, { useEffect, useState } from "react";
import Select2 from "react-select2-wrapper";

const Bank = () => {
  const [bankNameOptions, setBanknameOptions] = useState([
    { id: 1, text: "GTB" },
    { id: 2, text: "UBA" },
    { id: 3, text: "First Bank of Nigeria" },
  ]);
  const [ReceiveBankNameOptions, setReceiveBankNameOptions] = useState([
    { id: 1, text: "GTB" },
    { id: 2, text: "UBA" },
    { id: 3, text: "First Bank of Nigeria" },
  ]);
  return (
    <>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">My Phone Number </label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="081-2323-2323"
            aria-label="amount"
            aria-describedby="basic-addon1"
            readOnly
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">My Airtime Value</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="mySpanClass input-group-text" id="basic-addon1">
                ₦
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="N,2000"
              aria-label="amount"
              aria-describedby="basic-addon1"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Airtime to Cash</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="mySpanClass input-group-text" id="basic-addon1">
                ₦
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="N1,2000"
              aria-label="amount"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>

      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Value to Receive</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="mySpanClass input-group-text" id="basic-addon1">
                ₦
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="N1,200.00"
              aria-label="amount"
              aria-describedby="basic-addon1"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Account Number</label>
        <div className="col-lg-7">
          <input
            type="number"
            className="form-control"
            id="bankaccount"
            placeholder="My registered Account Number"
            value=""
            readOnly
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Destination Bank </label>
        <div className="col-lg-7">
          <Select2
            className="w-100"
            data={ReceiveBankNameOptions}
            options={{
              placeholder: "Select Destination Bank",
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Bank;
