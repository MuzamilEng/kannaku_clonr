// import Sidebars from '../../vertoComponents/component/Sidebars'
import Headers from '../../vertoComponents/component/Headers'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import CommonTransaction from '../../vertoComponents/component/CommonTransaction';
import Link from 'next/link';
import DropdownList from '../../src/Compoment/DropdownList';
import Sidebar from '../../layouts/Sidebar';

const DesiredRate = () => {
  return (
    <main className='bg-white h-screen w-screen overflow-hidden'>
      <Headers />
      <div className="content1 w-100 h-full flex">
      <div className="relative">
        <div className="sideBar_Container">
          <Sidebar />
          {/* <DropdownList /> */}
        </div>
        </div>
        <div className="dashboard_content right-0 absolute bg-gray-100 w-full h-full rounded-l-lg">
          <div className="">
            <div className="mrkt_orders">
              {/* offer lists */}
              <div className="flex items-center ml-3 p-4 border-b-2 border-gray-300">
                <Link href='/CurrencyExchange/VertoRate'>
                <span className='text-gray-500 ml-3 p-3' >At Verto Rate</span>
                </Link>
                <Link href="/CurrencyExchange/DesiredRate">
                <span className='text-teal-700 ml-3 p-3 border-b-2 border_black' >At Desired Rate</span>
                </Link>
                <Link href="/CurrencyExchange/BankAccount">
                <span className='text-gray-500 ml-3 p-3' >Bank Account</span>
                </Link>
                <Link href='/CurrencyExchange/EWallet'>
                <span className='text-gray-500 ml-3 p-3'>E-Wallets</span>
                </Link>
              </div>
              <div className="flex items-center justify-between pt-3 mt-1">
                <div className="flex border-2 border-gray-300 rounded-md m-2">
                  <input type="search" placeholder='search' className='text-left p-2 rounded-lg focus:outline-none w-[17rem] bg-gray-100' /><Icon icon="charm:search" className='text-gray-400 text-lg m-2' />
                </div>
                <div className="flex items-center mr-4 m-2 p-2">
                  <span className="text-gray-400 mr-2">Filter</span> <Icon icon="majesticons:filter-line" className='text-gray-500 text-2xl mr-2' />
                  <span className="text-gray-400 mr-2">Refresh</span> <Icon icon="fluent:arrow-sync-24-regular" className='text-gray-500 text-2xl mr-2' />
                  <span className="text-gray-400 mr-2">Export</span> <Icon icon="prime:file-export" className='text-gray-500 text-2xl mr-2' />
                </div>
              </div>
              <CommonTransaction />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DesiredRate
