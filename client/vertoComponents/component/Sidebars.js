import Link from 'next/link'
import { Sidebar } from '../Data'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { grey } from '@mui/material/colors'

const Sidebars = () => {
  const [show, setShow] = useState(false)
  const router = useRouter();
  const handleShow =()=> {
    setShow(!show)
  }
  return (
    <div className="siderbar_container">
        <div className="sidebar container">
            {Sidebar?.map((list)=>{
                const {title, url, icon, id, dropdown} = list
                const isActive = router.pathname === url;
                return <>
                <Link className="list_link" href={url}>
                <div className={`list_items flex m_2 p_2 align_items ${isActive && 'active'}`} key={id} onMouseOver={title === 'Send Money' ? handleShow : null}>
                <span className='list_icon' style={{fontSize:'2rem', paddingRight:'.3rem', color: "gray"}}>{icon}</span>
                <p style={{color: grey}}>{title}</p>
                </div>
                </Link>
                {show ? <>
                  {dropdown && dropdown.map((list)=>{
                 return <>
                 <Link className='list_link' href={list?.url}>
                  <div className="dropdown" style={{ marginLeft: '1.6rem', padding: '.5rem'}} key={list?.id}>
                  <p>{list?.title}</p>
                </div>
                  </Link>
                 </>
                })}
                </>: ""}
                </>
            })}
        </div>
        <div className="mt-4 m-3 bg-white p-4 border-2 w-[15rem] border-gray-400 rounded-md grid grid-cols-1 gap-2 items-center">
          <p>This month we gave away <span className="font-bold">$100,000</span> in reffarals. You can earn your refferals too!.</p>
          <button type="button" className='btn refer_btn text-teal-700 p-2 border-teal-700 border-2 rounded-md hover:bg-teal-600 hover:text-white'>REFER NOW</button>
        </div>
      
    </div>
  )
}

export default Sidebars
