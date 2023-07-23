import React, { useEffect, useState } from "react";
import Select2 from "react-select2-wrapper";

const Postpaid = () => {
  const [discoOptions, setDiscoOptions] = useState([
    { id: 1, text: "EKO" }, 
    { id: 2, text: "Ikeja" },
    { id: 3, text: "Ibadan" },
    { id: 4, text: "Abuja" },
  ]);
  const [formType, setFormType] = useState("");

  const [postpaidOptions, setPostpaidOptions] = useState([
    { id: 1, text: "Loss of Revenue" },
    { id: 2, text: "Reconnection" },
  ]);
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
                {discoOptions?.map((telco) => (
          <option key={telco?.id} value={telco?.text}>
            {telco.text}
          </option>
        ))}
          </select>
          {/* <Select2
            className="w-100"
            data={discoOptions}
            options={{
              placeholder: "Select Disco ",
            }}
          /> */}
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Remittance Plan </label>
        <div className="col-lg-7">
          <Select2
            className="w-100"
            data={postpaidOptions}
            options={{
              placeholder: "Select Plan",
            }}
            // onChange={setDiscoOptions(discoOptions)}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Account Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="Meter Account Number"
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
              onChange={changeTelco}
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
export default Postpaid;
