import React, { useState } from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import DeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import Link from "next/link";
import Parcel from "./deliverycomponents/Parcel";

function ParcelForDelivery() {
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
                  <div className="col-10">
                      <div className="row">
                          <h1 className="text-center">
                              Featured Delivery Service <br /> Providers by Location
                          </h1>
                      </div>
                  </div>
                  <div className="col-2">
                      <h5><Link href="/" style={{color:"red"}}><a>View All</a></Link></h5>
                  </div>

                  <div className="col-4">
                    <div className="input-group mb-3" >
                        <span className="input-group-text"  id="basic-addon1"><i className="fa fa-filter" style={{ color: "gray" }} aria-hidden="true"></i></span>
                        <select name="" id="" aria-describedby="basic-addon1" className="form-control">
                            <option value="">Sorted By Delivery</option>
                            <option value="">My City</option>
                            <option value="">Worldwide</option>
                        </select>
                    </div>
                  </div>

                  <div className="row">
                    <Parcel/>
                    <Parcel/>
                    <Parcel/>
                  </div>
                </div>

                <BookingFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ParcelForDelivery;
