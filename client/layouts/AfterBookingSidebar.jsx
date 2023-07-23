import React, { useEffect, useState } from "react";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
import { useRouter } from "next/router";

const SidebarAfterBooking = (props) => {
  const [isSideMenu, setSideMenu] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  console.log("Working", isSideMenu);

  const router = useRouter();

  let pathName = router.pathname;

  useEffect(() => {
    var $this = $("#sidebar-menu a");
    var $wrapper = $(".main-wrapper");
    var $slimScrolls = $(".slimscroll");
    console.log(router);
    // Sidebar Slimscroll
    if ($slimScrolls.length > 0) {
      $slimScrolls.slimScroll({
        height: "auto",
        width: "100%",
        position: "right",
        size: "7px",
        color: "#ccc",
        allowPageScroll: false,
        wheelStep: 10,
        touchScrollStep: 100,
      });
      var wHeight = $(window).height() - 60;
      $slimScrolls.height(wHeight);
      $(".sidebar .slimScrollDiv").height(wHeight);
      $(window).resize(function () {
        var rHeight = $(window).height() - 60;
        $slimScrolls.height(rHeight);
        $(".sidebar .slimScrollDiv").height(rHeight);
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
        var targ = $(e.target).closest(".sidebar").length;
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

  return (
    <div className="sidebar sidebar-hospital" id="sidebar">
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
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu sidebar-menu-two">
            <ul>
              {/* <li className="menu-title"><span>Customer</span></li> */}
              <li
                className={`${
                  "/clients-calendar" === pathName ? "active" : ""
                }`}
              >
                <Link href="/calendar">
                  <a>
                    <FeatherIcon icon="calendar" /> <span>Calendar</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  pathName.includes("/patients") ||
                  pathName.includes("/emr") ||
                  pathName.includes("/billing")
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/patients/profile">
                  <a>
                    <FeatherIcon icon="book" /> <span>Patients</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  pathName.includes("/communications") ? "active" : ""
                }`}
              >
                <Link href="/communications/campaign">
                  <a>
                    <FeatherIcon icon="message-circle" />
                    <span>Communications</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/reports" === pathName ||
                  "/reports" === pathName ||
                  "/reports" === pathName ||
                  "/reports" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/reports">
                  <a>
                    <FeatherIcon icon="bar-chart" />
                    <span>Reports</span>
                  </a>
                </Link>
              </li>
              <li
                className={`${
                  "/backoffice/inventory" === pathName ||
                  "/backoffice/expenses" === pathName
                    ? "active submenu"
                    : "submenu"
                }`}
              >
                <a href="#">
                  <FeatherIcon icon="home" /> <span>Back Office</span>
                    <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li
                      className={`${"/backoffice/inventory" === pathName ? "active" : ""}`}
                    >
                      <Link href="/backoffice/inventory">
                        <a>
                          <FeatherIcon icon="layers" /> Inventory
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`${
                        "/backoffice/expenses" === pathName ? "active" : ""
                      }`}
                    >
                      <Link href="/backoffice/expenses">
                        <a>
                          <FeatherIcon icon="dollar-sign" /> Expenses
                        </a>
                      </Link>
                    </li>
                  </ul>
              </li>
              <hr />
              <li
                className={`${
                  pathName.includes("/profile/profile") ||
                  pathName.includes("registration") ||
                  pathName.includes("educationqualification") ||
                  pathName.includes("connectpractice")
                    ? "active"
                    : ""
                }`}
              >
                <Link href="/profile/profile">
                  <a>
                    <FeatherIcon icon="user" />

                    <span>profile</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/prime" === pathName ? "active" : ""}`}>
                <Link href="/prime">
                  <a>
                    <FeatherIcon icon="award" />

                    <span>Prime</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/feedback" === pathName ? "active" : ""}`}>
                <Link href="/feedback">
                  <a>
                    <FeatherIcon icon="thumbs-up" />
                    <span>Feedback</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/reach" === pathName ? "active" : ""}`}>
                <Link href="/reach">
                  <a>
                    <FeatherIcon icon="volume-2" />
                    <span>Reach</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/consult" === pathName ? "active" : ""}`}>
                <Link href="/consult">
                  <a>
                    <FeatherIcon icon="briefcase" />
                    <span>Consult</span>
                  </a>
                </Link>
              </li>
              <li className={`${"/health-feed" === pathName ? "active" : ""}`}>
                <Link href="/health-feed">
                  <a>
                    <FeatherIcon icon="speaker" />
                    <span>Health Feed</span>
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};
export default SidebarAfterBooking;
