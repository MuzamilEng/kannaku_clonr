import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';

const FlightSidebar = (props) => {

    const [isSideMenu, setSideMenu] = useState("")

    const toggleSidebar = (value) => {
        console.log(value);
        setSideMenu(value)

    }

    console.log("Working", isSideMenu)


    let pathName = props.location.pathname;
    return (



        <div className="sidebar flightbooking-sidebar" id="sidebar">
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax="95vh"
                thumbMinSize={30}
                universal={false}
                hideTracksWhenNotNeeded={true}
            >
                <div className="sidebar-inner-doctor slimscroll">

                    <div id="sidebar-menu" className="sidebar-menu sidebar-menu-two">
                        <ul>
                            
                            <li className={`${'/booking/hotels' === pathName ? 'active' : ''}`}>
                                <Link href="/booking/hotels"><FeatherIcon icon="file-text" /> <span>Booking</span></Link>
                            </li>

                            <li className={`${'/consult-doctor' === pathName ? 'active' : ''}`}>
                                <Link href="/consult-doctor"><FeatherIcon icon="clipboard" /> <span>Consult</span></Link>
                            </li>
                            <li className={`${'/providers' === pathName ? 'active' : ''}`}>
                                <Link href="/providers"><FeatherIcon icon="list" /> <span>Health Care Providers</span></Link>
                            </li>
                            <li className={`${'/pagefour' === pathName ? 'active' : ''}`}>
                                <Link href="/pagefour"><FeatherIcon icon="list" /> <span>Listings</span></Link>
                            </li>

                            <li className="menu-title"><span>Customer</span></li>
                            <li className={`${'/index' === pathName ? 'active' : ''}`}>
                                <Link href="/index"><FeatherIcon icon="home" /> <span>Dashboard</span></Link>
                            </li>

                            <li className={`${'/internet' === pathName || '/cableTv' === pathName || '/electricity' === pathName || '/education'
                                === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "bill" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "bill" ? "" : "bill")}><FeatherIcon icon="clipboard" /> <span> Bills Payment</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "bill" ?
                                    <ul>
                                        <li className={`${'/internet' === pathName ? 'active' : ''}`}><Link href="/internet">Airtime & Data</Link></li>
                                        <li className={`${'/cableTv' === pathName ? 'active' : ''}`}><Link href="/cableTv">CableTv</Link></li>
                                        <li className={`${'/electricity' === pathName ? 'active' : ''}`}><Link href="/electricity">Electricity</Link></li>
                                        <li className={`${'/electricity' === pathName ? 'active' : ''}`}><Link href="/edit-invoice">education</Link></li>
                                        <li className={`${'/education' === pathName ? 'active' : ''}`}><Link href="/education">Education</Link></li>

                                    </ul>
                                    : ""
                                }
                            </li>

                            <li className={`${'/doctor' === pathName || '/lawyer' === pathName || '/finance' === pathName || '/business'
                                === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "consultant" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "consultant" ? "" : "consultant")}><FeatherIcon icon="clipboard" /> <span> Online Consultation</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "consultant" ?
                                    <ul>
                                        <li className={`${'/online_consult' === pathName ? 'active' : ''}`}><Link href="/online_consult">Booking</Link></li>
                                        <li className={`${'/consult_record' === pathName ? 'active' : ''}`}><Link href="/consult_record">Records</Link></li>
                                        <li className={`${'/online_appointment' === pathName ? 'active' : ''}`}><Link href="/online_appointment">Appointment</Link></li>


                                    </ul>
                                    : ""
                                }
                            </li>

                            <li className={`${'/delivery' === pathName || '/delivery' === pathName || '/delivery' === pathName || '/delivery' === pathName ? 'active' : ''}`}>
                                <Link href="/delivery"><FeatherIcon icon="file-text" /><span>Delivery</span></Link>
                            </li>
                            {/* <li className={`${'/booking' === pathName || '/booking' === pathName || '/booking' === pathName || '/booking' === pathName ? 'active' : ''}`}>
                                <Link href="/booking"><FeatherIcon icon="file-text" /><span>Booking</span></Link>
                            </li> */}
                            <li className={`${'/invest' === pathName || '/transfer' === pathName || '/loan'
                                === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "banking" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "banking" ? "" : "banking")}><FeatherIcon icon="clipboard" /> <span> My Finance</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "banking" ?
                                    <ul>
                                        <li className={`${'/invest' === pathName ? 'active' : ''}`}><Link href="/invest">Investment</Link></li>
                                        <li className={`${'/income_expense' === pathName ? 'active' : ''}`}><Link href="/income_expense">Income & Expense</Link></li>
                                        <li className={`${'/transfer' === pathName ? 'active' : ''}`}><Link href="/transfer">Money Transfer</Link></li>
                                        <li className={`${'/loan' === pathName ? 'active' : ''}`}><Link href="/loan">Loan</Link></li>
                                        <li className={`${'/savings' === pathName ? 'active' : ''}`}><Link href="/savings">Budget & Savings</Link></li>


                                    </ul>
                                    : ""
                                }
                            </li>
                            <li className={`${'/shop' === pathName || '/shop' === pathName || '/shop' === pathName || '/shop' === pathName ? 'active' : ''}`}>
                                <Link href="/shop"><FeatherIcon icon="file-text" /><span>Online Shop</span></Link>
                            </li>
                            <li className={`${'/referral' === pathName || '/referral' === pathName || '/referral' === pathName ? 'active' : ''}`}>
                                <Link href="/referral"><FeatherIcon icon="users" /><span>Referral</span></Link>
                            </li>

                            <li className={`${'/dues' === pathName || '/dues' === pathName || '/dues' === pathName || '/dues' === pathName ? 'active' : ''}`}>
                                <Link href="/dues"><FeatherIcon icon="file-text" /><span>Dues & Subscription</span></Link>
                            </li>

                            {/* <li className={`${'/invoices' === pathName || '/invoice-details' === pathName || '/tax-settings' === pathName || '/invoice-paid' === pathName || '/invoice-overdue' === pathName || '/invoice-draft' === pathName || '/invoice-recurring' === pathName || '/invoice-cancelled' === pathName || '/bank-settings' === pathName || '/invoices-settings' === pathName || '/invoice-grid' === pathName || '/add-invoice' === pathName || '/edit-invoice'
                                === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "invoice" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "invoice" ? "" : "invoice")}><FeatherIcon icon="clipboard" /> <span> Invoices</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "invoice" ?
                                    <ul>
                                        <li className={`${'/invoices' === pathName ? 'active' : ''}`}><Link href="/invoices">Invoices List</Link></li>
                                        <li className={`${'/invoice-grid' === pathName ? 'active' : ''}`}><Link href="/invoice-grid">Invoices Grid</Link></li>
                                        <li className={`${'/add-invoice' === pathName ? 'active' : ''}`}><Link href="/add-invoice">Add Invoices</Link></li>
                                        <li className={`${'/edit-invoice' === pathName ? 'active' : ''}`}><Link href="/edit-invoice">Edit Invoices</Link></li>
                                        <li className={`${'/invoice-details' === pathName ? 'active' : ''}`}><Link href="/invoice-details">Invoices Details</Link></li>
                                        <li className={`${'/invoices-settings' === pathName ? 'active' : ''}`}><Link href="/invoices-settings">Invoices Settings</Link></li>
                                    </ul>
                                    : ""
                                }
                            </li> */}
                            <li className={`${'/payments' === pathName || '/add-payments' === pathName ? 'active' : ''}`}>
                                <Link href="/payments"><FeatherIcon icon="credit-card" /> <span>Payments</span></Link>
                            </li>

                            <li className={`${'/sales-report' === pathName || '/expenses-report' === pathName || '/profit-loss-report' === pathName
                                || '/taxs-report' === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "report" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "report" ? "" : "report")}><FeatherIcon icon="pie-chart" /> <span> Reports</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "report" ?
                                    <ul>
                                        <li className={`${'/sales-report' === pathName ? 'active' : ''}`}><Link href="/sales-report">Sales Report</Link></li>
                                        <li className={`${'/expenses-report' === pathName ? 'active' : ''}`}><Link href="/expenses-report">Expenses Report</Link></li>
                                        <li className={`${'/profit-loss-report' === pathName ? 'active' : ''}`}><Link href="/profit-loss-report">Profit &amp; Loss Report</Link></li>
                                        <li className={`${'/taxs-report' === pathName ? 'active' : ''}`}><Link href="/taxs-report">Taxs Report</Link></li>
                                    </ul>
                                    : ""
                                }
                            </li>
                            <li className={`${'/settings' === pathName || '/preferences' === pathName || '/tax-types' === pathName || '/expense-category' === pathName || '/notifications' === pathName || '/change-password' === pathName || '/delete-account' === pathName ? 'active' : ''}`}>
                                <Link href="/settings"><FeatherIcon icon="settings" /> <span>Settings</span></Link>
                            </li>

                            <li className="menu-title menu-title-two">
                                <span>Merchant Menu</span>
                            </li>
                            <li className={`${'/customers' === pathName || '/add-customer' === pathName || '/add-customer' === pathName ? 'active' : ''}`}>
                                <Link href="/customers"><FeatherIcon icon="users" /><span>Customers</span></Link>
                            </li>
                            <li className={`${'/items' === pathName || '/AddItems' === pathName || '/EditItem' === pathName || '/ViewItem' === pathName ? 'active' : ''}`}>
                                <Link href="/items"><FeatherIcon icon="file-text" /><span>Item</span></Link>
                            </li>
                            <li className={`${'/customers' === pathName || '/items' === pathName || '/orders' === pathName || '/expenses' === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "sales" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "sales" ? "" : "sales")} ><FeatherIcon icon="lock" /> <span> Sales </span> <span className="menu-arrow"></span></Link>
                                {
                                    isSideMenu == "sales" ?
                                        <ul>
                                            <li className={`${'/customers' === pathName ? 'active' : ''}`}><Link href="/customers"> Customers </Link></li>
                                            <li className={`${'/invoices' === pathName ? 'active' : ''}`}><Link href="/invoices"> Invoices </Link></li>
                                            <li className={`${'/retainer' === pathName ? 'active' : ''}`}><Link href="/retainer"> Retainer </Link></li>
                                            <li className={`${'/recurring' === pathName ? 'active' : ''}`}><Link href="/recurring"> Recurring Invoice</Link></li>
                                            <li className={`${'/revenue' === pathName ? 'active' : ''}`}><Link href="/revenue"> Revenue </Link></li>
                                            <li className={`${'/estimates' === pathName ? 'active' : ''}`}><Link href="/estimates"> Estimates </Link></li>
                                            <li className={`${'/sales-order' === pathName ? 'active' : ''}`}><Link href="/sales-order"> Sales-order </Link></li>
                                            <li className={`${'/payment-link' === pathName ? 'active' : ''}`}><Link href="/payment-link"> Payment-link </Link></li>
                                            <li className={`${'/credit-note' === pathName ? 'active' : ''}`}><Link href="/credit-note"> Credit-note </Link></li>
                                        </ul> : ""
                                }
                            </li>

                            <li className={`${'/vendors' === pathName || '/expenses' === pathName || '/recurring-expenses' === pathName || '/vendorCredits' === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "purchase" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "purchase" ? "" : "purchase")} ><FeatherIcon icon="lock" /> <span> Purchase </span> <span className="menu-arrow"></span></Link>
                                {
                                    isSideMenu == "purchase" ?
                                        <ul>
                                            <li className={`${'/vendors' === pathName ? 'active' : ''}`}><Link href="/vendors"> Vendors </Link></li>
                                            <li className={`${'/expenses' === pathName ? 'active' : ''}`}><Link href="/expenses"> Expenses </Link></li>
                                            <li className={`${'/recurring-expenses' === pathName ? 'active' : ''}`}><Link href="/recurring-expenses"> Recurring expenses </Link></li>
                                            <li className={`${'/bill' === pathName ? 'active' : ''}`}><Link href="/bill"> Vendor Credit</Link></li>
                                            <li className={`${'/purchase-orders' === pathName ? 'active' : ''}`}><Link href="/purchase-orders"> Purchase Orders </Link></li>
                                            <li className={`${'/payments-made' === pathName ? 'active' : ''}`}><Link href="/payments-made"> Payments-made </Link></li>
                                            <li className={`${'/vendor-credits' === pathName ? 'active' : ''}`}><Link href="/vendor-credits"> Vendor credits </Link></li>

                                        </ul> : ""
                                }
                            </li>

                            <li className={`${'/journals' === pathName || '/chart-of-accounts' === pathName || '/budget' === pathName || '/lock-transaction' === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "accounting" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "accounting" ? "" : "accounting")} ><FeatherIcon icon="lock" /> <span> Accounting </span> <span className="menu-arrow"></span></Link>
                                {
                                    isSideMenu == "accounting" ?
                                        <ul>
                                            <li className={`${'/journals' === pathName ? 'active' : ''}`}><Link href="/journals"> Journals </Link></li>
                                            <li className={`${'/chart-of-accounts' === pathName ? 'active' : ''}`}><Link href="/chart-of-accounts"> chart-of-accounts </Link></li>
                                            <li className={`${'/budget' === pathName ? 'active' : ''}`}><Link href="/budget"> budget </Link></li>


                                        </ul> : ""
                                }
                            </li>
                            <li className={`${'/sales-report' === pathName || '/expenses-report' === pathName || '/profit-loss-report' === pathName
                                || '/taxs-report' === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link href="#" className={isSideMenu == "report" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "report" ? "" : "report")}><FeatherIcon icon="pie-chart" /> <span> Reports</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "report" ?
                                    <ul>
                                        <li className={`${'/sales-report' === pathName ? 'active' : ''}`}><Link href="/sales-report">Sales Report</Link></li>
                                        <li className={`${'/expenses-report' === pathName ? 'active' : ''}`}><Link href="/expenses-report">Expenses Report</Link></li>
                                        <li className={`${'/profit-loss-report' === pathName ? 'active' : ''}`}><Link href="/profit-loss-report">Profit &amp; Loss Report</Link></li>
                                        <li className={`${'/taxs-report' === pathName ? 'active' : ''}`}><Link href="/taxs-report">Taxs Report</Link></li>
                                    </ul>
                                    : ""
                                }
                            </li>

                            <li className={`${'/profile' === pathName ? 'active' : ''}`}>
                                <Link href="/profile"><FeatherIcon icon="user-plus" /> <span>Profile</span></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </Scrollbars>
        </div>

    );

}
export default FlightSidebar;