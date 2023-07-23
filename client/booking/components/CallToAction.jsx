import React from 'react'
import Image from 'next/image'
import calltoactionimg from "../../assets/img/doctors/02-1@1x.png";

function CallToAction() {
    return (
        <div>
            <div className="row p-5 mb-3" style={{ backgroundColor: '#F8F5EC' }}>
                <div className="col-6 mt-5">
                    <div className="row ms-5">
                        <p className="fs-5" style={{ color: '#81BA41' }}>Fresh 100% organic <br /> foods</p>
                        <p className="display-3 fw-bold ms-5" style={{ color: '#072F15' }}>Fresh &#38; <br /> Healthy <br /> Organic Food</p>
                        <button className="btn pe-4 pt-3 pb-3 fs-5 text-white w-50" style={{ backgroundColor: '#81BA41' }}>Shop Now</button>
                    </div>
                </div>
                <div className="col-5">
                    <Image layout='responsive' src={calltoactionimg} alt="" />
                </div>
            </div>

        </div>
    )
}

export default CallToAction