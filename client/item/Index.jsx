import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import $ from "jquery";
import Goods from "./components/Goods";
import Service from "./components/Service";
let SlideToggle;

const Item = () => {
  const [unitOptions, setunitOptions] = useState([
      { id: 1, text: "Select one" },
      { id: 2, text: "box" },
      { id: 3, text: "cm" },
      { id: 4, text: "dz" },
      { id: 5, text: "ft" },
      { id: 6, text: "g" },
      { id: 7, text: "in" },
      { id: 8, text: "kg" },
      { id: 9, text: "km" },
      { id: 10, text: "lb" },
      { id: 11, text: "mg" },
      { id: 12, text: "m" },
      { id: 13, text: "pcs" },
    ]),
    [ItemCategoryOptions, setItemCategoryOptions] = useState([
      { id: 1, text: "Food" },
      { id: 2, text: "Grocery" },
      { id: 3, text: "Drugs" },
      { id: 4, text: "Stationary" },
    ]),
    [TaxOptions, setTaxOptions] = useState([{ id: 1, text: "7.5%" }]),
    [countryOptions, setcountryOptions] = useState([
      { id: 1, text: "USA" },
      { id: 2, text: "France" },
      { id: 3, text: "India" },
      { id: 4, text: "Spain" },
    ]);

  const formHandler = (e) => {};
  const [formType, setFormType] = useState("");

  function changeForm(event) {
    setFormType(event.target.value);
    console.log("Hi there, user!", event.target.value);
  }
  function renderSwitch(param) {
    switch (param) {
      case "1":
        return <Goods />;
      case "2":
        return <Service />;

      default:
        return <Goods />;
    }
  }

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h4>Item </h4>
            </div>
            <div className="col-auto">
              <a
                className="btn btn-primary me-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#customerModal"
                aria-controls="customerModal"
              >
                <i className="fas fa-plus"> </i>
              </a>

              <a
                className="btn btn-primary filter-btn"
                href="/items#"
                id="filter_search"
              >
                <i className="fas fa-filter"></i>
              </a>
            </div>
            {/* Modal */}
            <div className="row">
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="customerModal"
                aria-labelledby="customerModalLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="customerModalLabel">
                    Add Item
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row mb-4">
                      <div className="row">
                        <div className="col-auto">
                          <div className="col-auto">
                            <label className="form-group toggle-switch">
                              <span className="">
                                <input
                                  type="checkbox"
                                  className="toggle-switch-input"
                                  id="notification_switch1"
                                />
                                <span className="toggle-switch-label ml-auto">
                                  <span className="toggle-switch-indicator"></span>
                                </span>
                              </span>
                              <span className="toggle-switch-content ml-0">
                                <span className="d-block text-dark">
                                  Enable Inventory on Item
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Type
                              </label>
                              <div className="col-lg-9">
                                <select
                                  className="form-control"
                                  onChange={changeForm}
                                >
                                  <option value="1">Goods</option>
                                  <option value="2">Services </option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Item Category
                              </label>
                              <div className="col-lg-9">
                                <Select2
                                  className="w-100"
                                  data={ItemCategoryOptions}
                                  options={{
                                    placeholder: "Enter Item Category",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Tax
                              </label>
                              <div className="col-lg-9">
                                <Select2
                                  className="w-100"
                                  data={TaxOptions}
                                  options={{
                                    placeholder: "Enter Item Tax",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Item Name
                              </label>
                              <div className="col-lg-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={formHandler}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Unit
                              </label>
                              <div className="col-lg-9">
                                <Select2
                                  className="w-100"
                                  data={unitOptions}
                                  options={{
                                    placeholder: "Choose Unit",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-lg-3 col-form-label">
                                Item Image
                              </label>
                              <div className="col-lg-9">
                                <input
                                  image="text"
                                  className="form-control"
                                  onChange={formHandler}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {renderSwitch(formType)}

                        <div className="text-right">
                          <button type="submit" className="btn btn-primary">
                            Create
                          </button>
                        </div>
                      </form>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="filter_inputs" className="card filter-card">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* container */}
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">All</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Growth Rate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Active</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Active #)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Inactive</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Inactive)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon bg-4">
                    <i className="far fa-file"></i>
                  </span>
                  <div className="dash-count">
                    <div className="dash-title">Growth Rate</div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success mr-1">
                      <i className="fas fa-arrow-up mr-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Today
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        Last Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="dash-counts">
                    <p>(Growth Rate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-center table-hover datatable"
                    id="customerstable"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th>S/N</th>
                        <th>Item Name </th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Selling Price</th>
                        <th>Selling Account</th>
                        <th>Purchase Price</th>
                        <th>Purchase Account </th>
                        <th>Date</th>
                        <th>Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((item, index) => {
                        let status;
                        if (item.status === "Active") {
                          status = (
                            <div className="btn-group btn-group-sm">
                              <button type="button" className="btn btn-primary">
                                Active
                              </button>
                            </div>
                          );
                        } else {
                          status = (
                            <div className="btn-group btn-group-sm">
                              <button type="button" className="btn btn-info">
                                Inactive
                              </button>
                            </div>
                          );
                        }
                        return (
                          <tr key={index}>
                            <td>
                              <h2 className="table-avatar">
                                <Link href="/profile">
                                  <a className="avatar avatar-sm mr-2">
                                    <Image
                                      className="avatar-img rounded-circle"
                                      width="40"
                                      height="40"
                                      src={item.customer_image}
                                      alt="User Image"
                                    />
                                  </a>
                                </Link>
                                <Link href="/profile">
                                  <a>
                                    {item.customer_name}
                                    <span>{item.customer_mobile}</span>
                                  </a>
                                </Link>
                              </h2>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{item.customer_email}</td>
                            <td>{item.amount_due}</td>
                            <td>{item.registered_on}</td>
                            <td>{status}</td>
                            <td className="text-right">
                              <a
                                className="btn btn-sm btn-white text-success mr-2"
                                data-toggle="modal"
                                data-target="#editModal"
                              >
                                <i className="far fa-edit mr-1"></i>
                              </a>

                              <a
                                href="#"
                                className="btn btn-sm btn-white text-danger mr-2"
                              >
                                <i className="far fa-trash-alt mr-1"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm btn-white text-danger mr-2"
                              >
                                <i className="far fa-arrow mr-1"></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add User Modal */}
        <div className="container demo">
          <div
            className="modal left fade"
            id="exampleModal"
            tabIndex
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="nav flex-sm-column flex-row">
                    <h4 className="card-title mt-2 ml-4">Add New User</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Phone"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Referral Code"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <h4 className="card-title mt-2 ml-4">
                        Roles and Priviges
                      </h4>
                      <div className="col-md-12">
                        <div className="form-group">
                          <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: "User Type",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: "User Role",
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: "User Tier",
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <label className="d-block">Status:</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_male"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_male"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_female"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_female"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="d-block">KYC Required:</label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_male"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gender_male"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_female"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gender_female"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-white">
                  <div className="card-body">
                    <button type="submit" className="btn btn-primary mr-1">
                      Add Customer
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mr-1"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Edit User Modal */}
        <div className="container demo">
          <div
            className="modal left fade"
            id="editModal"
            tabIndex
            role="dialog"
            aria-labelledby="editModal"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="nav flex-sm-column flex-row">
                    <h4 className="card-title mt-2 ml-4">Edit User</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Phone"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Referral Code"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <h4 className="card-title mt-2 ml-4">
                        Roles and Privileges
                      </h4>
                      <div className="col-md-12">
                        <div className="form-group">
                          <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: "User Type",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: "User Role",
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <Select2
                            className="w-100"
                            data={countryOptions}
                            options={{
                              placeholder: "User Tier",
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <label className="d-block">Status:</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_male"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_male"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_female"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_female"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="d-block">KYC Required:</label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_male"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gender_male"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender_female"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gender_female"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-white">
                  <div className="card-body">
                    <button type="submit" className="btn btn-primary mr-1">
                      Add Customer
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mr-1"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
