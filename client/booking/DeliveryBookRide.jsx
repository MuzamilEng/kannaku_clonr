import React, { useState } from "react";
import BannerTwo from "./components/BannerTwo";
import BookingFooter from "./components/BookingFooter";
import Header from "../layouts/Header";
import DeliverySidebar from "../layouts/Sidebar";
import Category from "./deliverycomponents/Category";
import { Form } from "react-bootstrap";

function DeliveryBookRide() {
    const handlesidebar = () => {
        document.body.classNameList.toggle('mini-sidebar');
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
                    <h1 className="text-center">Rider Profile</h1>
                    </div>
                    <div className="card-body">
                      <div className="row m-1">
                        <div className="col-6">
                          <div className="row me-1">
                            <h5 style={{color:"red"}} className="text-center">Pick Up Detail</h5>
                            <input type="text" placeholder="Full Name" className="form-control mb-3 mt-2"/>
                            <input type="text" placeholder="Address" className="form-control mb-3"/>
                            <input type="text" placeholder="Landmark" className="form-control mb-3"/>
                            <input type="text" placeholder="Phone Number" className="form-control mb-3"/>
                            <input type="text" placeholder="Email Address" className="form-control mb-3"/>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="row ms-1">

                            <h5 style={{color:"red"}} className="text-center">Delivery Point</h5>
                            <input type="text" placeholder="Full Name" className="form-control mb-3 mt-2"/>
                            <input type="text" placeholder="Address" className="form-control mb-3"/>
                            <input type="text" placeholder="Landmark" className="form-control mb-3"/>
                            <input type="text" placeholder="Phone Number" className="form-control mb-3"/>
                            <input type="text" placeholder="Email Address" className="form-control mb-3"/>
                          </div>
                        </div>


                      </div>

                      <div className="row border rounded p-1 m-1">
                        <div className="col-4">
                          <h5><b>Item Delivery Category</b></h5>
                          <div className="row">
                            <div className="col-4">
                              <span>Non Fragile</span>
                            </div>
                            <div className="col-6">
                              <div className="form-check form-switch">
                                <input className="form-check-input bg-primary" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                <label className="form-check-label" htmhtmlFor="flexSwitchCheckChecked">Fragile</label>
                              </div>
                            </div>
                          </div>
                          
                          <div className="row">
                            <select className="form-control mb-2">
                              <option value="">Item Category</option>
                              <option value="">Parcel</option>
                              <option value="">Food</option>
                            </select>
                          </div>
                          <div className="row">
                            <textarea name="" id="" cols="30" rows="3" className="form-control"></textarea>
                          </div>
                        </div>
                        <div className="col-8">
                          <h5><b>Delivery Speed and Care</b></h5>
                          <div className="row">
                            <div className="col-4">
                              <span>Standard</span>
                            </div>
                            <div className="col-6">
                              <div className="form-check form-switch">
                                <input className="form-check-input bg-primary" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Priority</label>
                              </div>
                            </div>
                          </div>
                          <h6><b><u>**Standard Delivery</u></b></h6>
                          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum molestias at temporibus dicta iure </span>
                          <h6><b><u>**Priority Delivery</u></b></h6>
                          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum molestias at temporibus dicta iure </span>
                        </div>
                      </div>

                      <div className="row border rounded p-1 m-1 mt-3 mb-3">
                        <div className="col-6">
                          <div className="row">
                            <div className="col-6">
                              <b>Schedule of Delivery</b>
                              <div className="form-check form-switch">
                                
                              <div className="row">
                                <div className="col-7">
                                  <span>Right Away!</span>
                                </div>
                                <div className="col-5">
                                  <div className="form-check form-switch">
                                    <input className="form-check-input bg-primary" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Later</label>
                                  </div>
                                </div>
                              </div>

                              </div>
                            </div>
                            <div className="col-6">
                            <b>Order Frequency</b>
                            <div className="row">
                              <div className="col-4">
                                <span>One-off</span>
                              </div>
                              <div className="col-6">
                                <div className="form-check form-switch">
                                  <input className="form-check-input bg-primary" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Recurring</label>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <b>Schedule of Delivery</b>
                          <p>{">"} <a href="#datetime">Date/Time</a></p>
                          <p><b>Delivery Order Frequency</b></p>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Mon</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Tue</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Wed</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Thu</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Fri</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Sat</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Sun</label>
                          </div>

                        </div>
                      </div>

                      <div className="row border rounded p-1 m-1">
                        <div className="col-8">
                          <div className="row m-2">
                            <textarea name="" placeholder="Delivery Note" id="" cols="6" rows="4"></textarea>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="row">
                            <button className="btn text-white bg-dark p-3 mt-4">+Book Now</button>
                          </div>
                        </div>
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

export default DeliveryBookRide;
