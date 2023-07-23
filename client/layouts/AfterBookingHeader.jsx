import React, { useState } from "react";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import {
  img1,
  img2,
  img3,
  img4,
  LogoImg,
  LogoSmallImg,
  UsFlag,
  FrFlag,
  EsFlag,
  DeFlag,
  logowhite,
} from "../_components/imagepath";
import Image from "next/image";

const Header = (props) => {
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  const onMenuClik = () => {
    props.onMenuClick();
  };

  return (
    <div className="header ">


      <div className="header-left" >
        <Link href="/">
          <a className="logo">
            <Image
              src={LogoImg}
              alt="Logo"
              width="175"
              height="45"
            />
          </a>
        </Link>
        <Link href="/">
          <a className="logo logo-small">
            <Image
              src={LogoSmallImg}
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </Link>
      </div>

      <a href="#" id="toggle_btn" onClick={handlesidebar}>
        <i className="fas fa-bars"></i>
      </a>
      <a
        className="mobile_btn"
        id="mobile_btn"
        href="#"
        onClick={() => onMenuClik()}
      >
        <i className="fas fa-bars"></i>
      </a>
      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <Image layout="responsive" src={img1} alt="" />
              <span className="status online"></span>
            </span>
          </a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" href="/profile">
              <a>
                <FeatherIcon icon="user" className="me-1" /> Profile
              </a>
            </Link>
            <Link className="dropdown-item" href="/settings">
              <a>
                <FeatherIcon icon="settings" className="me-1" />
                Settings
              </a>
            </Link>
            <Link className="dropdown-item" href="/login">
              <a>
                <FeatherIcon icon="log-out" className="me-1" />
                Logout
              </a>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
