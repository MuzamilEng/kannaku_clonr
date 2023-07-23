import React from 'react'
import FeatherIcon from 'feather-icons-react'
import Link from 'next/link';

function Card({title, icon, bgcolor, link, pad}) {
  return (
    <Link href={link}>
      <a><div style={{ color:"black",  backgroundColor: bgcolor }} className="p-3">
          <FeatherIcon icon={icon}/>
          <span style={{marginLeft:"5px"}}>{title}</span>
      </div></a>
    </Link>
  )
}

export default Card