import React from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import FoodDeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import Link from "next/link";
import SortArea from "./components/FoodSortArea";
import DeliverySteps from "./deliverycomponents/DeliverySteps";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DeliveryProduct from "./deliverycomponents/DeliveryProduct";
import RatingComponent from "./components/RatingComponent";
import Image from 'next/image';
import apple from "../assets/img/delivery/apple.png";

function FoodForDeliveryOrder() {
  const handlesidebar = () => {
    document.body.classNameList.toggle('mini-sidebar');
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
             
              <div className="row pt-2 mt-5">
                  
                 <div className="col-2">
                   <Image layout='responsive' src={apple} alt="" className="rounded-circle img-fluid" />
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
                  <b>Categories</b>
                </h3>
                <div className="col-8">
                  <div className="row">
                    <div className="col-6">
                      <DeliveryProduct />
                    </div>
                    <div className="col-6">
                      <DeliveryProduct />
                    </div>
                    <div className="col-6">
                      <DeliveryProduct />
                    </div>
                    <div className="col-6">
                      <DeliveryProduct />
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="row p-2 ms-1" style={{border:"2px solid red"}}>
                    <div className="col-9 mt-1 mb-2">
                      <h5>My Orders</h5>
                    </div>
                    <div className="col-3 mt-1 mb-2">
                      <button type="button" className="btn btn-warning position-relative">
                          <i className="fa fa-lock"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                          6
                          <span className="visually-hidden">orders</span>
                        </span>
                      </button>
                    </div>

                    <div className="col-12">
                      <div className="row p-1 bg-white text-dark">
                        <div className="col-10">
                          <h6>Rider</h6>
                          <h6>Self Pickup</h6>
                        </div>
                        <div className="col-2">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="col-10 mb-2 mt-2">
                      <div className="row bg-white p-2">
                        <div className="col-4">
                          <Image layout='responsive' src={apple} alt="" className="img-fluid" />
                        </div>
                        <div className="col-8">
                          <div className="row">
                            <b>Extra Cheese Pasta</b>
                            <p>Tabaq Restaurant, Sylhet</p>
                            <b>$16.00</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 mb-2 mt-2">
                      <button className="btn bg-dark text-white"><b>+</b></button>
                      <h6 className="text-center pt-1">2</h6>
                      <button className="btn bg-dark text-white"><b>-</b></button>
                    </div>

                    <div className="col-10 mb-2 mt-2">
                      <div className="row bg-white p-2">
                        <div className="col-4">
                          <Image layout='responsive' src={apple} alt="" className="img-fluid" />
                        </div>
                        <div className="col-8">
                          <div className="row">
                            <b>Extra Cheese Pasta</b>
                            <p>Tabaq Restaurant, Sylhet</p>
                            <b>$16.00</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 mb-2 mt-2">
                      <button className="btn bg-dark text-white"><b>+</b></button>
                      <h6 className="text-center pt-1">2</h6>
                      <button className="btn bg-dark text-white"><b>-</b></button>
                    </div>


                  </div>

                </div>

                <h3 style={{ color: "#072F15" }} className="ms-1 mt-4">
                  <b>Popular Categories</b>
                </h3>
                <div className="row">
                  <Carousel responsive={responsive}>
                    <div>
                      <DeliveryProduct />
                    </div>
                    <div>
                      <DeliveryProduct />
                    </div>
                    <div>
                      <DeliveryProduct />
                    </div>
                    <div>
                      <DeliveryProduct />
                    </div>
                    <div>
                      <DeliveryProduct />
                    </div>
                  </Carousel>
                </div>

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

export default FoodForDeliveryOrder;
