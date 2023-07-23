import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'

function DeliveryCard({title, icon, bgcolor, link}) {
  return (
    <Link href={link}>
     <a>
     <div style={{ color:"black",  backgroundColor: bgcolor }} className="p-4 me-2">
          <div className="row mb-1">
              <p className="text-center">
                <FeatherIcon icon={icon}/>
              </p>
          </div>
          <h5 className='text-center'>{title}</h5>
      </div>
     </a>
    </Link>
  )
}

export default DeliveryCard