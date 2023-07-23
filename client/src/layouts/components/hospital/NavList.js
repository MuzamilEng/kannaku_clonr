import React from 'react'
import { topNavigation } from '../../../navigation/hospital'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import style from "./navList.module.css"

const NavList = () => {
  return (
    <div>
       {topNavigation?.navList?.map((item, i) => {
      return <>
      <ul key={i} className='flex_ul'>
         <li className={style.list}>
         <Icon icon={item?.icon} className='text-white mr-3'/>
            <a href={item?.title === 'Profile' ? '/Health/doctors/profiles' : '#'} className={style.link_style}>{item?.title}</a>
         </li>
        </ul>
      </>
       
})}
    </div>
  )
}

export default NavList
