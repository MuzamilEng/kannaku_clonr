import Link from 'next/link'
import { Header, Sidebar, notificationSidebar } from '../Data'
import React, { useState } from 'react'
import SidebarNotification from './SidebarNotification'
import { useGlobalContext } from '../../store/authStore'

// bg-teal-700
const Headers = () => {
    const { openSidebar,
        closeSidebar,
        isSidebarOpen, 
        setIsSidebarOpen} = useGlobalContext()
    return (
        <>
            <div className="header">
                <header className='flex container justify-between'>
                    <div className=" ">
                        <Link href='/currencyExchange'><h1 className='color_white font-bold' style={{fontSize: "2.7rem"}}>Verto</h1></Link>
                    </div>
                    <div className="header_Container">
                    <div className="justify_evenly">
                        <button className="btn teal-btn">CURRENCY TRENDS</button>
                        <div className="justify_around">
                            {Header?.map((item) => {
                                return (
                                  <>
                                    <Link href={item?.url}>
                                        <div key={item?.id} className='relative'>
                                            {console.log(item?.id)}
                                            {item?.notifications === true ? <span onClick={openSidebar} className='bell_notifications absolute top-0 border-2 border-gray-900 w-2 h-2 rounded-full'>{notificationSidebar.length}</span> : ""}
                                            <span className='icons text-2xl'>{item?.icon}</span>
                                        </div>
                                    </Link>
                                  </>
                                )
                            })}
                        </div>

                        <div className="flex_col">
                            <span>Vertofx</span>
                            <p>vu-1299045-20</p>
                        </div>
                    </div>
                    </div>
                </header>
            </div>
            {isSidebarOpen && <> <div className="absolute right-0 z-40"><SidebarNotification /></div> </>}

        </>
    )
}

export default Headers
