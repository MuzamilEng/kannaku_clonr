import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import DatePicker from "react-datepicker";
import FeatherIcon from "feather-icons-react";
import {
  img4,
  img12,
  img11,
  img6,
  img8,
  img10,
  icon5,
  icon1,
  icon2,
  icon3,
  icon4,
} from "../_components/imagepath";
const AddInvoice = () => {
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("width-100"));
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };
  const [options, setOptions] = useState([
    { id: 1, text: "Select Status" },
    { id: 2, text: "Draft" },
    { id: 3, text: "Sent" },
    { id: 4, text: "Viewed" },
    { id: 5, text: "Expired" },
    { id: 6, text: "Accepted" },
    { id: 7, text: "Rejected" },
  ]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [menu, setMenu] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleSetShow = (value) => {
    setShow(value);
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };
  const toggleSetShowone = (value) => {
    setShow(false);
    setShow1(value);
    setShow2(false);
    setShow3(false);
  };
  const toggleSetShowtwo = (value) => {
    setShow(false);
    setShow1(false);
    setShow2(value);
    setShow3(false);
  };
  const toggleSetShowthree = (value) => {
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(value);
  };
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("width-100"));
  }, []);

  const data = [
    {
      InvoiceID: "IN093439#@09",
      Category: "Advertising",
      Createdon: "16 Mar 2022",
      Invoiceto: "Barbara Moore",
      img_url: img4,
      Amount: "$1,54,220",
      DueDate: "23 Mar 2022",
      status: "Paid",
    },
    {
      InvoiceID: "IN093439#@10",
      Category: "Food",
      Createdon: "14 Mar 2022",
      Invoiceto: "Karlene Chaidez",
      img_url: img6,
      Amount: "$1,222",
      DueDate: "18 Mar 2022",
      status: "Overdue",
    },
    {
      InvoiceID: "IN093439#@11",
      Category: "Marketing",
      Createdon: "7 Mar 2022",
      Invoiceto: "Joseph Collins",
      img_url: img8,
      Amount: "$3,470",
      DueDate: "10 Mar 2022",
      status: "Cancelled",
    },
    {
      InvoiceID: "IN093439#@12",
      Category: "Repairs",
      Createdon: "24 Mar 2022",
      Invoiceto: "Joseph Collins",
      img_url: img10,
      Amount: "$8,265",
      DueDate: "30 Mar 2022",
      status: "Paid",
    },
    {
      InvoiceID: "IN093439#@13",
      Category: "Software",
      Createdon: " 17 Mar 2022",
      Invoiceto: "Jennifer Floyd",
      img_url: img11,
      Amount: "$5,200",
      DueDate: "20 Mar 2022",
      status: "Overdue",
    },
  ];

  const columns = [
    {
      name: "Invoice ID",
      selector: (row) => (
        <Media>
          {" "}
          <label className="custom_check">
            <input type="checkbox" name="invoice" />
            <span className="checkmark"></span>{" "}
          </label>
          <Link to="/invoice-details">{row.InvoiceID}</Link>
        </Media>
      ),
      sortable: true,
      width: "250px",
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      sortable: true,
      width: "250px",
    },
    {
      name: "Created on",
      selector: (row) => row.Createdon,
      sortable: true,
      width: "250px",
    },
    {
      name: "Invoice to",
      sortable: true,
      cell: (row) => (
        <Media className="user-dt">
          <Link to="/profile" className="avatar avatar-sm me-2">
            <img src={row.img_url} className="avatar-img rounded-circle" />
          </Link>
          <Media.Body>{row.Invoiceto}</Media.Body>
        </Media>
      ),
      width: "250px",
    },

    {
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
      width: "250px",
    },
    {
      name: "Due Date",
      selector: (row) => row.DueDate,
      sortable: true,
      width: "250px",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <Media className="user-dt">
          <span
            className={`badge badge-pill badge ${
              row.status == "Paid"
                ? "bg-success-light"
                : row.status == "Partially Paid"
                ? "bg-warning-light"
                : row.status == "Overdue"
                ? "bg-info-light"
                : "bg-danger-light"
            }`}
          >
            {row.status}
          </span>
          <Media.Body></Media.Body>
        </Media>
      ),
      width: "250px",
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      cell: () => (
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="/edit-invoice">
              <i className="far fa-edit me-2"></i>Edit
            </a>
            <a className="dropdown-item" href="/view-invoice">
              <i className="far fa-eye me-2"></i>View
            </a>
            <a className="dropdown-item" href="#">
              <i className="far fa-trash-alt me-2"></i>Delete
            </a>
            <a className="dropdown-item" href="#">
              <i className="far fa-check-circle me-2"></i>Mark as sent
            </a>
            <a className="dropdown-item" href="#">
              <i className="far fa-paper-plane me-2"></i>Send Invoice
            </a>
            <a className="dropdown-item" href="#">
              <i className="far fa-copy me-2"></i>Clone Invoice
            </a>
          </div>
        </div>
      ),
      width: "250px",
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Add Retainer Invoices</h3>
            </div>
            <div className="col-auto">
              <Link href="/add-retainer">
                <a className="btn btn-primary m-1">
                  <i className="fas fa-plus"></i>
                </a>
              </Link>
              <a
                className="btn btn-primary filter-btn"
                href="/invoices#"
                id="filter_search"
              >
                <i className="fas fa-filter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <form action="#">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="multipleSelection">
                        <div
                          className="selectBox"
                          onClick={() => toggleSetShow(!show)}
                        >
                          <p className="mb-0">
                            <FeatherIcon
                              icon="user-plus"
                              className="me-1 select-icon"
                            />{" "}
                            Select User
                          </p>
                          <span className="down-icon">
                            <FeatherIcon icon="chevron-down" />
                          </span>
                        </div>
                        <div
                          id="checkBoxes"
                          style={{ display: show ? "block" : "none" }}
                        >
                          <form action="#">
                            <p className="checkbox-title">Customer Search</p>
                            <div className="form-custom">
                              <input
                                type="text"
                                className="form-control bg-grey"
                                placeholder="Enter Customer Name"
                              />
                            </div>
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> Brian
                                Johnson
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> Russell
                                Copeland
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> Greg Lynch
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> John Blair
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> Barbara
                                Moore
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> Hendry Evan
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark"></span> Richard
                                Miles
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn w-100 btn-primary"
                            >
                              Apply
                            </button>
                            <button type="reset" className="btn w-100 btn-grey">
                              Reset
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* <div className="form-group">
                        <label>Customer:</label>
                        <Select2
                          className="w-100"
                          data={options}
                          options={{
                            placeholder: "Select Customer",
                          }}
                        />
                      </div> */}
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>From </label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>To</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Due Date</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mt-3">
                      <div className="form-group">
                        <label>Estimate Number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="form-group">
                        <label>Ref Number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <label className="custom_check w-100">
                        <input type="checkbox" id="enableTax" name="invoice" />
                        <span className="checkmark"></span> Enable tax
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" id="chkYes" name="invoice" />
                        <span className="checkmark"></span> Recurring Retainer
                        Invoice
                      </label>
                    </div>
                  </div>
                  <div className="table-responsive mt-4">
                    <table className="table table-stripped table-center table-hover">
                      <thead>
                        <tr>
                          <th>Items</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              disabled
                            />
                          </td>
                          <td className="add-remove text-right">
                            <i className="fas fa-plus-circle"></i>{" "}
                            <i className="fas fa-minus-circle"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              disabled
                            />
                          </td>
                          <td className="add-remove text-right">
                            <i className="fas fa-plus-circle"></i>{" "}
                            <i className="fas fa-minus-circle"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive mt-4">
                    <table className="table table-stripped table-center table-hover">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-right">Sub Total</td>
                          <td className="text-right">0</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-right">Discount</td>
                          <td className="text-right">0</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="text-right">Total</td>
                          <td className="text-right">0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-right mt-4">
                    <button type="submit" className="btn btn-primary">
                      Add Retainer Invoice
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddInvoice;
