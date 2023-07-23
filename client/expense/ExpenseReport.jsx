import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import $ from "jquery";

let SlideToggle;

const ExpenseReport = () => {
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
    useEffect(() => {
        SlideToggle = window.ReactSlideToggle;
        $("#customerstable").DataTable({
            bFilter: false,
            paging: true,
        });
        $("#filter_search").click(function () {
            $("#filter_inputs").slideToggle(500);
        });
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h4>Referral </h4>
                        </div>
                        <div className="col-auto">
                            <a
                                className="btn btn-primary mr-1"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                <i className="fas fa-plus"> </i>   Send Referrer
                            </a>


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
                                                <th>Referrer</th>
                                                <th>User Type</th>
                                                <th>User Tier</th>
                                                <th>Referred User</th>
                                                <th>Referrer Code</th>
                                                <th>Earning</th>
                                                <th>Date</th>

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
                                                        <td>{item.customer_email}</td>
                                                        <td>{item.amount_due}</td>
                                                        <td>{item.registered_on}</td>

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
                                        <h4 className="card-title mt-2 ml-4">Refer New User</h4>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        placeholder="Phone"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="facebook"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Instagram Handle"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="twitter handle"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div className="card bg-white">
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-primary mr-1">
                                            Send Referrer
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
export default ExpenseReport;
