import React, { useState } from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import DeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import { Form } from "react-bootstrap";
import Image from 'next/image';
import img01 from "../assets/img/img-01.jpg";
import GoogleMapReact from "google-map-react";
import LocationPin from "./components/LocationPin";

function DeliveryRiderTracker() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

    const location = {
      address:
        "New Road, Ester Close, Badore road, Ajah Lagos State, Nigeria LandMark: Pearl Prestige, Bus stop",
      lat: 37.42216,
      lng: -122.08427,
    };

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
              

                <div className="row ms-4 pt-2 mt-5" style={{backgroundColor:"lightgray"}}>
                <div className="map mt-3 rounded">
                    <div className="google-map">
                        <GoogleMapReact
                        bootstrapURLKeys={{
                            //   your Api key here
                            key: "AIzaSyBt624gLn64GjAfNwU4cSsV7KhuNucNGDw",
                        }}
                        defaultCenter={location}
                        defaultZoom={17}
                        >
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                        />
                        </GoogleMapReact>
                    </div>
                </div>

                  <div className="col-12">
                      <div className="row p-2">
                          <div className="col-2">
                              <b>Driver Name</b>

                              <span className="user-img">
                                  <Image layout='responsive' src={img01} alt="" />
                              </span>
                          </div>
                          <div className="col-4">
                              <b>Total package/item: 12</b>
                              <p>Standard package for pickup - 2</p>
                              <p>Standard package to pickup - 10</p>
                          </div>
                          <div className="col-4">
                              priority package - 0
                          </div>
                          <div className="col-2">
                              <button className="text-white bg-dark btn">Call Rider</button>
                          </div>
                      </div>
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

export default DeliveryRiderTracker;
