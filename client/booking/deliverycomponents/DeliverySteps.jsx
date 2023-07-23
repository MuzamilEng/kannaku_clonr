import React from 'react'
import deliverysteps from "../../assets/img/deliverysteps.png"
import Image from 'next/image'

function DeliverySteps() {
  return (
    <div className="row">
        <Image layout='responsive' src={deliverysteps} className="img-fluid" alt="" />
    </div>
  )
}

export default DeliverySteps