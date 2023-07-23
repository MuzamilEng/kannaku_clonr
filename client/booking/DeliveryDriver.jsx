import React, { useState } from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import DeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import { Form } from "react-bootstrap";
import CheckBoxForCategory from "./components/CheckBoxForCategory";
import FeatherIcon from "feather-icons-react"
import RangeSlider from 'react-bootstrap-range-slider';
import Rider from "./deliverycomponents/Rider";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DeliverySteps from "./deliverycomponents/DeliverySteps";

function DeliveryDriver() {
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

    const [value, setValue] = useState(0);
    const numberOfStops = [
        {
          label: "Non Stop",
        },
        {
          label: "1 Stop",        
        },
        {
          label: "2+ Stop",
        },
        
      ]
    const airlines = [
        {
          label: "Asiana Airlines",
        },
        {
          label: "Air Canada",        
        },
        {
          label: "IndiGo",
        },
        
      ]
    const departureTime = [
        {
          label: "Early Morning",
          time: "12-8am"
        },
        {
          label: "Morning",
            time: "12-8am"       
        },
        {
          label: "Mid-day",
            time: "12-8am"
        },
        {
          label: "Mid-size",
            time: "12-8am"
        },
        {
          label: "Mid-size",
            time: "12-8am"
        },
      ]
      
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
                  <div className="col-8">
                    <h1>Delivery Rider Finder</h1>

                    <div className="row me-2">
                      <div className="col-md-11 col-sm-12">
                        <div className="row">
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              style={{
                                borderRadius: "10px"
                              }}
                              id="basic-addon1"
                            >
                              <i
                                className="fa fa-search"
                                style={{ color: "gray" }}
                                aria-hidden="true"
                              ></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              style={{ padding: "30px" }}
                              placeholder=""
                              aria-label=""
                              value="ABC Del"
                              aria-describedby="basic-addon1"
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-sm-12">
                        <div className="row">
                          <button
                            className="btn"
                            style={{
                              padding: "17px",
                              borderRadius: "10px",
                              backgroundColor: "blue"
                            }}
                          >
                            <i
                              className="fa fa-filter"
                              style={{ color: "white" }}
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row m-1">
                      <Rider/>
                      <Rider/>
                      <Rider/>
                    </div>

                  </div>

                  <div
                    className="col-md-4 col-sm-12 p-2 rounded"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="card">
                      <div className="card-header">
                        <h5>Filter</h5>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-8">
                            <h6 style={{ color: "blue" }}>Number of Stops</h6>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <p className="text-end">
                                <FeatherIcon
                                  style={{ color: "blue" }}
                                  icon="chevron-down"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <Form.Group>
                            <div className="row">
                              {numberOfStops.map((nofs, i) => {
                                return (
                                  <CheckBoxForCategory key={i} label={nofs.label} />
                                );
                              })}
                            </div>
                          </Form.Group>
                        </fieldset>

                        <hr />

                        <div className="row">
                          <div className="col-8">
                            <h6 style={{ color: "blue" }}>Departure Time</h6>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <p className="text-end">
                                <FeatherIcon
                                  style={{ color: "blue" }}
                                  icon="chevron-down"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <Form.Group>
                            <div className="row">
                              {departureTime.map((time, i) => {
                                return (
                                  <CheckBoxForCategory
                                  key={i}
                                    label={time.label}
                                    count={time.time}
                                  />
                                );
                              })}
                            </div>
                          </Form.Group>
                        </fieldset>

                        <hr />
                        <div className="row">
                          <div className="col-8">
                            <h6 style={{ color: "blue" }}>Price</h6>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <p className="text-end">
                                <FeatherIcon
                                  style={{ color: "blue" }}
                                  icon="chevron-down"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                        <p>$125 - $920</p>
                        <RangeSlider
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          variant="primary"
                          tooltipPlacement="top"
                          tooltip="on"
                          size="lg"
                        />
                        <hr />

                        <div className="row">
                          <div className="col-8">
                            <h6 style={{ color: "blue" }}>Airlines</h6>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <p className="text-end">
                                <FeatherIcon
                                  style={{ color: "blue" }}
                                  icon="chevron-down"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                        <fieldset>
                          <Form.Group>
                            <div className="row">
                              {airlines.map((airline, i) => {
                                return (
                                  <CheckBoxForCategory key={i} label={airline.label} />
                                );
                              })}
                            </div>
                          </Form.Group>
                        </fieldset>
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

export default DeliveryDriver;
