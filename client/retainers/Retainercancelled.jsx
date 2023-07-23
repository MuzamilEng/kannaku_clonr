import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select2 from 'react-select2-wrapper';
import DatePicker from 'react-datepicker';
import { Row, Col, Card, Media } from "react-bootstrap";
// import DataTable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
// import 'react-data-table-component-extensions/dist/index.css';
import { img4, img12, img11, img6, img8, img10, icon5, icon1, icon2, icon3, icon4 } from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import FeatherIcon from 'feather-icons-react';

const Invoicecancelled = () => {

	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [menu, setMenu] = useState(false)
	const [date, setDate] = useState(new Date());

	const toggleSetShow = (value) => {
		setShow(value)
		setShow1(false)
		setShow2(false)
		setShow3(false)
	}
	const toggleSetShowone = (value) => {
		setShow(false)
		setShow1(value)
		setShow2(false)
		setShow3(false)
	}
	const toggleSetShowtwo = (value) => {
		setShow(false)
		setShow1(false)
		setShow2(value)
		setShow3(false)
	}
	const toggleSetShowthree = (value) => {
		setShow(false)
		setShow1(false)
		setShow2(false)
		setShow3(value)
	}
	const toggleMobileMenu = () => {
		setMenu(!menu)
	}
	useEffect(() => {
		let elements = Array.from(document.getElementsByClassName('react-datepicker-wrapper'));
		elements.map(element => element.classList.add("width-100"))
	}, []);

	const handleChange = (date) => {
		setDate(date);
	};

	const [options, setOptions] = useState([
		{ id: 1, text: 'Select Status' },
		{ id: 2, text: 'Draft' },
		{ id: 3, text: 'Sent' },
		{ id: 4, text: 'Viewed' },
		{ id: 5, text: 'Expired' },
		{ id: 6, text: 'Accepted' },
		{ id: 7, text: 'Rejected' }
	]);

	const data = [
		{
			"InvoiceID": "IN093439#@09",
			"Category": "Advertising",
			"Createdon": "16 Mar 2022",
			"Invoiceto": "Barbara Moore",
			"img_url": img4,
			"Amount": "$1,54,220",
			"Cancelledon": "23 Mar 2022",
			"status": "Paid",
		},
		{
			"InvoiceID": "IN093439#@10",
			"Category": "Food",
			"Createdon": "14 Mar 2022",
			"Invoiceto": "Karlene Chaidez",
			"img_url": img6,
			"Amount": "$1,222",
			"Cancelledon": "18 Mar 2022",
			"status": "Overdue",
		},
		{
			"InvoiceID": "IN093439#@11",
			"Category": "Marketing",
			"Createdon": "7 Mar 2022",
			"Invoiceto": "Joseph Collins",
			"img_url": img8,
			"Amount": "$3,470",
			"Cancelledon": "10 Mar 2022",
			"status": "Cancelled",
		},
		{
			"InvoiceID": "IN093439#@12",
			"Category": "Repairs",
			"Createdon": "24 Mar 2022",
			"Invoiceto": "Joseph Collins",
			"img_url": img10,
			"Amount": "$8,265",
			"Cancelledon": "30 Mar 2022",
		},
		{
			"InvoiceID": "IN093439#@13",
			"Createdon": " 17 Mar 2022",
			"Invoiceto": "Jennifer Floyd",
			"img_url": img11,
			"Amount": "$5,200",
			"Cancelledon": "20 Mar 2022",
		},
	]

	const columns = [
		{
			name: 'Invoice ID',
			selector: row => <Media><label className="custom_check"><input type="checkbox" name="invoice" /><span className="checkmark"></span> </label><Link to="/invoice-details">{row.InvoiceID}</Link></Media>,
			sortable: true,
			width: "250px",
		},
		{
			name: 'Invoice to',
			sortable: true,
			cell: row => <Media className="user-dt"><a href="/profile" className="avatar avatar-sm me-2"><img src={row.img_url} className="avatar-img rounded-circle" /></a><Media.Body>{row.Invoiceto}</Media.Body></Media>,
			width: "250px",
		},

		{
			name: 'Amount',
			selector: row => row.Amount,
			sortable: true,
			width: "250px",
		},
		{
			name: 'Created on',
			selector: row => row.Createdon,
			sortable: true,
			width: "250px",
		},
		{
			name: 'Cancelled on',
			selector: row => row.Cancelledon,
			sortable: true,
			width: "250px",
		},

		{
			name: 'Action',
			selector: row => row.action,
			sortable: true,
			cell: () => <div><a href="/edit-customer" className="btn btn-sm btn-white text-success me-2"><i className="far fa-edit me-1"></i> Edit</a><a href="#;" className="btn btn-sm btn-white text-danger me-2"><i className="far fa-trash-alt me-1"></i>Delete</a> </div>,
			width: "250px",
		},

	];

	const tableData = {
		columns,
		data,
	};


	return (



		<>
			<div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

				<Header onMenuClick={(value) => toggleMobileMenu()} />
				<Sidebar />
				{/* <!-- Page Wrapper --> */}
				<div className="page-wrapper">
					<div className="content container-fluid">

						{/* <!-- Page Header --> */}
						<div className="page-header">
							<div className="row align-items-center">
								<div className="col">
									<h3 className="page-title">Invoices</h3>
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
										<li className="breadcrumb-item active">Invoices</li>
									</ul>
								</div>
								<div className="col-auto">
									<Link to="/invoices" className="invoices-links active">
										<FeatherIcon icon="list" />
									</Link >
									<Link to="/invoice-grid" className="invoices-links">
										<FeatherIcon icon="grid" />
									</Link >
								</div>
							</div>
						</div>
						{/* <!-- /Page Header --> */}

						{/* <!-- Report Filter --> */}
						<div className="card report-card">
							<div className="card-body pb-0">
								<div className="row">
									<div className="col-md-12">
										<ul className="app-listing">
											<li>
												<div className="multipleSelection">
													<div className="selectBox" onClick={() => toggleSetShow(!show)} >
														<p className="mb-0"><FeatherIcon icon="user-plus" className="me-1 select-icon" /> Select User</p>
														<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
													</div>
													<div id="checkBoxes" style={{ display: show ? "block" : "none" }}>
														<form action="#">
															<p className="checkbox-title">Customer Search</p>
															<div className="form-custom">
																<input type="text" className="form-control bg-grey" placeholder="Enter Customer Name" />
															</div>
															<div className="selectBox-cont">
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span>  Brian Johnson
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span>  Russell Copeland
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span>  Greg Lynch
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span> John Blair
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span> Barbara Moore
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span> Hendry Evan
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="username" />
																	<span className="checkmark"></span> Richard Miles
															</label>
															</div>
															<button type="submit" className="btn w-100 btn-primary">Apply</button>
															<button type="reset" className="btn w-100 btn-grey">Reset</button>
														</form>
													</div>
												</div>
											</li>
											<li>
												<div className="multipleSelection">
													<div className="selectBox" onClick={() => toggleSetShowone(!show1)}>
														<p className="mb-0"><FeatherIcon icon="calendar" className="me-1 select-icon" /> Select Date</p>
														<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
													</div>
													<div id="checkBoxes" style={{ display: show1 ? "block" : "none" }}>
														<form action="#">
															<p className="checkbox-title">Date Filter</p>
															<div className="selectBox-cont selectBox-cont-one h-auto">
																<div className="date-picker">
																	<div className="form-custom cal-icon">
																		<DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" />
																	</div>
																</div>
																<div className="date-picker pe-0">
																	<div className="form-custom cal-icon">
																		<DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker" />
																	</div>
																</div>
																<div className="date-list">
																	<ul>
																		<li><Link to="#" className="btn date-btn">Today</Link ></li>
																		<li><Link to="#" className="btn date-btn">Yesterday</Link ></li>
																		<li><Link to="#" className="btn date-btn">Last 7 days</Link ></li>
																		<li><Link to="#" className="btn date-btn">This month</Link ></li>
																		<li><Link to="#" className="btn date-btn">Last month</Link ></li>
																	</ul>
																</div>
															</div>
														</form>
													</div>
												</div>
											</li>
											<li>
												<div className="multipleSelection">
													<div className="selectBox" onClick={() => toggleSetShowtwo(!show2)}>
														<p className="mb-0"><FeatherIcon icon="book-open" className="me-1 select-icon" /> Select Status</p>
														<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
													</div>
													<div id="checkBoxes" style={{ display: show2 ? "block" : "none" }}>
														<form action="#">
															<p className="checkbox-title">By Status</p>
															<div className="selectBox-cont">
																<label className="custom_check w-100">
																	<input type="checkbox" name="name" defaultChecked />
																	<span className="checkmark"></span> All Invoices
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="name" />
																	<span className="checkmark"></span> Paid
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="name" />
																	<span className="checkmark"></span> Overdue
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="name" />
																	<span className="checkmark"></span> Draft
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="name" />
																	<span className="checkmark"></span> Recurring
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="name" />
																	<span className="checkmark"></span> Cancelled
															</label>
															</div>
															<button type="submit" className="btn w-100 btn-primary">Apply</button>
															<button type="reset" className="btn w-100 btn-grey">Reset</button>
														</form>
													</div>
												</div>
											</li>
											<li>
												<div className="multipleSelection">
													<div className="selectBox" onClick={() => toggleSetShowthree(!show3)}>
														<p className="mb-0"><FeatherIcon icon="bookmark" className="me-1 select-icon" /> By Category</p>
														<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
													</div>
													<div id="checkBoxes" style={{ display: show3 ? "block" : "none" }}>
														<form action="#">
															<p className="checkbox-title">Category</p>
															<div className="form-custom">
																<input type="text" className="form-control bg-grey" placeholder="Enter Category Name" />
															</div>
															<div className="selectBox-cont">
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Advertising
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Food
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Marketing
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Repairs
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Software
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Stationary
															</label>
																<label className="custom_check w-100">
																	<input type="checkbox" name="category" />
																	<span className="checkmark"></span> Travel
															</label>
															</div>
															<button type="submit" className="btn w-100 btn-primary">Apply</button>
															<button type="reset" className="btn w-100 btn-grey">Reset</button>
														</form>
													</div>
												</div>
											</li>
											<li>
												<div className="report-btn">
													<Link to="#" className="btn">
														<img src={icon5} alt="" className="me-2" /> Generate report
												</Link >
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Report Filter --> */}

						<div className="card invoices-tabs-card">
							<div className="card-body card-body pt-0 pb-0">
								<div className="invoices-main-tabs">
									<div className="row align-items-center">
										<div className="col-lg-8 col-md-8">
											<div className="invoices-tabs">
												<ul>
													<li><Link to="/invoices">All Invoice</Link ></li>
													<li><Link to="/invoice-paid">Paid</Link ></li>
													<li><Link to="/invoice-overdue">Overdue</Link ></li>
													<li><Link to="/invoice-draft">Draft</Link ></li>
													<li><Link to="/invoice-recurring">Recurring</Link ></li>
													<li><Link to="/invoice-cancelled" className="active">Cancelled</Link ></li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-4">
											<div className="invoices-settings-btn">
												<Link to="/invoices-settings" className="invoices-settings-icon">
													<FeatherIcon icon="settings" />
												</Link>
												<Link to="/add-invoice" className="btn">
													<FeatherIcon icon="plus-circle" /> New Invoice
											</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card inovices-card">
									<div className="card-body">
										<div className="inovices-widget-header">
											<span className="inovices-widget-icon">
												<img src={icon1} alt="" />
											</span>
											<div className="inovices-dash-count">
												<div className="inovices-amount">$8,78,797</div>
											</div>
										</div>
										<p className="inovices-all">All Invoices <span>50</span></p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card inovices-card">
									<div className="card-body">
										<div className="inovices-widget-header">
											<span className="inovices-widget-icon">
												<img src={icon2} alt="" />
											</span>
											<div className="inovices-dash-count">
												<div className="inovices-amount">$4,5884</div>
											</div>
										</div>
										<p className="inovices-all">Paid Invoices <span>60</span></p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card inovices-card">
									<div className="card-body">
										<div className="inovices-widget-header">
											<span className="inovices-widget-icon">
												<img src={icon3} alt="" />
											</span>
											<div className="inovices-dash-count">
												<div className="inovices-amount">$2,05,545</div>
											</div>
										</div>
										<p className="inovices-all">Unpaid Invoices <span>70</span></p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card inovices-card">
									<div className="card-body">
										<div className="inovices-widget-header">
											<span className="inovices-widget-icon">
												<img src={icon4} alt="" />
											</span>
											<div className="inovices-dash-count">
												<div className="inovices-amount">$8,8,797</div>
											</div>
										</div>
										<p className="inovices-all">Cancelled Invoices <span>80</span></p>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<div className="card card-table">
									<div className="card-body">
										<div className="table-responsive">
											<DataTableExtensions
												{...tableData}
											>
												<DataTable
													noHeader
													defaultSortField="id"
													defaultSortAsc={false}
													pagination
													highlightOnHover
												/>
											</DataTableExtensions>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Page Wrapper --> */}
				{/* <!-- Delete Paid Modal --> */}
				<div className="modal custom-modal fade" id="delete_paid" role="dialog">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-body">
								<div className="form-header">
									<h3>Delete Invoice Paid</h3>
									<p>Are you sure want to delete?</p>
								</div>
								<div className="modal-btn delete-action">
									<div className="row">
										<div className="col-6">
											<a href="javascript:void(0);" className="btn btn-primary paid-continue-btn">Delete</a>
										</div>
										<div className="col-6">
											<a href="javascript:void(0);" data-bs-dismiss="modal" className="btn btn-primary paid-cancel-btn">Cancel</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Delete Paid Modal --> */}
			</div>
		</>
	);
}
export default Invoicecancelled;