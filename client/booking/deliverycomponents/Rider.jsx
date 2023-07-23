import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img01 from "../../assets/img/img-01.jpg";

function Rider() {
  return (
    <div className="col-6">
        <div className="row rounded border p-1 me-1 mb-2">
            <div className="col-2">
                <span className="user-img">
                    <Image layout='responsive' src={img01} alt="" />
                </span>
            </div>
            <div className="col-10">
                <div className="row">
                    <div className="col-6">
                        <h6>Ashfake saiu</h6>
                        <span>ABC Deliveries Limited</span>
                    </div>
                    <div className="col-6">
                        <button className="btn text-white" style={{backgroundColor:"red"}}> <Link href="/booking/deliverydriverprofile" className='text-white'><small>Book Rider</small></Link> </button>
                    </div>
                    <div className="col-3">
                        <i className='fa fa-star' style={{color:"yellow"}}></i><b>5.0</b>
                    </div>
                    <div className="col-2">
                        
                        <i className='fa fa-hand-thumbs-up' style={{color:"green"}}></i><b>30</b>
                    </div>
                    <div className="col-3">
                        <i className='fa fa-hand-thumbs-down' style={{color:"red"}}></i><b>3.0</b>
                    </div>
                    <div className="col-4">
                        <b><small>33 reviews</small></b>
                    </div>
                </div>
            </div>

            <p>
            <span><i className='fa fa-check' style={{color:"green"}}></i></span>
            <span><b>33 Customer Items Delivered</b></span>
            </p>
            <div className="col-4">
                <i className='fa fa-map-marker' style={{color:"blue"}}></i><b>2.3KM</b>
            </div>
            <div className="col-4">
                <i className='fa fa-timer' style={{color:"blue"}}></i><b>2.3KM</b>
            </div>
            <div className="col-4">
                <i className='fa fa-check-circle' style={{color:"green"}}></i><span>Available</span>
            </div>
        </div>
    </div>
  )
}

export default Rider