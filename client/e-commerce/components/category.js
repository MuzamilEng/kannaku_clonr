import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function category({image, name}) {
  return (
    <div>
        <Link href="/ecommerce/listings">
        <a>
        <div className="col me-2 p-2 product">
            
            <Image src={image} alt="" layout='responsive' style={{borderRadius:"30px"}} />
            <p className="text-center">{name}</p>
        </div>
        </a>
        </Link>
    </div>
  )
}

export default category