import React from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import FoodDeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import Link from "next/link";
import SortArea from "./components/FoodSortArea";
import DeliverySteps from "./deliverycomponents/DeliverySteps";
import RatingComponent from "./components/RatingComponent";

import GoogleMapReact from "google-map-react";
import LocationPin from "./components/LocationPin";

import Image from 'next/image';
import apple from "../assets/img/delivery/apple.png";

function DeliveryRestaurantDetail() {
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
      

      <FoodDeliverySidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
        <BannerTwo />
      <div className="row ps-5 pe-4 mt-1 foodCategoryArea" style={{ width: "100%" }}>
        <Category categoryType="food" />
        <SortArea />
      </div>
          <div className="row">
            <div className="col-12 fooddelivery-body">
              <button
                className="btn border"
                id="toggle_btn"
                style={{ marginLeft: "-18px" }}
                onClick={handlesidebar}
              >
                <i className="fas fa-bars"></i>
              </button>

              <div className="row pt-2 mt-5">
                <div className="col-3"></div>
                 <div className="col-2">
                   <Image layout='responsive' src={apple} alt="" className="rounded-circle img-fluid" />
                 </div>
                 <div className="col-6">
                    <h2 style={{ color: "#072F15" }} className="ms-1 mt-4"> 
                      <b>KTM Restaurants</b>
                    </h2>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span> 
                    <p className="fs-5">KM 14, Ajao, Estate Road, Magodo, Lagos</p>
                    <RatingComponent rating={4.6}/>
                 </div>
                 
                 <div className="col-3"></div>
                 <div className="col-4"><p className="fs-5">Tel: 080867875576</p></div>
                 <div className="col-3"><p className="fs-5">Email: teasld@jakd.cos</p></div>


                 {/* map goes here */}
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

                 <h2 style={{ color: "#072F15" }} className="ms-1 mt-4"> 
                    <b>Our Dishes</b>
                </h2>
                 {/* buttons */}
                 <div className="col-2 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/foodfordeliveryorder">
                        <button className="p-4 btn bg-dark">
                          <h5 className="text-white">Soup</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 <div className="col-2 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/deliveryrestaurantreviews">
                        <button className="p-4 btn text-white" style={{ backgroundColor: "#838AAC" }}>
                          <h5 className="text-white">Swallow</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 <div className="col-2 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/deliveryrestaurantdetail">
                        <button className="p-4 btn text-white" style={{ backgroundColor: "#838AAC" }}>
                          <h5 className="text-white">Drinks</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 <div className="col-2 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/deliveryrestaurantdetail">
                        <button className="p-4 btn text-white" style={{ backgroundColor: "#838AAC" }}>
                          <h5 className="text-white">Rice</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 {/* buttons */}
                

              </div>
            
              <DeliverySteps />
              <BookingFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryRestaurantDetail;
