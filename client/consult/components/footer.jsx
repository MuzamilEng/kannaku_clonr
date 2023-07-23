import React from "react";
import Image from "next/image";
import organicfood from "../../assets/img/doctors/02-1@1x.png";
import mobile from "../../assets/img/doctors/bitmap-2@2x.png";
import appstore from "../../assets/img/doctors/bitmap@2x.png";
import googleplay from "../../assets/img/doctors/bitmap-1@2x.png";

function footer() {
  return (
    <div className="row" style={{marginBottom:'-37px', marginLeft:""}}>
      <div className="col-12">
        <div className="row p-5" style={{backgroundColor:'#F8F5EC'}}>
          <div className="col-6 mt-5">
            <div className="row ms-5">
              <p className="fs-5" style={{color:'#81BA41'}}>Fresh 100% organic <br/> foods</p>
              <p className="display-3 fw-bold ms-5" style={{color:'#072F15'}}>Fresh &#38; <br/> Healthy <br/> Organic Food</p>
              <button className="btn pe-4 pt-3 pb-3 fs-5 text-white w-50" style={{backgroundColor:'#81BA41'}}>Shop Now</button>
            </div>
          </div>
          <div className="col-5">
            <Image layout="responsive" src={organicfood} alt="" />
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row footer">
          <div className="col-5">
            <Image height='443.45px' width="300px" style={{ marginTop:'-105px',zIndex:"1000", marginLeft:"10px"}}  src={mobile} alt="" />
          </div>
          <div className="col-7">
            <div className="row pt-5 pb-5 ">
              <h2 className="text-white">Download our app to order parcel &#38; sorts of delivery service from your favourite shops</h2>
            </div>
            <div className="row">
              <div className="col-3">
                <Image width='176px' height='54.58px' src={appstore} alt="" />
              </div>
              <div className="col-3">
                <Image width='176px' height='54.58px' src={googleplay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
