import React from 'react'
import Image from 'next/image'
import topStrip_free_delivery from "../../assets/img/ecommerce/topStrip_free_delivery.gif"
function topHeader() {
  return (
    <>
    <div className="row" style={{marginLeft:"80px", marginRight:"80px"}}>
        
        <div className="col">
        <Image src={topStrip_free_delivery} alt="gif" layout='responsive' />
    </div>
    <div className="col-12">
        <div className="row mt-1">
            <div className="col-3"><a href="#" className="text-yellow">Sell on Jumia</a></div>
            <div className="col">
                <a href="#" className="text-dark">JUMIA</a>
            </div>
            <div className="col">
                <a href="#" className="text-gray">PAY</a>
            </div>
            <div className="col">
                <a href="#" className="text-gray">PARTY</a>
            </div>
            <div className="col">
                <a href="#" className="text-gray">FOOD</a>
            </div>
            <div className="col">
                <a href="#" className="text-gray">PRIME</a>
            </div>
            <div className="col">
                <a href="#" className="text-gray">LOGISTICS</a>
            </div>
            <div className="col-3"></div>
        </div>
        
    </div>
        </div>
    </>
  )
}

export default topHeader