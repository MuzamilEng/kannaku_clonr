import React from 'react'
import FeatherIcon from 'feather-icons-react'

function WhyUs() {
  return (
      <div className="">
          <div className='row rounded border shadow-sm border ms-2 p-2'>
              <div className="col-2 p-2">
                  <FeatherIcon icon="user"/>
              </div>
              <div className="col-10 p-2">
                <h6 style={{ color: "blue" }} className="fw-bold">
                    10M+ Happy Customers
                </h6>
                <p>Lorem ipsum dolor sit dolor, beatae nemo saepe.</p>
              </div>
          </div>
      </div>
  )
}

export default WhyUs