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

import Image from 'next/image';
import apple from "../assets/img/delivery/apple.png";

function DeliveryRestaurantReviews() {
  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
  }


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
             

              <div className="row ms-4 pt-2 mt-5">
                  
                 <div className="col-2">
                   <Image layout="responsive" src={apple} alt="" className="rounded-circle img-fluid" />
                 </div>
                 <div className="col-7">
                    <h2 style={{ color: "#072F15" }} className="ms-1 mt-4"> 
                      <b>KTM Restaurants</b>
                    </h2>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span> 
                    <p className="fs-5">KM 14, Ajao, Estate Road, Magodo, Lagos</p>
                    <RatingComponent rating={4.6}/>
                 </div>
                 <div className="col-3">
                    <div className="row">
                      <div className="btn text-white" style={{backgroundColor:"red"}}>Working Hours</div>
                    </div>
                 </div>

                 {/* buttons */}
                 <div className="col-3 mt-5"></div>
                 <div className="col-3 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/foodfordeliveryorder">
                        <button className="p-4 btn bg-dark">
                          <h5 className="text-white">Food Categories</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 <div className="col-3 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/deliveryrestaurantreviews">
                        <button className="p-4 btn text-white" style={{ backgroundColor: "#838AAC" }}>
                          <h5 className="text-white">Reviews</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 <div className="col-3 mt-5">
                   <div className="row me-3">
                     <Link href="/booking/deliveryrestaurantdetail">
                        <button className="p-4 btn text-white" style={{ backgroundColor: "#838AAC" }}>
                          <h5 className="text-white">Restaurant Info</h5>
                        </button>
                     </Link>
                   </div>
                 </div>
                 {/* buttons */}
                <h3 style={{ color: "#072F15" }} className="ms-1 mt-4"> 
                  <b>Review and Comments</b>
                </h3>
                

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

export default DeliveryRestaurantReviews;
