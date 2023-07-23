import React from "react";
import BannerOne from "./components/BannerOne";
import CarSearchArea from "./components/CarSearchArea";
import BookingFooter from "./components/BookingFooter";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Link from "next/link";

function CarInvoice() {
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  return (
    <div className="main-wrapper">
      <Header />
      

      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
        <BannerOne bookingtype="Parcel" />
      <CarSearchArea productType="car" />
          <div className="row">
            <div className="col-12 booking-body">
              

              <div className="row ms-4 m-2 p-2" style={{ backgroundColor: "white" }}>
                <div className="col-6">
                  <p className="fs-2">Quickai</p>
                </div>
                <div className="col-6">
                  <h1 className="text-end">Invoice</h1>
                  <h6 className="text-end">Invoice Number - 23123</h6>
                </div>
                <hr />

                <div className="col-4">
                  <h6>MAKE AND MODEL:</h6>
                  <h6>
                    <b>Creta - Hyundai</b>
                  </h6>
                </div>
                <div className="col-4">
                  <h6>CAR CATEGORY:</h6>
                  <h6>
                    <b>Economy</b>
                  </h6>
                </div>
                <div className="col-4">
                  <h6>PARTICULAR:</h6>
                  <h6>
                    <b>Car on self drive</b>
                  </h6>
                </div>
                <hr />

                <div className="col-3">
                  <h6>RENTAL START DATE:</h6>
                  <h6>
                    <b>7/12/19</b>
                  </h6>
                </div>
                <div className="col-3">
                  <h6>RENTAL END DATE:</h6>
                  <h6>
                    <b>7/12/19</b>
                  </h6>
                </div>
                <div className="col-3">
                  <h6>TOTAL DAY(S):</h6>
                  <h6>
                    <b>0</b>
                  </h6>
                </div>
                <div className="col-3">
                  <h6>CAR REGN NO:</h6>
                  <h6>
                    <b>1323 DSR3</b>
                  </h6>
                </div>
                <hr />

                <div className="col-3">
                  <h6>OUT KM(S):</h6>
                  <h6>
                    <b>3123</b>
                  </h6>
                </div>
                <div className="col-3">
                  <h6>IN KM(S):</h6>
                  <h6>
                    <b>2123</b>
                  </h6>
                </div>
                <div className="col-3">
                  <h6>TOTAL KM(S):</h6>
                  <h6>
                    <b>323</b>
                  </h6>
                </div>
                <div className="col-3">
                  <h6>SECURITY DEPOSIT:</h6>
                  <h6>
                    <b>$5000</b>
                  </h6>
                </div>
                <hr />

                {/* HERE GOES THE TABLE  */}
                <table className="table table-bordered mt-4 mb-4">
                <tbody>
                    <tr>
                        <td><p className="text-end"><b>{"Hirer's Name"}</b></p></td>
                        <td>Neil Patel</td>
                    </tr>
                    <tr>
                        <td><p className="text-end"><b>Permanent Address</b></p></td>
                        <td>5 Hodges aslkdjaskd</td>
                    </tr>
                    <tr>
                        <td><p className="text-end"><b>Local Address</b></p></td>
                        <td>asdkjas dakdjasdhas dakd</td>
                    </tr>
                    <tr>
                        <td><p className="text-end"><b>Driving Licence Number</b></p></td>
                        <td>5 Hodges aslkdjaskd</td>
                    </tr>
                    
                </tbody>
                </table>

                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-4">
                        <b>Rate Sheet</b>
                      </div>
                      <div className="col-4">
                        <b>Rate</b>
                      </div>
                      <div className="col-4">
                        <b>Amount</b>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-4">
                        <p>Rate / day (Inclusive of theft protection and collision damage waiver)</p>
                      </div>
                      <div className="col-4">
                        <p className="text end">$1500.00</p>
                      </div>
                      <div className="col-4">
                        <p className="text-end">$1500</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-4">
                        <p>Other Charges</p>
                      </div>
                      <div className="col-4">
                        <p className="text end">0</p>
                      </div>
                      <div className="col-4">
                        <p className="text-end">0</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-4">
                        <p>Promotional Code</p>
                        <span>SUMMARIAN- One time discount</span>
                      </div>
                      <div className="col-4">
                        <p className="text end">10%</p>
                      </div>
                      <div className="col-4">
                        <p className="text-end">-$150</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-4">
                        <p className="text-end">
                          <b>Sub Total:</b>
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="text-end">$1350.00</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-4">
                          <p className="text-end">
                            <b >Tax @18%:</b>
                          </p>
                      </div>
                      <div className="col-4">
                        <p className="text-end">$245</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-4">
                        <p className="text-end">
                          <b >Total:</b>
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="text-end">$1590.00</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              

                <div className="row mt-3 mb-3">
                  <h5 className="text-center">
                    <b>Quickai inc.</b>
                  </h5>
                  <p className="text-center">address of hotel, slkdjasd asd,jadaslkd asdasddsdasdas</p>
                </div>
                <hr />
                
                <div className="row mt-2 mb-3">
                  <p className="text-center"><b className="fs-5">Note</b>: This is computer generated recienpt and does not require physical signiture </p>
                </div>

                <div className="row mb-5">
                  <div className="col-4"></div>
                  <div className="col-2">
                    <div className="row">
                      <button className="btn border">Print</button>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="row">
                      <button className="btn border">Download</button>
                    </div>
                  </div>
                </div>

                <div className="row p-3 ms-3 text-center" style={{backgroundColor:"lightgray"}}>
                    <Link href="/booking/cars">Back to My Account</Link>
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

export default CarInvoice;
