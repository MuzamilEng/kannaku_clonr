import React from 'react'
import Image from 'next/image'
import hotel from "../../assets/img/doctors/images@1x.png";

function CuratedHotels() {
    return (
        <div className="">
            <div className='row rounded shadow-sm border ms-2 p-1'>
                <div className="col-9 overflow-hidden">
                    <Image layout='responsive' height="1000px" className='me-1' src={hotel} alt="" />
                </div>
                <div className="col-3 overflow-hidden">
                    <Image layout='responsive' height="1800px" className='mb-1' src={hotel} alt="" />
                    <Image layout='responsive' height="1800px" className='mt-1' src={hotel} alt="" />
                </div>
                <div className="col">
                    <b>Sea View Hotels in India</b><br />
                    <small>2132 properties</small>
                </div>
            </div>
        </div>
    )
}

export default CuratedHotels