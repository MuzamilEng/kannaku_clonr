import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import $ from "jquery";
const SlideToggle = window.ReactSlideToggle;

const Customers = () => {
  useEffect(() => {
    $("#customerstable").DataTable({
      bFilter: false,
      paging: true,
    });
    $("#filter_search").click(function () {
      $("#filter_inputs").slideToggle(500);
    });
  }, []);
  const [date, setDate] = useState(new Date());
  const [currencyOptions, setcurrencyOptions] = useState([
    { id: 1, text: "Select Currency" },
    { id: 2, text: "EUR Euro" },
    { id: 3, text: "INR Indoan Rupee" },
    { id: 4, text: "USD- US Dollar" },
  ]);
  const [countryOptions, setcountryOptions] = useState([
    { id: 1, text: "Select Country" },
    { id: 2, text: "Afghanistan" },
    { id: 3, text: "Albania" },
    { id: 4, text: "American Samoa" },
    { id: 5, text: "Algeria" },
    { id: 6, text: "Andorra" },
    { id: 7, text: "Angola" },
    { id: 8, text: "Anguilla" },
    { id: 9, text: "United States" },
  ]);
  const [bgOptions, setBgOptions] = useState([
    { id: 1, text: "Select Currency" },
    { id: 2, text: "EUR Euro" },
    { id: 3, text: "INR Indoan Rupee" },
    { id: 4, text: "USD- US Dollar" },
  ]);
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div className="avatar mr-2 mt-4">
                      <img
                        className="avatar-img rounded"
                        alt=""
                        src={
                          "https://res.cloudinary.com/dev-staunty007/image/upload/v1645355074/paymax/delivery/poh8pa128qqt2qxjf9za.png"
                        }
                      />
                    </div>
                    <div className="dash-count">
                      <div className="dash-title"> Customers Count </div>
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
                        Select
                      </a>
                      <div className="dropdown-menu dropdown-menu-left">
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
                      <p>(Amount Paid)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div className="avatar mr-2 mt-4">
                      <img
                        className="avatar-img rounded"
                        alt=""
                        src={
                          "https://res.cloudinary.com/dev-staunty007/image/upload/v1645355211/paymax/delivery/eokwvs1ugox3sqpvcu6e.png"
                        }
                      />
                    </div>
                    <div className="dash-count">
                      <div className="dash-title"> Active Customers</div>
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
                        Select
                      </a>
                      <div className="dropdown-menu dropdown-menu-left">
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
                      <p>(Amount Paid)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div className="avatar mr-2 mt-4">
                      <img
                        className="avatar-img rounded"
                        alt=""
                        src={
                          "https://res.cloudinary.com/dev-staunty007/image/upload/v1645355074/paymax/delivery/ae7mjri61huus6rdeodr.png"
                        }
                      />
                    </div>
                    <div className="dash-count">
                      <div className="dash-title"> Avg. Customer Payment</div>
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
                        Select
                      </a>
                      <div className="dropdown-menu dropdown-menu-left">
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
                      <p>(Amount Paid)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <div className="avatar mr-2 mt-4">
                      <img
                        className="avatar-img rounded"
                        alt=""
                        src={
                          "https://res.cloudinary.com/dev-staunty007/image/upload/v1645340247/paymax/icons/ahvcwkj3cc14w6camerv.png"
                        }
                      />
                    </div>
                    <div className="dash-count">
                      <div className="dash-title">Customer Growth </div>
                      <div className="dash-counts">
                        <p>2,150</p>
                      </div>
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
                        Select
                      </a>
                      <div className="dropdown-menu dropdown-menu-left">
                        <a href="#" className="dropdown-item">
                          This Month
                        </a>
                        <a href="#" className="dropdown-item">
                          This Year
                        </a>
                        <a href="#" className="dropdown-item">
                          Since Inception
                        </a>
                      </div>
                    </div>
                    <div className="dash-counts">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Customers</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Customers</li>
                </ul>
              </div>
              <div className="col-auto">
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mr-1">
                    Import
                  </button>
                  <button type="submit" className="btn btn-primary mr-1">
                    Export
                  </button>

                  <Link
                    to="#addCustomer"
                    className="btn btn-primary mr-1"
                    data-toggle="modal"
                    data-target="#addCustomer"
                  >
                    <i className="far fa-edit mr-1"></i> Add Customer
                  </Link>
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
                          <th>Customer</th>
                          <th>Email</th>
                          <th>Amount Due</th>
                          <th>Registered On</th>
                          <th>Status</th>
                          <th className="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((item, index) => {
                          let status;
                          if (item.status === "Active") {
                            status = (
                              <span className="badge badge-pill bg-success-light">
                                Active
                              </span>
                            );
                          } else {
                            status = (
                              <span className="badge badge-pill bg-danger-light">
                                Inactive
                              </span>
                            );
                          }
                          return (
                            <tr key={index}>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/profile"
                                    className="avatar avatar-sm mr-2"
                                  >
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={item.customer_image}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/profile">
                                    {item.customer_name}
                                    <span>{item.customer_mobile}</span>
                                  </Link>
                                </h2>
                              </td>
                              <td>{item.customer_email}</td>
                              <td>{item.amount_due}</td>
                              <td>{item.registered_on}</td>
                              <td>{status}</td>
                              <td className="text-right">
                                <Link
                                  to="/edit-customer"
                                  className="btn btn-sm btn-white text-success mr-2"
                                >
                                  <i className="far fa-edit mr-1"></i> Edit
                                </Link>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-white text-danger mr-2"
                                >
                                  <i className="far fa-trash-alt mr-1"></i>
                                  Delete
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
          {/* Add Customer Modal */}
          <div
            className="modal left fade"
            id="addCustomer"
            tabindex=""
            role="dialog"
            aria-labelledby="addCustomerLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Add Customer</h5>
                    </div>
                    <div className="card-body">
                      <form action="#">
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Primary Currency</label>
                          <Select2
                            className="w-100"
                            data={currencyOptions}
                            options={{
                              placeholder: "Choose Currency",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="tel" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Website</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea
                            rows="5"
                            cols="5"
                            className="form-control"
                            placeholder="Enter Address"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label>State</label>
                          <Select2
                            className="w-100"
                            data={currencyOptions}
                            options={{
                              placeholder: "Choose Currency",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <Select2
                            className="w-100"
                            data={currencyOptions}
                            options={{
                              placeholder: "Choose Currency",
                            }}
                          />
                        </div>
                        <div className="text-right">
                          <button
                            type="submit"
                            className="btn btn-primary mr-1"
                          >
                            Submit
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary mr-1"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>

          {/* Edit Customer Modal */}
          <div
            className="modal left fade"
            id="editModal"
            tabindex=""
            role="dialog"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Retainer Invoice</h5>
                    </div>
                    <div className="card-body">
                      <form action="#">
                        <div className="form-group">
                          <label>Retainer Invoice Date</label>
                          <input type="date" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Customer</label>
                          <Select2
                            className="w-100"
                            data={bgOptions}
                            options={{
                              placeholder: "Blood group",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Retainer Invoice Number</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Service</label>
                          <Select2
                            className="w-100"
                            data={bgOptions}
                            options={{
                              placeholder: "Blood group",
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Repeat Password</label>
                          <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                          />
                        </div>
                        <div className="text-right">
                          <button
                            type="submit"
                            className="btn btn-primary mr-1"
                          >
                            Submit
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary mr-1"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customers;
