import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import BannerOne from "./components/BannerOne";
import SearchArea from "./components/SearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import SearchForm from "./components/SearchForm";
import FeatherIcon from 'feather-icons-react'
import { Form } from 'react-bootstrap';
import CheckBoxForCategory from './components/CheckBoxForCategory';
import Hotel from './components/Product';
import Image from 'next/image'
import hotelImage from "../assets/img/hotel.jpg";


function Hotels() {
  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
  }

  const [value, setValue] = useState(0);

  const propertyTypes = [
    {
      label: "Hotel",
      count: 250
    },
    {
      label: "Resort",
      count: 75
    },
    {
      label: "Villa",
      count: 25
    },
    {
      label: "Heritage",
      count: 54
    },
    {
      label: "Mottel",
      count: 23
    },
    {
      label: "Guest House",
      count: 97
    },
    {
      label: "Farm House",
      count: 32
    },
    {
      label: "Palace",
      count: 32
    },
    {
      label: "Serviced Apartments",
      count: 45
    },
  ]
  const starCategory = [
    {
      label: "5 Star",
      count: 323
    },
    {
      label: "4 Star",
      count: 425
    },
    {
      label: "3 Star",
      count: 54
    },
    {
      label: "2 Star",
      count: 20
    },
    {
      label: "1 Star",
      count: 45
    }
  ]
  const userReviews = [
    {
      label: "Excellent",
      count: 432
    },
    {
      label: "Good",
      count: 12
    },
    {
      label: "Fair",
      count: 250
    },
    {
      label: "Poor",
      count: 23
    },
    {
      label: "Bad",
      count: 250
    }
  ]
  const amenities = [
    {
      label: "Internet/wifi",
      count: 250
    },
    {
      label: "Restaurant",
      count: 63
    },
    {
      label: "Bar",
      count: 250
    },
    {
      label: "Swimming pool",
      count: 68
    },
    {
      label: "Business Facilities",
      count: 250
    },
    {
      label: "Spa/Wellness",
      count: 250
    },
    {
      label: "Gym",
      count: 67
    },
  ]

  const hotelsList = [
    {
      img:hotelImage,
      name:"The Orchid Hotel",
      location:"Ashram road, Ahmedabad",
      rating:5,
      price:210,
      link:"/booking/hoteldetails"
    },
    {
      img:hotelImage,
      name:"The Orchid Hotel",
      location:"Ashram road, Ahmedabad",
      rating:5,
      price:210,
      link:"/booking/hoteldetails"
    },
    {
      img:hotelImage,
      name:"The Orchid Hotel",
      location:"Ashram road, Ahmedabad",
      rating:5,
      price:210,
      link:"/booking/hoteldetails"
    },
    {
      img:hotelImage,
      name:"The Orchid Hotel",
      location:"Ashram road, Ahmedabad",
      rating:5,
      price:210,
      link:"/booking/hoteldetails"
    },
  ]
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <BannerOne bookingtype="Hotel" />
          <SearchArea productType="hotel"/>
          <div className="row">
            <div className="col-12 booking-body">
              

              <div className="row ms-1 mt-4">
                <div className="col-md-3 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Filter</h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-8" >
                          <h6 style={{ color: "blue" }}>Hotel Name</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                          </div>
                        </div>
                      </div>
                      <form action="">
                        <input type="text" className="form-control" placeholder="Search by hotel name" />
                      </form>
                      <hr />

                      <div className="row">
                        <div className="col-8" >
                          <h6 style={{ color: "blue" }}>Price</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                          </div>
                        </div>
                      </div>
                      <p>$125 - $920</p>
                      <RangeSlider
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        variant='primary'
                        tooltipPlacement='top'
                        tooltip='on'
                        size="lg"
                      />
                      <hr />

                      <div className="row">
                        <div className="col-8" >
                          <h6 style={{ color: "blue" }}>Property Types</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {propertyTypes.map((pt, i) => {
                              return (
                                <CheckBoxForCategory key={i} label={pt.label} count={pt.count}/>
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>

                      <hr />

                      <div className="row">
                        <div className="col-8" >
                          <h6 style={{ color: "blue" }}>Star Category</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {starCategory.map((pt,i) => {
                              return (
                                <CheckBoxForCategory key={i} label={pt.label} count={pt.count}/>
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>
                      <hr />

                      <div className="row">
                        <div className="col-8" >
                          <h6 style={{ color: "blue" }}>User Review</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {userReviews.map((pt,i) => {
                              return (
                                <CheckBoxForCategory key={i} label={pt.label} count={pt.count}/>
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>
                      <hr />

                      <div className="row">
                        <div className="col-8" >
                          <h6 style={{ color: "blue" }}>Amenities</h6>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <p className="text-end"><FeatherIcon style={{ color: "blue" }} icon="chevron-down" /></p>
                          </div>
                        </div>
                      </div>
                      <fieldset>
                        <Form.Group>
                          <div className="row">
                            {amenities.map((pt,i) => {
                              return (
                                <CheckBoxForCategory key={i} label={pt.label} count={pt.count}/>
                              );
                            })}
                          </div>
                        </Form.Group>
                      </fieldset>

                    </div>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  {hotelsList.map((hotel,i) =>{
                    return (
                      <Hotel key={i} img={hotel.img} name={hotel.name} location={hotel.location} rating={hotel.rating} price={hotel.price} link={hotel.link}/>
                    )
                  })}
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

export default Hotels;
