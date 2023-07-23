import React, { useEffect, useState } from "react";
import Select2 from "react-select2-wrapper";

const Electricity = () => {
  const [telcoOptions, setTelcoOptions] = useState([
    { id: 1, text: "MTN" },
    { id: 2, text: "GLO" },
    { id: 3, text: "9Mobile" },
    { id: 4, text: "Airtel" },
  ]);
  const [formType, setFormType] = useState("");

  function changeForm(event) {
    setFormType(event.target.value);
    console.log("Hi there, user!", event.target.value);
  }
  function changeTelco(event) {
    event.preventDefault();
    setFormType(event.target.value);
    console.log('Hi there, user!', event.target.value);
  }

  return (
    <>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Disco </label>
        <div className="col-lg-7">
        <select
            className="form-control"
            onChange={changeTelco}
            name='select'
            value={formType}
          >
                {telcoOptions?.map((telco) => (
          <option key={telco?.id} value={telco?.text}>
            {telco.text}
          </option>
        ))}
          </select>
          {/* <Select2
            className="w-100"
            data={telcoOptions}
            onChange={changeForm}
            options={{
              placeholder: "Select Disco ",
            }}
          /> */}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Meter Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Meter Number"
            onChange={changeForm}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Amount</label>
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
              onChange={changeForm}
              placeholder="Amount"
              aria-label="amount"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Electricity;
