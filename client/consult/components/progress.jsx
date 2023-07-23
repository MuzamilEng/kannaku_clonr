import React from "react";
import Image from 'next/image'
import checkred from "../../assets/img/icons/check-red.png";
import chevronleft from "../../assets/img/icons/chevron-left.png"
import FeatherIcon from 'feather-icons-react'

function Progress({ action, title }) {
  return (
    <div className="row bg-white mb-1" style={{ border: "1px solid #B09A9A" }}>
      <div className="col-10">
        <div
          className="row pt-3 ps-2"
          style={{ backgroundColor: "rgba(196, 196, 196, 0.27)" }}
        >
          <div className="col-2">
            <Image layout="responsive" src={checkred} alt="" />
          </div>
          <div className="col-10">
            <span className="fw-bold fs-4" style={{ color: "black" }}>
              {title}
            </span>
          </div>
        </div>
      </div>
      <div className="col-2 pt-2" style={{ border: "1px solid #B09A9A" }}>
        <button
          className="btn"
          type="button"
          onClick={action}
        >
          <FeatherIcon icon='chevron-down'/>
        </button>
      </div>
    </div>
  );
}

export default Progress;
