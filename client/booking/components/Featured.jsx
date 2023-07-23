import React from 'react'

import Image from 'next/image'
import hotel from "../../assets/img/doctors/images@1x.png";

function Featured() {
  return (
    <div>
        <Image layout='responsive' src= { hotel} alt="" />
    </div>
  )
}

export default Featured