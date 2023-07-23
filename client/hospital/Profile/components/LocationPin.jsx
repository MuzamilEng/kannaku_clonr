import React from 'react'

const LocationPin = ({ text }) => (
    <div className="pin">
        <i className='fa fa-geo-alt'/>
      <p className="pin-text">{text}</p>
    </div>
  )

export default LocationPin