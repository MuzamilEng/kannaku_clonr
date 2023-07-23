import React from "react";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import img1 from "../assets/img/profiles/avatar-01.jpg";
import img2 from "../assets/img/profiles/avatar-02.jpg";
import img3 from "../assets/img/profiles/avatar-03.jpg";
import img4 from "../assets/img/profiles/avatar-04.jpg";
import LogoImg from "../assets/img/logo.png";
import LogoSmallImg from "../assets/img/logo-small.png";
import UsFlag from "../assets/img/flags/us.png";
import FrFlag from "../assets/img/flags/fr.png";
import EsFlag from "../assets/img/flags/es.png";
import DeFlag from "../assets/img/flags/de.png";
import $ from "jquery";

const Header = () => {
    const handlesidebar = () => {
        document.body.classList.toggle("mini-sidebar");
    };

    return (
        <div className="header ecommerce-header">
            <div className="header-left">
                <Link href="/ecommerce">
                    <a className="logo">
                        <Image
                            src={LogoImg}
                            alt="Logo"
                            width="175"
                            height="45"
                        />
                    </a>
                </Link>
                <Link href="/ecommerce">
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

            <div className="top-nav-search ecommerce-search">
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Products, Brands and Categories"
                    />
                    <button className="btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <a className="mobile_btn" id="mobile_btn">
                <i className="fas fa-bars"></i>
            </a>

            <ul className="nav user-menu">

                <li className="nav-item dropdown has-arrow main-drop">
                    <a
                        href="#"
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                    >
                        <span className="user-img">
                            <Image width="32" height="32" src={img1} alt="" />
                            <span className="status online"></span>
                        </span>
                        <span>Account</span>
                    </a>
                    <div className="dropdown-menu">
                        <Link href="/profile">
                            <a className="dropdown-item">
                                <FeatherIcon icon="user" className="mr-1" />{" "}
                                Profile
                            </a>
                        </Link>
                        <Link href="/settings">
                            <a className="dropdown-item">
                                <FeatherIcon icon="settings" className="mr-1" />
                                Orders
                            </a>
                        </Link>
                        <Link href="/settings">
                            <a className="dropdown-item">
                                <FeatherIcon icon="settings" className="mr-1" />
                                Saved Items
                            </a>
                        </Link>
                        <Link href="/login">
                            <a className="dropdown-item">
                                <FeatherIcon icon="log-out" className="mr-1" />
                                Logout
                            </a>
                        </Link>
                    </div>
                </li>

                <li className="nav-item dropdown has-arrow flag-nav">
                    <Link href='ecommerce/help'>
                    <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                    >
                        <i className="fa fa-question"/>
                        <span>Help</span>

                    
                    </a>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">
                            <i className="fa fa-question mb-1"/>
                            Help Center
                        </a>
                       
                    </div>
                </li>


                <li className="nav-item dropdown has-arrow main-drop">
                    <Link href='/ecommerce/cart'>
                    <a>
                        <span>Chart</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="badge rounded-pill badge-notification bg-warning">1</span>
                    </a>
                    </Link>

                </li>
            </ul>
        </div>
    );
};
export default Header;
