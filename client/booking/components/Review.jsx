import React from 'react'
import RatingComponent from './RatingComponent'
import Image from 'next/image'
import img0 from "../../assets/img/img-01.jpg";

function Review() {
  return (
    <div className="row">
        <div className="col-3">
            <div className="row align-items-center">
                <Image layout='responsive' src={img0} className='user-img' alt="" />
                <h6>Ruby Clinton</h6>
                <small>Jan 25, 2021</small>
            </div>
        </div>
        <div className="col-9">
            <RatingComponent rating={5}/>
            <p><b>Excellent Hotel with great location</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officiis sunt voluptates ea tempora blanditiis, hic, iste quod optio, soluta quibusdam veritatis? Ex necessitatibus officia nulla sapiente labore excepturi!</p>
            <hr />
        </div>

    </div>
  )
}

export default Review