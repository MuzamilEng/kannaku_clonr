import React, { useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import { Apple } from '@material-ui/icons';
import apple from "../../assets/img/insurance/8-450x420.png"
import Image from 'next/image'

function DeliveryProduct() {

    const [ratingValue, setRatingValue] = useState(4);
  return (
    <div className='bg-white p-4 ms-2 me-2 mb-2 rounded'>
        <div className="row">
            <div className="col-3">
                <p className='rounded text-center' style={{backgroundColor:"#EA625F", color:"white"}}>25% off</p>
            </div>
            <div className="col-7"></div>
            <div className="col-2">
            <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
        </div>

        <div className="row">
            <Image layout='responsive' style={{height:"243px", width:"282px"}} src={apple} alt="" />
        </div>
        
        <div className="row">
            <div className="col-8">
                <h4>Reliance HMO</h4>
                <h5>$240 - 1200</h5>

                <Rating
                    name="Rating Label"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                }}
                />
            </div>
            <div className="col-4 pt-5">
                <button className='btn btn-danger ps-2 pe-2 pt-1 pb-1'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default DeliveryProduct