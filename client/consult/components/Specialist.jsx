import React from 'react'
import Image from 'next/image'

function Specialist({img, title, action}) {
  return (
    <div>
        <Image src={img} alt="" />

        <h4 className='fw-bold text-black' style={{height:"50px"}}>{title}</h4>

        <button className='btn bg-dark text-white' onClick={action}>Consult Now</button>
    </div>
  )
}

export default Specialist