import React, { useState } from 'react'
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { img1, img2, img3, img4, LogoImg, LogoSmallImg, UsFlag, FrFlag, EsFlag, DeFlag, logowhite } from "../_components/imagepath"
import Image from 'next/image'
import phone from "../assets/img/phone.png";

const Header = (props) => {

	const handlesidebar = () => {
		document.body.classList.toggle('mini-sidebar');
	}
	const onMenuClik = () => {
		props.onMenuClick()
	}


	return (
		<div className="row">
			<div className="col-12">
				<div className="header upper-header">
					<div className="header-left header-left-one">
						<div className="row">
							<div className="col-1 pt-3 ms-3">
								<Image layout='responsive' src={phone} alt="" />
							</div>
							<div className="col pt-3" style={{marginLeft:"-30px", marginTop:"3px"}}>
								<Link style={{color:"gray"}} href="/index" >
									<a>Download the App</a>
								</Link>
							</div>
						</div>
						
					</div>
					<ul className="nav user-menu">
						<li className='nav-item'>
							<Link href="/index" >
								<a>
								Book Appointment
								</a>
								
							</Link>
						</li>
						<li className='nav-item'>
							<Link href="/index" >
								<a>

								Chat with Doctor
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href="/index" >
								<a>

								Order Medicines
								</a>
							</Link>
						</li>
						<li className="nav-item dropdown has-arrow flag-nav">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
								<span>More</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<a href="#" className="dropdown-item">
									More
								</a>
								<a href="#" className="dropdown-item">
									More
								</a>
								

							</div>
						</li>
						
						<li className='nav-item'>
							<Link href="/index" >
								<a>

								Data Security
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="col-12 mt-5">					
				<div className="header header-one">

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

					<a className="mobile_btn" id="mobile_btn" href="#" onClick={() => onMenuClik()}>
						<i className="fas fa-bars"></i>
					</a>

					<ul className="nav user-menu">
						<li className="nav-item dropdown has-arrow flag-nav">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
								<span>For Clinincs, Hospitals</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<a href="#" className="dropdown-item">
									For Clinincs and Hospitals
								</a>
								<a href="#" className="dropdown-item">
									For Clinincs
								</a>
								<a href="#" className="dropdown-item">
									For Hospitals
								</a>

							</div>
						</li>


						<li className="nav-item dropdown has-arrow main-drop">
							<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
								<span className="user-img">
									<Image layout='responsive' src={img1} alt="" />
									<span className="status online"></span>
								</span>
								<span>Jahmur Ghifari</span>
							</a>
							<div className="dropdown-menu">
								<Link className="dropdown-item" href="/profile"><a><FeatherIcon icon="user" className="me-1" />  Profile</a></Link>
								<Link className="dropdown-item" href="/settings"><a><FeatherIcon icon="settings" className="me-1" /> Settings</a></Link>
								<Link className="dropdown-item" href="/login"><a><FeatherIcon icon="log-out" className="me-1" /> Logout</a></Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);

}
export default Header;