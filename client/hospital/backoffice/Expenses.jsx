import React, { useState } from 'react'
import Link from "next/link";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

const Expenses = () => {

    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    const data = [
        {
            "Date": "23 May 2022",
            "Expensestype": "Lab Charges",
            "Vendor": "-",
            "Modeofpayment": "Cash",
            "Amount": "1000",
            "Notes": "-",
        },
        {
            "Date": "23 May 2022",
            "Expensestype": "Lab Charges",
            "Vendor": "-",
            "Modeofpayment": "Cash",
            "Amount": "1000",
            "Notes": "-",
        },
        {
            "Date": "23 May 2022",
            "Expensestype": "Lab Charges",
            "Vendor": "-",
            "Modeofpayment": "Cash",
            "Amount": "1000",
            "Notes": "-",
        },
        {
            "Date": "23 May 2022",
            "Expensestype": "Lab Charges",
            "Vendor": "-",
            "Modeofpayment": "Cash",
            "Amount": "1000",
            "Notes": "-",
        },
        {
            "Date": "23 May 2022",
            "Expensestype": "Lab Charges",
            "Vendor": "-",
            "Modeofpayment": "Cash",
            "Amount": "1000",
            "Notes": "-",
        },
        {
            "Date": "23 May 2022",
            "Expensestype": "Lab Charges",
            "Vendor": "-",
            "Modeofpayment": "Cash",
            "Amount": "1000",
            "Notes": "-",
        },

    ]

    const columns = [

        {
            name: 'Date',
            selector: row => row.Date,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Expenses Type',
            sortable: true,
            selector: row => row.Expensestype,
            width: "150px",
        },
        {
            name: 'Vendor',
            selector: row => row.Vendor,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Mode of Payment',
            selector: row => row.Modeofpayment,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Total Stock',
            selector: row => row.Totalstock,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Amount',
            selector: row => row.Amount,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Notes',
            selector: row => row.Notes,
            sortable: true,
            width: "150px",
        }

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
                <div className="page-wrapper">
                    <div className="content container-fluid">

                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Expenses</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/index"><a>Dashboard</a></Link></li>
                                        <li className="breadcrumb-item active">Expenses</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <h5>Clinic Name</h5>
                        </div>
                        <div className="row p-2">
                            <div className="col-2">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="All Expenses"
                                    id="basic-addon1"
                                    className="w-full"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="col-3">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="All Payment Modes"
                                    id="basic-addon1"
                                    className="w-full"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="col-2">
                                <input className='form-control' placeholder='From'/>
                            </div>
                            <div className="col-2">
                                <input className='form-control' placeholder='To'/>
                            </div>
                            
                            <div className="col-3">
                                <button className='btn' style={{ backgroundColor: "#14BEF0", color:"white" }}> <small>Add New Campaign</small> </button>
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
            </div>
        </>
    );
}
export default Expenses;