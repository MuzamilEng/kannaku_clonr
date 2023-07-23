import React, { useState } from "react";
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
import Restaurant from "./deliverycomponents/Restaurant";
import stockhoney from "../assets/img/stockhoney.png";
import Image from 'next/image'

function FoodForDelivery() {
  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
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
              

              <div className="row ms-4 pt-2 mt-5">
                  <h3 style={{ color: "#072F15" }}>
                    <b>Featured Restaurants</b>
                  </h3>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                    <Restaurant/>
                 
                <h3 style={{ color: "#072F15" }} className="ms-1 mt-4"> 
                  <b>Popular Foods</b>
                </h3>
                <div className="row mb-2">
                  <div className="col-4">
                    <DeliveryProduct />
                  </div>
                  <div className="col-4">
                    <DeliveryProduct />
                  </div>
                  <div className="col-4">
                    <DeliveryProduct />
                  </div>
                </div>

                <h3 style={{ color: "#072F15" }} className="ms-1 mt-4">
                  <b>Popular Products</b>
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
              <div className="row p-4 mt-2" style={{backgroundColor:"#F8F5EC"}}>
                <div className="col-6">
                  <Image layout='responsive' src={stockhoney} className="img-fluid p-2" alt="" />
                </div>
                <div className="col-6">
                  <p style={{color:"#81BA41"}}>Today Hot Deals</p>
                  <h1 style={{color:"#072F15"}}> <b>Original Stock Honey <br /> Combo Package</b> </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit. Ipsam ex explicabo, veritatis pariatur amet accusantium inventore sunt quo nisi doloremque tenetur animi quidem provident est dolores id numquam eligendi. Explicabo?</p>
                  <div className="row ms-1">
                    <div className="col-2">
                      <div className="row rounded p-2 me-3" style={{backgroundColor:"#FF8A00", color:"white"}}>
                        <span className="text-center">02</span>
                      </div>
                      <div className="row"><span>Days</span></div>
                    </div>
                    <div className="col-2">
                      <div className="row rounded p-2 me-3" style={{backgroundColor:"#FF8A00", color:"white"}}>
                        <span className="text-center">12</span>
                      </div>
                      <div className="row"><span>Hours</span></div>
                    </div>
                    <div className="col-2">
                      <div className="row rounded p-2 me-3" style={{backgroundColor:"#FF8A00", color:"white"}}>
                        <span className="text-center">42</span>
                      </div>
                      <div className="row"><span>Minutes</span></div>
                    </div>
                    <div className="col-2">
                      <div className="row rounded p-2 me-3" style={{backgroundColor:"#FF8A00", color:"white"}}>
                        <span className="text-center">54</span>
                      </div>
                      <div className="row"><span>Seconds</span></div>
                    </div>
                  </div>
                  
                  <div className="row mt-4">
                    <div className="col-3">
                      <button className="btn text-white" style={{backgroundColor:"#81BA41"}}>Shop Now</button>
                    </div>
                    <div className="col-6">
                      <a href="" className="text-dark"><u>Deal of the Day.</u></a>
                    </div>
                  </div>
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

export default FoodForDelivery;
