import React,  {useState} from 'react'
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import {img1,img2,img3,img4,LogoImg,LogoSmallImg,UsFlag,FrFlag,EsFlag,DeFlag,logowhite} from "../_components/imagepath"
import Image from 'next/image'

const Header = (props) => {

	const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
	}
	const onMenuClik = () => {
		props.onMenuClick()
	}


        return(
            <div className="header">

<div className="header-left">
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
		
				
				<div className="top-nav-search">
					<form>
						<input type="text" className="form-control" placeholder="Search here" />
						<button className="btn" type="submit"><i className="fas fa-search"></i></button>
					</form>
				</div>						
				<a className="mobile_btn" id="mobile_btn"  href="#"  onClick={() => onMenuClik()}>
					<i className="fas fa-bars"></i>
				</a>				
				<ul className="nav user-menu align-items-center ">				
					
					<li className='nav-item'><Link href="/booking/hotels"><a>Home</a></Link></li>							
					<li className='nav-item'><Link href="/about"><a>About</a></Link></li>							
					<li className='nav-item'><Link href="/features"><a>Features</a></Link></li>							
					<li className='nav-item'><Link href="/pricing"><a>Pricing</a></Link></li>							
					<li className="nav-item dropdown has-arrow main-drop">
						<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
							<span className="user-img">
								<Image layout='responsive' src={img1} alt="" />
								<span className="status online"></span>
							</span>
							<span>Admin</span>
						</a>
						<div className="dropdown-menu">
							<Link className="dropdown-item" href="/profile"><a><FeatherIcon icon="user" className="me-1" /> Profile</a></Link>
							<Link className="dropdown-item" href="/settings"><a><FeatherIcon icon="settings" className="me-1" />Settings</a></Link>
							<Link className="dropdown-item" href="/login"><a><FeatherIcon icon="log-out" className="me-1" />Logout</a></Link>
						</div>
					</li>					
				</ul>				
			</div>
        );
    
}
export default Header;