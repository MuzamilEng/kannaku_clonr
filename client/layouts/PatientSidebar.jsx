import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useRouter } from "next/router";

const Sidebar = (props) => {

  const [isSideMenu, setSideMenu] = useState("")

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value)

  }

  console.log("Working", isSideMenu)
  const router = useRouter();

  let pathName = router.pathname;
  return (
    <div className="sidebar sidebar-patient" id="sidebar">
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
              <li className="menu-title"><h4>Your Drive </h4></li>
              <hr />
              <li
                className={`${"/patient/medicalrecords" === pathName ? "active" : ""
                  }`}
              >
                <Link href="/patient/medicalrecords">
                  <a>

                  <span>Medical Records</span>
                  </a>
                </Link>
              </li>

              <li className={`${pathName.includes("/patient/appointments")  ? "active" : ""  }`}>
                <Link href="/patient/appointments">
                  <a>
                  <span>Appointments</span>
                    
                  </a>
                </Link>
              </li>
              <li className={`${pathName.includes("/patient/labtest")  ? "active" : ""  }`}>
                <Link href="/patient/labtest">
                <a>
                    
                  <span>Lab Test</span>
                    </a>
                </Link>
              </li>
              <li className={`${pathName.includes("/patient/medicineorders")  ? "active" : ""  }`}>
                <Link href="/patient/medicineorders">
                <a>
                    
                  <span>Medicine Orders</span>
                    </a>
                </Link>
              </li>
              <li className={`${pathName.includes("/patient/onlineconsultations")  ? "active" : ""  }`}>
                <Link href="/patient/onlineconsultations">
                <a>
                    
                  <span>Online Consultations</span>
                    </a>
                </Link>
              </li>
              <li className={`${pathName.includes("/patient/articles")  ? "active" : ""  }`}>
                <Link href="/patient/articles">
                <a>
                    
                  <span>Articles</span>
                    </a>
                </Link>
              </li>
              <li className={`${pathName.includes("/patient/feedback")  ? "active" : ""  }`}>
                <Link href="/patient/feedback">
                <a>
                    
                  <span>Feedback</span>
                    </a>
                </Link>
              </li>
              <li className={`${pathName.includes("/patient/payment")  ? "active" : ""  }`}>
                <Link href="/patient/payment">
                <a>
                    
                  <span>Payment</span>
                    </a>
                </Link>
              </li>

              
              
            </ul>
          </div>
        </div>
      </Scrollbars>
    </div>
  );

}
export default Sidebar;