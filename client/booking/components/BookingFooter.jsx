import React from "react";
import Image from 'next/image'
import mobile from "../../assets/img/doctors/bitmap-2@2x.png";
import appstore from "../../assets/img/doctors/bitmap@2x.png";
import playstore from "../../assets/img/doctors/bitmap-1@2x.png";

function BookingFooter() {
  return (
    <div className="row" style={{marginTop:'300px', zIndex:"10000", marginLeft:"0px"}}>
      <div className="col-12">
        
        <div className="row footer">
          <div className="col-5">
            <Image layout="responsive" height='600px'  style={{ marginTop:'-105px', marginLeft:"120px"}} src={mobile} alt="" />
          </div>
          <div className="col-7">
            <div className="row pt-5 pb-5 ">
              <h2 className="text-white">Download our app to order parcel &#38; sorts of delivery service from your favourite shops</h2>
            </div>
            <div className="row">
              <div className="col-3">
                <Image layout="responsive" width='176px' height='54.58px' src={playstore} alt="" />
              </div>
              <div className="col-3">
                <Image layout="responsive" width='176px' height='54.58px' src={appstore} alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingFooter;
