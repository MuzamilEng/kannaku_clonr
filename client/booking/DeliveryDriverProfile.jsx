import React, { useState } from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import DeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import Link from "next/link";
import DeliverySteps from "./deliverycomponents/DeliverySteps";
import Image from 'next/image';
import img01 from "../assets/img/img-01.jpg";

function DeliveryDriverProfile() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

    return (
      <div className="main-wrapper">
        <Header />
        

        <DeliverySidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
          <BannerTwo />
        <div className="row ps-5 pe-4 mt-1 categoryArea" style={{width:"100%"}}>
          <Category categoryType="parcel"/>
        </div>
            <div className="row">
              <div className="col-12 delivery-body">
                
                <div className="row ms-4 pt-2 mt-5">
                  <div className="card">
                    <div className="card-header">
                    <h5>Rider Profile</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-4">
                          <Link href="/booking/deliverybookride">
                            <a>
                            <Image layout='responsive' src={img01} alt="" className="img-fluid" />

                            </a>

                          </Link>

                          <div className="row mt-2 mb-2">
                            <div className="col">
                            <span><i className="fa fa-star" style={{color:"yellow"}}></i></span>
                            <span><b>5.0</b></span>
                            <span><i style={{color:"green"}} className="fa fa-check-circle ms-5"></i></span>
                            <span><b>5 Years of exprience</b></span>
                            </div>
                          </div>
                          
                          <h4><u>Documents/Licence</u></h4>
                          <div className="row">
                            <div className="col">
                              <span><i style={{color:"green"}} className="fa fa-check-circle me-5"></i></span>
                              <span className="fs-5" style={{color:"gray"}}>Drivers Licence</span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col">
                              <span><i style={{color:"green"}} className="fa fa-check-circle me-5"></i></span>
                              <span className="fs-5" style={{color:"gray"}}>Riders Particulars</span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col">
                              <span><i style={{color:"green"}} className="fa fa-check-circle me-5"></i></span>
                              <span className="fs-5" style={{color:"gray"}}>Hachney Permit</span>
                            </div>
                          </div>

                        </div>

                        <div className="col-8">
                          <div className="row">
                            <div className="col-4">
                              Rider Name:
                            </div>
                            <div className="col-8">
                              <div className="row mb-2">
                                <input type="text" value="Driver Name" disabled className="form-control"/>
                              </div>
                            </div>

                            <div className="col-4">
                              Company Name:
                            </div>
                            <div className="col-8">
                              <div className="row mb-2">
                                <input type="text" value="Company Name" disabled className="form-control"/>
                              </div>
                            </div>

                            <div className="col-4">
                              Company Address:
                            </div>
                            <div className="col-8">
                              <div className="row mb-2">
                                <input type="text" value="Company Address" disabled className="form-control"/>
                              </div>
                            </div>

                            <div className="col-4">
                              Contact Phone #:
                            </div>
                            <div className="col-8">
                              <div className="row mb-2">
                                <input type="text" value="Phone Number" disabled className="form-control"/>
                              </div>
                            </div>
                            <div className="col-4">
                              Email Address:
                            </div>
                            <div className="col-8">
                              <div className="row mb-2">
                                <input type="text" value="Email" disabled className="form-control"/>
                              </div>
                            </div>

                            <div className="col-4">

                            </div>
                            <div className="col-8">
                              <span><i style={{color:"green"}} className="fa fa-check-circle"></i></span>
                              <span className="fs-5" style={{color:"gray"}}>33 Trips</span>
                              <span><i style={{color:"green"}} className="fa fa-check-circle ms-2"></i></span>
                              <span className="fs-5" style={{color:"gray"}}>100 Items Delivered</span>
                            </div>

                            <h4 className="mt-3 ms-5">Reviews and Comments</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <DeliverySteps/>
                <BookingFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DeliveryDriverProfile;
