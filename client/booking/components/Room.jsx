import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Room({ img, roomtype, price }) {
    return (
        <div className='row p-2 m-2' style={{ backgroundColor: "white" }}>
            <div className="col-4">
                <Link href="/booking/hoteldetails">
                    <a>

                    <Image layout='responsive' height="400px" width="400px" className='img-fluid' src={img} alt="" />
                    </a>
                </Link>
            </div>
            <div className="col-8">
                <h5><b className='text-blue'>{roomtype}</b></h5>
                <div className="row">
                    <div className="col"><i className="fa fa-map-marker" style={{ color: "gray" }} aria-hidden="true"></i></div>
                    <div className="col-4"><span>Jing Sized Bed</span></div>
                    <div className="col"><i className="fa fa-plus" style={{ color: "gray" }} aria-hidden="true"></i></div>
                    <div className="col-4"><span>3.423x3.21sq.mtr</span></div>
                    
                </div>

                <div className="row mt-3 mb-3">
                    <div className="col-4">
                        <i className="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>
                        <span>Free Wifi</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>
                        <span>Television</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>
                        <span>Hair Dryer</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>
                        <span>Shower</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-check" style={{ color: "green" }} aria-hidden="true"></i>
                        <span>Tea Maker</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col"><b>$ <span>{price}</span></b></div>
                    <div className="col"><del>$250</del></div>
                    <div className="col"><span style={{ color: "green" }}>16% off!</span></div>
                    <div className="col-4"><span>1 Room/Night</span></div>
                
                </div>
               
               <div className="row mt-2">
                   <div className="col-7">
                       <p className="text-blue pt-2">Cancelation Policy</p>
                   </div>
                   <div className="col-5">
                        <button className="btn text-blue border-blue" style={{ backgroundColor: "white" }}>
                            Select Room
                        </button>
                   </div>
               </div>
            </div>
            <br />
            <hr />
        </div>
    )
}

export default Room