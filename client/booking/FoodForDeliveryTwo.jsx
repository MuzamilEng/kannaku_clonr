import React from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import FoodDeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import SortArea from "./components/FoodSortArea";
import DeliverySteps from "./deliverycomponents/DeliverySteps";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DeliveryProduct from "./deliverycomponents/DeliveryProduct";
import CallToAction from "./components/CallToAction";
import FoodCategories from "./deliverycomponents/FoodCategories";

function FoodForDeliveryTwo() {
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
                  <b>Popular Categories</b>
                </h3>

                <div className="col-12">
                <FoodCategories/>
                </div>
                <div className="row">
                </div>
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
                  <div className="col-4">
                    <DeliveryProduct />
                  </div>
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

              </div>
              <CallToAction />
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
              <DeliverySteps />
              <BookingFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodForDeliveryTwo;
