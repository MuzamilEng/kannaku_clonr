import React from 'react'
import RatingComponent from '../components/RatingComponent'
import restaurant from "../../assets/img/delivery/restaurant.png";
import Image from 'next/image';

function Restaurant() {
  return (
    <div className="col-4">
        <div className="row me-2 mb-2 p-2" style={{backgroundColor:"#FFFFFF"}}>
            <div className="col-4">
                <Image layout='responsive' src={restaurant} className='img-fluid' alt="" />
            </div>
            <div className="col-8">
                <h5><b>Adora Kitchen</b></h5>
                <p>KM 14, Ajao, Estate Road, Magodo, Lagos</p>
            </div>
            
            <div className="col-5">
                <RatingComponent rating={4.4}/>
            </div>
            <div className="col-3">
                <span><b><small>25Dishes</small></b></span>
            </div>
            <div className="col-4">
                <i className='fa fa-map-marker' style={{color:"red"}}></i><b>30Min</b>
            </div>
        </div>
    </div>
  )
}

export default Restaurant