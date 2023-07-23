import React from 'react'
import Link from 'next/link'
import img01 from "../../assets/img/img-01.jpg";
import Image from 'next/image'

function Parcel() {
  return (
    <div className="col-4">
        <Image layout='responsive' src={img01} alt="" className="img-fluid" />
        <h5 className="mt-2">ABD Logistics and Delivery Service</h5>
        <h6 className="mt-2">
            20 Delivery Riders across Lagos
        </h6>
        <p>Nearest Rider is at slkdjasld aldkasdja</p>

        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="row">
                    <button className="btn bg-dark"> <Link href="/booking/deliverydriver" className="text-white"><a>+ Book Rider</a></Link> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Parcel