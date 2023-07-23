import React, { useState } from 'react'
import Link from "next/link";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import { Dropdown, DropdownButton } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

const Inventory = () => {

    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    const data = [
        {
            "Name": "Broom Handle",
            "Itemcode": "ITM00001",
            "Type": "Equipment",
            "Retailprice": "50,00",
            "Totalstock": "20Pcs",
            "Availablestock": "2Pcs",
            "Expiredstock": "20Pcs",
            "Reorderlevel": "20Pcs",
        },
        {
            "Name": "Broom Handle",
            "Itemcode": "ITM00001",
            "Type": "Equipment",
            "Retailprice": "50,00",
            "Totalstock": "20Pcs",
            "Availablestock": "2Pcs",
            "Expiredstock": "20Pcs",
            "Reorderlevel": "20Pcs",
        },
        {
            "Name": "Broom Handle",
            "Itemcode": "ITM00001",
            "Type": "Equipment",
            "Retailprice": "50,00",
            "Totalstock": "20Pcs",
            "Availablestock": "2Pcs",
            "Expiredstock": "20Pcs",
            "Reorderlevel": "20Pcs",
        },
        {
            "Name": "Broom Handle",
            "Itemcode": "ITM00001",
            "Type": "Equipment",
            "Retailprice": "50,00",
            "Totalstock": "20Pcs",
            "Availablestock": "2Pcs",
            "Expiredstock": "20Pcs",
            "Reorderlevel": "20Pcs",
        },
        {
            "Name": "Broom Handle",
            "Itemcode": "ITM00001",
            "Type": "Equipment",
            "Retailprice": "50,00",
            "Totalstock": "20Pcs",
            "Availablestock": "2Pcs",
            "Expiredstock": "20Pcs",
            "Reorderlevel": "20Pcs",
        },
        {
            "Name": "Broom Handle",
            "Itemcode": "ITM00001",
            "Type": "Equipment",
            "Retailprice": "50,00",
            "Totalstock": "20Pcs",
            "Availablestock": "2Pcs",
            "Expiredstock": "20Pcs",
            "Reorderlevel": "20Pcs",
        },

    ]

    const columns = [

        {
            name: 'Name',
            selector: row => row.Name,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Item Code',
            sortable: true,
            selector: row => row.Itemcode,
            width: "150px",
        },
        {
            name: 'Type',
            selector: row => row.Type,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Retail Price',
            selector: row => row.Retailprice,
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
            name: 'Available Stock',
            selector: row => row.Availablestock,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Expired Stock',
            selector: row => row.Expiredstock,
            sortable: true,
            width: "150px",
        },
        {
            name: 'Reorder Level',
            selector: row => row.Reorderlevel,
            sortable: true,
            width: "150px",
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
                <div className="page-wrapper">
                    <div className="content container-fluid">

                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Inventory</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/index"><a>Dashboard</a></Link></li>
                                        <li className="breadcrumb-item active">Inventory</li>
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
                                    title="Stock Level"
                                    id="basic-addon1"
                                    className="w-full"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="col-1">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title="Type"
                                    id="basic-addon1"
                                    className="w-full"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="col-1">
                                <button className='btn border ms-2'><FeatherIcon icon="share"/></button>
                            </div>
                            <div className="col-1">
                                <button className='btn border'><FeatherIcon icon="printer"/></button>
                            </div>
                            <div className="col-2">
                                <button className='btn border'>Consume Stock</button>
                            </div>
                            <div className="col-2">
                                <button className='btn border'>Add Stock</button>
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
export default Inventory;