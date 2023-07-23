import React, { useEffect, useState } from "react";
import Select2 from "react-select2-wrapper";

const Goods = () => {
  const [SalesOptions, setSalesOptions] = useState([
    { id: 1, text: "Income" },
    { id: 2, text: "Discount" },
    { id: 3, text: "Other Income" },
  ]);
  const [ItemCategoryOptions, setItemCategoryOptions] = useState([
    { id: 1, text: "Food" },
    { id: 2, text: "Grocery" },
    { id: 3, text: "Medication" },
  ]);
  const [AccountOptions, setAccountOptions] = useState([
    { id: 1, text: "Sales" },
    { id: 2, text: "General Income" },
    { id: 3, text: "Shipping Charge" },
  ]);
  const [PurchaseOptions, setPurchaseOptions] = useState([
    { id: 1, text: "Cost of Goods Sold" },
    { id: 2, text: "Expenses" },
    { id: 3, text: "Logistics" },
  ]);

  const formHandler = (e) => {};
  const [formType, setFormType] = useState("");

  function changeForm(event) {
    setFormType(event.target.value);
    console.log("Hi there, user!", event.target.value);
  }
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <h5 className="card-title">Sales Information</h5>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Selling Price</label>
            <div className="col-lg-9">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span
                    className="mySpanClass mySpanClass input-group-text"
                    id="basic-addon1"
                  >
                    ₦
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Selling Price"
                  aria-label="sellingprice"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label">Account</label>
            <div className="col-lg-9">
              <Select2
                className="w-100"
                data={AccountOptions}
                options={{
                  placeholder: "Choose Income Account ",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <h5 className="card-title">Purchase Information</h5>
          <div className="form-group row">
            <label className="col-form-label col-lg-3">Cost Price</label>
            <div className="col-lg-9">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span
                    className="mySpanClass mySpanClass input-group-text"
                    id="basic-addon1"
                  >
                    ₦
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Cost price"
                  aria-label="price"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label">Account</label>
            <div className="col-lg-9">
              <Select2
                className="w-100"
                data={PurchaseOptions}
                options={{
                  placeholder: "Choose Purchase Account ",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <label className="">Description</label>
            <div className="">
              <textarea
                rows="4"
                cols="5"
                className="form-control"
                onChange={formHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Goods;
