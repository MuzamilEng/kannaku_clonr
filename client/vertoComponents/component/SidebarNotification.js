import React from 'react'
import { Icon } from '@iconify/react';
import { notificationSidebar } from '../Data';
import { useGlobalContext } from '../../store/authStore';
import Link from 'next/link';
const SidebarNotification = () => {
  const {closeSidebar} = useGlobalContext();
  return (
    <div className='sideBar_notification z-40 grid grid-cols-1 items-center border-2 border-gray-100'>
      <div className="container side_notify border-b-2 border-gray-400 flex items-center">
        <h1 className="font-bold">Notification</h1>
        <Icon icon="material-symbols:cancel-outline" className='text-gray-500 text-2xl' onClick={closeSidebar}/>
      </div>
      <div className="pt-5">
        {notificationSidebar?.map((list)=> {
            const {id, title, time, icon} = list;
            return <main className="bell_align" key={id}>
                <span className=''>{icon}</span>
                <p className='text-gray-500'>{title}</p>
                <p className='text-gray-500'>{time}</p>
            </main>
        })}
      </div>
      <Link href="/CurrencyExchange/MailNotification">
      <button type="button" className='bg-teal-700 text-white border-2 flex justify-center border-teal-700 rounded-md items-center p-2 m-2'>View All</button>
      </Link>
    </div>
  )
}

export default SidebarNotification
