import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
// import AuthContext from "../store/authStore";
import AuthContext from "../../store/authStore";


const DropdownList = (props) => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    var $this = $("#sidebar-menu a");
    var $wrapper = $(".main-wrapper");
    var $slimScrolls = $(".slimscroll");
    console.log(router);
    // Sidebar Slimscroll
    if ($slimScrolls.length > 0) {
      $slimScrolls.slimScroll({
        height: "100%",
        width: "100%",
        position: "right",
        size: "7px",
        color: "#ccc",
        allowPageScroll: false,
        wheelStep: 10,
        touchScrollStep: 100,
      });
      var wHeight = $(window).height();
      $slimScrolls.height(wHeight);
      $(".sidebar1 .slimScrollDiv").height(wHeight);
      $(window).resize(function () {
        var rHeight = $(window).height() - 60;
        $slimScrolls.height(rHeight);
        $(".sidebar1 .slimScrollDiv").height(rHeight);
      });
    }
    $("#sidebar-menu a").on("click", function (e) {
      if ($(this).parent().hasClass("submenu")) {
        e.preventDefault();
      }
      if (!$(this).parent().hasClass("submenu")) {
        $(".sidebar-overlay").trigger("click");
      }
      if (!$(this).hasClass("subdrop")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("subdrop");
        $(this).next("ul").slideDown(350);
        $(this).addClass("subdrop");
      } else if ($(this).hasClass("subdrop")) {
        $(this).removeClass("subdrop");
        $(this).next("ul").slideUp(350);
      }
    });

    $("body").append('<div class="sidebar-overlay"></div>');
    $(document).on("click", "#mobile_btn", function () {
      $wrapper.toggleClass("slide-nav");
      $(".sidebar-overlay").toggleClass("opened");
      $("html").addClass("menu-opened");
      return false;
    });
    // Sidebar overlay
    $(".sidebar-overlay").on("click", function () {
      $wrapper.removeClass("slide-nav");
      $(".sidebar-overlay").removeClass("opened");
      $("html").removeClass("menu-opened");
    });
    $("#sidebar-menu ul li.submenu a.active")
      .parents("li:last")
      .children("a:first")
      .addClass("active")
      .trigger("click");

    if ($(".page-wrapper").length > 0) {
      var height = $(window).height();
      $(".page-wrapper").css("min-height", height);
    }

    // Page Content Height Resize
    $(window).resize(function () {
      if ($(".page-wrapper").length > 0) {
        var height = $(window).height();
        $(".page-wrapper").css("min-height", height);
      }
    });

    $(document).on("mouseover", function (e) {
      e.stopPropagation();
      if (
        $("body").hasClass("mini-sidebar") &&
        $("#toggle_btn").is(":visible")
      ) {
        var targ = $(e.target).closest(".sidebar1").length;
        if (targ) {
          $("body").addClass("expand-menu");
          $(".subdrop + ul").slideDown();
        } else {
          $("body").removeClass("expand-menu");
          $(".subdrop + ul").slideUp();
        }
        return false;
      }
    });
  }, []);

  const [usrType, setUsrType] = React.useState("");

  useEffect(() => {
    let type = localStorage.getItem("accountType");
    setUsrType(type);
  }, []);

  // console.log("type", usrType);

  let pathName = router.pathname;
  return (
    <div className="sidebar1 sidebar-two" id="sidebar1">
     
        <div className="sidebar-inner ">
          <div id="sidebar-menu" className="sidebar-menu sidebar-menu-two">
            <ul>
              <li className="menu-title">
                <span>Customer Menu</span>
              </li>
              <li className={`${"/" === pathName ? "active" : ""}`}>
                <Link href="/">
                  <a>
                    <FeatherIcon icon="home" /> <span className="margin">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/internet" === pathName ||
                  "/cabletv" === pathName ||
                  "/education" === pathName ||
                  "/electricity" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="home" /> <span className="margin">Bills Payment</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className={`${"/internet" === pathName ? "active" : ""}`}>
                    <Link href="/internet">
                      <a>Airtime & Data</a>
                    </Link>
                  </li>
                  <li className={`${"/cabletv" === pathName ? "active" : ""}`}>
                    <Link href="/cabletv">
                      <a>cableTv</a>
                    </Link>
                  </li>
                  <li
                    className={`${"/electricity" === pathName ? "active" : ""}`}
                  >
                    <Link href="/electricity">
                      <a>Electricity</a>
                    </Link>
                  </li>
                  <li
                    className={`${"/education" === pathName ? "active" : ""}`}
                  >
                    <Link href="/education">
                      <a>Education</a>
                    </Link>
                  </li>
                  <li className={`${"/dues" === pathName ? "active" : ""}`}>
                    <Link href="/dues">
                      <a>Dues & Subscription </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  "/Hotel/Home" === pathName ||
                  "/Hotel3/Details" === pathName ||
                  "/Hotel2/Searchs" === pathName ||
                  "/Hotel4/Invoice" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="home" /> <span className="margin">Hotel</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className={`${"/Hotel/Home" === pathName ? "active" : ""}`}>
                    <Link href="/Hotel/Home">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className={`${"/Hotel/Details" === pathName ? "active" : ""}`}>
                    <Link href="/Hotel/Details">
                      <a>Details</a>
                    </Link>
                  </li>
                  <li
                    className={`${"/Hotel/Searchs" === pathName ? "active" : ""}`}
                  >
                    <Link href="/Hotel/Searchs">
                      <a>Search</a>
                    </Link>
                  </li>
                  <li
                    className={`${"/Hotel/Invoice" === pathName ? "active" : ""}`}
                  >
                    <Link href="/Hotel/Invoice">
                      <a>Invoice</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  "/Health/doctors" === pathName ||
                  "/Health/patient" === pathName ||
                  "/Health/hospital" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="home" /> <span className="margin">Health</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className={`${"/Health/doctors" === pathName ? "active" : ""}`}>
                    <Link href="/Health/doctors">
                      <a>Doctors</a>
                    </Link>
                  </li>
                  <li className={`${"/Health/patient" === pathName ? "active" : ""}`}>
                    <Link href="/Health/patient">
                      <a>Patients</a>
                    </Link>
                  </li>
                  <li
                    className={`${"/Health/hospital" === pathName ? "active" : ""}`}
                  >
                    <Link href="/Health/hospital">
                      <a>Hospital</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${"/doctor/doctors" === pathName ? "active" : ""}`}
              >
                <Link href="/doctor/doctors">
                  <a>
                    <FeatherIcon icon="user-check" />{" "}
                    <span className="margin">All Consultation Services</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${"/booking/hotels" === pathName ? "active" : ""}`}
              >
                <Link href="/booking/hotels">
                  <a>
                    <FeatherIcon icon="file-text" /> <span className="margin">Booking</span>
                  </a>
                </Link>
              </li>
               {/* currency exchange */}
               <li
                className={`${
                  "/CurrencyExchange" === pathName ||
                  "/CurrencyExchange/Dashboard" === pathName ||
                  "/CurrencyExchange/VertoRate" === pathName ||
                  "/CurrencyExchange/DesiredRate" === pathName ||
                  "/CurrencyExchange/Enjoy" === pathName ||
                  "/CurrencyExchange/EWallet" === pathName ||
                  "/CurrencyExchange/MailNotification" === pathName ||
                  "/CurrencyExchange/Management" === pathName ||
                  "/CurrencyExchange/MarketPlace" === pathName ||
                  "/CurrencyExchange/Transactions" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="/CurrencyExchange">
                  <CurrencyBitcoinIcon className=""/> <span>Currency Exchange</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className={`${"/CurrencyExchange/Dashboard" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/Dashboard">
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/VertoRate" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/VertoRate">
                      <a>VertoRate</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/DesiredRate" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/DesiredRate">
                      <a>Desired Rate</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/Enjoy" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/Enjoy">
                      <a>Enjoy Muti-Currency</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/EWallet" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/EWallet">
                      <a>Ewallets</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/Management" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/Management">
                      <a>Management</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/MarketPlace" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/MarketPlace">
                      <a>Marketplace</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/Transactions" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/Transactions">
                      <a>Transactions</a>
                    </Link>
                  </li>
                  <li className={`${"/CurrencyExchange/MailNotification" === pathName ? "active" : ""}`}>
                    <Link href="/CurrencyExchange/MailNotification">
                      <a>Email Notifications</a>
                    </Link>
                  </li>
                  
                </ul>
              </li>
              {/* currency exchange */}
              <li className={`${"/ecommerce" === pathName ? "active" : ""}`}>
                <Link href="/ecommerce">
                  <a>
                    <FeatherIcon icon="home" />
                    <span className="margin">Online Shop</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/payment_link" === pathName ||
                  "/save" === pathName ||
                  "/income_expense" === pathName ||
                  "/money_transfer" === pathName ||
                  "/savings" === pathName ||
                  "/loan" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="home" /> <span className="margin">My Finance</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${
                      "/funds_transfer" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/funds_transfer">
                      <a>Banking</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/payment_link" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/payment_link">
                      <a>Payment link</a>
                    </Link>
                  </li>
                  <li className={`${"/save" === pathName ? "active" : ""}`}>
                    <Link href="/save">
                      <a>Investment</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/income_expense" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/income_expense">
                      <a>Income & Expense</a>
                    </Link>
                  </li>
                  <li className={`${"/savings" === pathName ? "active" : ""}`}>
                    <Link href="/savings">
                      <a>Budget & Savings</a>
                    </Link>
                  </li>
                  <li className={`${"/savings" === pathName ? "active" : ""}`}>
                    <Link href="/savings">
                      <a>Reconciliations</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`${"/referral" === pathName ? "active" : ""}`}>
                <Link href="/referral">
                  <a>
                    <FeatherIcon icon="users" />
                    <span className="margin">Referral</span>
                  </a>
                </Link>
              </li>

              <li className={`${"/dues" === pathName ? "active" : ""}`}>
                <Link href="/dues">
                  <a>
                    <FeatherIcon icon="users" />
                    <span className="margin">Dues & Subscription</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/patient/medicalrecords" === pathName ||
                  "/patient/appointments" === pathName ||
                  "/patient/labtest" === pathName ||
                  "/patient/labtest" === pathName ||
                  "/patient/onlineconsultations" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="home" /> <span>Patients Report</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${
                      "/patient/medicalrecords" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/patient/medicalrecords">
                      <a>Medical Records</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/patient/appointments" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/patient/appointments">
                      <a>Appointments</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/patient/labtest" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/patient/labtest">
                      <a>Lab test</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/patient/medicineorders" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/patient/medicineorders">
                      <a>Medicine orders</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/patient/onlineconsultations" === pathName
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link href="/patient/onlineconsultations">
                      <a>online consultations </a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/patient/articles" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/patient/articles">
                      <a>Patient Articles </a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/patient/feedback" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/patient/feedback">
                      <a>Patient Feedback </a>
                    </Link>
                  </li>
                </ul>
              </li>
              {usrType !== "CUSTOMERS" && (
                <li className="menu-title">
                  <span className="margin">Merchant Menu</span>
                </li>
              )}
              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/customers" === pathName ||
                    "/add-customer" === pathName ||
                    "/add-customer" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link href="/customers">
                    <a>
                      <FeatherIcon icon="users" />
                      <span className="margin">Customers</span>
                    </a>
                  </Link>
                </li>
              )}
              {usrType !== "CUSTOMERS" && (
                <li className={`${"/item" === pathName ? "active" : ""}`}>
                  <Link href="/item">
                    <a>
                      <FeatherIcon icon="users" />
                      <span className="margin">Item</span>
                    </a>
                  </Link>
                </li>
              )}

              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/invoices" === pathName ||
                    "/recurring_invoice" === pathName ||
                    "/revenue" === pathName ||
                    "/estimates" === pathName ||
                    "/sales-order" === pathName ||
                    "/payment-link" === pathName ||
                    "/retainer" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <a href="#">
                    <FeatherIcon icon="pie-chart" /> <span className="margin"> Sales</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${"/invoices" === pathName ? "active" : ""}`}
                    >
                      <Link href="/invoices">
                        <a>Invoices</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/recurring_invoice" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/recurring_invoice">
                        <a>Recurring Invoice</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/revenue" === pathName ? "active" : ""}`}
                    >
                      <Link href="/revenue">
                        <a>Revenue</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/estimates" === pathName ? "active" : ""}`}
                    >
                      <Link href="/estimates">
                        <a>Estimates</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/sales-order" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/sales-order">
                        <a>Sales Order</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/payment-link" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/payment-link">
                        <a>Payment Link</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/retainer" === pathName ? "active" : ""}`}
                    >
                      <Link href="/retainer">
                        <a>Retainer</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/vendors" === pathName ||
                    "/expenses" === pathName ||
                    "/recurring-expenses" === pathName ||
                    "/bill" === pathName ||
                    "/purchase-order" === pathName ||
                    "/payments-made" === pathName ||
                    "/vendor-credits" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <a href="#">
                    <FeatherIcon icon="pie-chart" /> <span className="margin"> Purchase</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${"/vendors" === pathName ? "active" : ""}`}
                    >
                      <Link href="/vendors">
                        <a>Vendors</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/expenses" === pathName ? "active" : ""}`}
                    >
                      <Link href="/expenses">
                        <a>Expenses</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/recurring-expenses" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/recurring-expenses">
                        <a>Recurring Expenses</a>
                      </Link>
                    </li>
                    <li className={`${"/bill" === pathName ? "active" : ""}`}>
                      <Link href="/bill">
                        <a>Vendor Credit</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/purchase-order" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/purchase-order">
                        <a>Purchase Order</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/payments-made" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/payments-made">
                        <a>Payment Link</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/vendor-credits" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/vendor-credits">
                        <a>Vendor Credit</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {/* POS Menu */}
              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/pos_index" === pathName ||
                    "/product" === pathName ||
                    "/stock_transfer" === pathName ||
                    "/pos" === pathName ||
                    "/setting" === pathName ||
                    "/payment-link" === pathName ||
                    "/pos_report" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <a href="#">
                    <FeatherIcon icon="pie-chart" /> <span className="margin"> POS</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${"/pos_index" === pathName ? "active" : ""}`}
                    >
                      <Link href="/pos_index">
                        <a>Dashboard</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/product" === pathName ? "active" : ""}`}
                    >
                      <Link href="/product">
                        <a>Products & Supplier</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/stock_transfer" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/stock_transfer">
                        <a>Stock Transfer</a>
                      </Link>
                    </li>
                    <li className={`${"/pos" === pathName ? "active" : ""}`}>
                      <Link href="/pos">
                        <a>POS</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/pos_setting" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/pos_setting">
                        <a>Setting</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/pos_report" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/pos_report">
                        <a>Report</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {/* Accounting */}
              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/journal" === pathName ||
                    "/chart_of_accounts" === pathName ||
                    "/budget" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <a href="#">
                    <FeatherIcon icon="pie-chart" /> <span className="margin"> Accounting</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${"/journal" === pathName ? "active" : ""}`}
                    >
                      <Link href="/journal">
                        <a>Journal</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/chart_of_accounts" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/chart_of_accounts">
                        <a>CHart of Accounts</a>
                      </Link>
                    </li>
                    <li className={`${"/budget" === pathName ? "active" : ""}`}>
                      <Link href="/budget">
                        <a>Budget</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {/* Hospital Menu */}
              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/hospital/calendar" === pathName ||
                    "/patients/profile" === pathName ||
                    "/communications/campaign" === pathName ||
                    "/hospital/reports" === pathName ||
                    "/backoffice/expenses" === pathName ||
                    "/hospital/reports" === pathName ||
                    "/backoffice/inventory" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <a href="#">
                    <FeatherIcon icon="home" /> <span className="margin">Hospital Menu </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${
                        "/hospital/calendar" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/hospital/calendar">
                        <a> calendar</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/patients/profile" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/patients/profile">
                        <a>Profile</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/communications/campaign" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/communications/campaign">
                        <a>Campaign</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/hospital/reports" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/hospital/reports">
                        <a>hospital Reports</a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/backoffice/inventory" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/backoffice/inventory">
                        <a>Inventory </a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/backoffice/expenses" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/backoffice/expenses">
                        <a>BackOffice Expenses</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
              {usrType !== "CUSTOMERS" && (
                <li
                  className={`${
                    "/profile/registration" === pathName ||
                    "/prime" === pathName ||
                    "/feedback" === pathName ||
                    "/reach" === pathName ||
                    "/consult" === pathName ||
                    "/health-feed" === pathName ||
                    "/backoffice/inventory" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <a href="#">
                    <FeatherIcon icon="home" /> <span className="margin">Doctor Menu </span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${
                        "/profile/registration" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/profile/registration">
                        <a> Doctor registration</a>
                      </Link>
                    </li>
                    <li className={`${"/prime" === pathName ? "active" : ""}`}>
                      <Link href="/prime">
                        <a>Prime</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/feedback" === pathName ? "active" : ""}`}
                    >
                      <Link href="/feedback">
                        <a>Feedback</a>
                      </Link>
                    </li>
                    <li className={`${"/reach" === pathName ? "active" : ""}`}>
                      <Link href="/reach">
                        <a>Reach</a>
                      </Link>
                    </li>
                    <li
                      className={`${"/consult" === pathName ? "active" : ""}`}
                    >
                      <Link href="/consult">
                        <a>Consult </a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/health-feed" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/health-feed">
                        <a>Health Feed</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              <hr />
            
              <li className="menu-title">
                <span className="margin">Others from template</span>
              </li>
              <li
                className={`${
                  "/customers" === pathName ||
                  "/add-customer" === pathName ||
                  "/add-customer" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/customers">
                  <a>
                    <FeatherIcon icon="users" />
                    <span className="margin">Customers</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/referral" === pathName ||
                  "/referral" === pathName ||
                  "/referral" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/referral">
                  <a>
                    <FeatherIcon icon="users" />
                    <span className="margin">Referral</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/expense_cat" === pathName || "/expense_report" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="pie-chart" /> <span className="margin"> Expense</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${"/expense_cat" === pathName ? "active" : ""}`}
                  >
                    <Link href="/expense_cat">
                      <a>Expense Category</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/expense_report" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/expense_report">
                      <a>Expenses Report</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Old estimate */}
              <li
                className={`${
                  "/estimates" === pathName ||
                  "/add-estimate" === pathName ||
                  "/edit-estimate" === pathName ||
                  "/view-estimate" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/estimates">
                  <a>
                    <FeatherIcon icon="file-text" />
                    <span className="margin">Estimates</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/invoices" === pathName ||
                  "/add-invoice" === pathName ||
                  "/edit-invoice" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/invoices">
                  <a>
                    <FeatherIcon icon="clipboard" /> <span className="margin">Invoices</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/payments" === pathName || "/add-payments" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/payments">
                  <a>
                    <FeatherIcon icon="credit-card" /> <span className="margin">Payments</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/expenses" === pathName ||
                  "/add-expenses" === pathName ||
                  "/edit-expenses" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/expenses">
                  <a>
                    <FeatherIcon icon="package" /> <span className="margin">Expenses</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/sales-report" === pathName ||
                  "/expenses-report" === pathName ||
                  "/profit-loss-report" === pathName ||
                  "/taxs-report" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="pie-chart" /> <span className="margin"> Reports</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${
                      "/sales-report" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/sales-report">
                      <a>Sales Report</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/expenses-report" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/expenses-report">
                      <a>Expenses Report</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/profit-loss-report" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/profit-loss-report">
                      <a>Profit &amp; Loss Report</a>
                    </Link>
                  </li>
                  <li
                    className={`${"/taxs-report" === pathName ? "active" : ""}`}
                  >
                    <Link href="/taxs-report">
                      <a>Taxs Report</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  "/settings" === pathName ||
                  "/preferences" === pathName ||
                  "/tax-types" === pathName ||
                  "/expense-category" === pathName ||
                  "/notifications" === pathName ||
                  "/change-password" === pathName ||
                  "/delete-account" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/settings">
                  <a>
                    <FeatherIcon icon="settings" /> <span className="margin">Settings</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/chat" === pathName ||
                  "/calendar" === pathName ||
                  "/inbox" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="grid" /> <span className="margin"> Application</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className={`${"/chat" === pathName ? "active" : ""}`}>
                    <Link href="/chat">
                      <a>Chat</a>
                    </Link>
                  </li>
                  <li className={`${"/calendar" === pathName ? "active" : ""}`}>
                    <Link href="/calendar">Calendar</Link>
                  </li>
                  <li className={`${"/inbox" === pathName ? "active" : ""}`}>
                    <Link href="/inbox">Email</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className={`${"/profile" === pathName ? "active" : ""}`}>
                <Link href="/profile">
                  <a>
                    <FeatherIcon icon="user-plus" /> <span className="margin">Profile</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/login" === pathName ||
                  "/register" === pathName ||
                  "/forgot-password" === pathName ||
                  "/lock-screen" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="lock" /> <span className="margin"> Authentication </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className={`${"/login" === pathName ? "active" : ""}`}>
                    <Link href="/login"> Login </Link>
                  </li>
                  <li className={`${"/register" === pathName ? "active" : ""}`}>
                    <Link href="/register"> Register </Link>
                  </li>
                  <li
                    className={`${
                      "/forgot-password" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/forgot-password">
                      <a> Forgot Password </a>
                    </Link>
                  </li>
                  <li
                    className={`${"/lock-screen" === pathName ? "active" : ""}`}
                  >
                    <Link href="/lock-screen">
                      <a> Lock Screen </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  "/error-404" === pathName || "/error-500" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="alert-octagon" />{" "}
                  <span className="margin"> Error Pages </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${"/error-404" === pathName ? "active" : ""}`}
                  >
                    <Link href="/error-404">404 Error </Link>
                  </li>
                  <li
                    className={`${"/error-500" === pathName ? "active" : ""}`}
                  >
                    <Link href="/error-500">500 Error </Link>
                  </li>
                </ul>
              </li>
              <li className={`${"/users" === pathName ? "active" : ""}`}>
                <Link href="/users">
                  <a>
                    <FeatherIcon icon="users" /> <span className="margin">Users</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/blank-page" === pathName ? "active" : ""}`}>
                <Link href="/blank-page">
                  <a>
                    <FeatherIcon icon="file" /> <span className="margin">Blank Page</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/maps-vector" === pathName ? "active" : ""}`}>
                <Link href="/maps-vector">
                  <a>
                    <FeatherIcon icon="map-pin" /> <span className="margin">Vector Maps</span>
                  </a>
                </Link>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li className={`${"/components" === pathName ? "active" : ""}`}>
                <Link href="/components">
                  <a>
                    <FeatherIcon icon="layers" /> <span className="margin">Components</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/form-basic-inputs" === pathName ||
                  "/form-input-groups" === pathName ||
                  "/form-horizontal" === pathName ||
                  "/form-vertical" === pathName ||
                  "/form-mask" === pathName ||
                  "/form-validation" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="file-minus" /> <span className="margin"> Forms </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${
                      "/form-basic-inputs" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/form-basic-inputs">Basic Inputs</Link>
                  </li>
                  <li
                    className={`${
                      "/form-input-groups" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/form-input-groups">Input Groups</Link>
                  </li>
                  <li
                    className={`${
                      "/form-horizontal" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/form-horizontal">Horizontal Form</Link>
                  </li>
                  <li
                    className={`${
                      "/form-vertical" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/form-vertical">Vertical Form</Link>
                  </li>
                  <li
                    className={`${"/form-mask" === pathName ? "active" : ""}`}
                  >
                    <Link href="/form-mask"> Form Mask </Link>
                  </li>
                  <li
                    className={`${
                      "/form-validation" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/form-validation">Form Validation</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  "/tables-basic" === pathName || "/data-tables" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="layout" /> <span className="margin"> Tables </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li
                    className={`${
                      "/tables-basic" === pathName ? "active" : ""
                    }`}
                  >
                    <Link href="/tables-basic">Basic Tables</Link>
                  </li>
                  <li
                    className={`${"/data-tables" === pathName ? "active" : ""}`}
                  >
                    <Link href="/data-tables">Data Table </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};
// export default withRouter(Sidebar);
export default DropdownList;
