import React, { useState } from 'react'
import Input1 from './Input1'
import Input2 from './Input2'
import { Icon } from '@iconify/react';

const DesiredRates = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <>
    {toggle && <>
      <div className='bg-white relative'>
      <Icon icon="mdi:cancel-box-outline" className='text-4xl absolute left-0 text-gray-400 mr-2' onClick={()=> setToggle(false)} />
      <div className="container m-2 p-2 ">
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginLeft: "1rem" }}>Send Money At Your Desired Rate</h1>
        <div className="flex justify_between">
          <div className="">
            <p style={{ color: 'gray', marginLeft: '1rem' }}>Sell</p>
            <div className="flex items-center">
              <Input1 />
              <Input2 />
            </div>
            <p style={{ color: 'gray', marginLeft: '1rem' }}>Buy</p>
            <div className="flex items-center">
              <Input1 />
              <Input2 />
            </div>
            <div className="flex justify-around mt-3">
              <div className="" style={{ marginTop: '.3rem' }}>
                <h2 style={{color: "gray", fontWeight: "bold"}}>At (Rate)</h2>
                <div className="flex items-center">
                  <h1 className="flex text-gray-700 text-md ml-2 p-2">1 EAD = <Icon icon="fluent:arrow-sync-24-regular" className='text-red-500 ml-1' /> </h1>
                  <input type="number" style={{ padding: '.2rem', borderRadius: '.3rem', width: "7rem", border: '2px solid gray' }} /> <h3 className='flex text-gray-700 text-md ml-2 p-2'> AUD </h3><Icon icon="akar-icons:arrow-repeat" className='text-teal-700 text-xl m-3' />
                </div>
              </div>
              <div className="" style={{ marginTop: '.3rem' }}>
                <h2 style={{color: "gray", fontWeight: "bold"}}>Order expires on</h2>
                <div className="flex items-center">
                  <input type="date" style={{ padding: '.2rem', borderRadius: '.3rem', width: "10rem", border: '2px solid gray' }} />
                </div>
              </div>
            </div >
          </div>
        </div>
        <div className="information w-fit bg-gray-200 mt-4">
          <div className="flex items-center">
          <Icon icon="material-symbols:info-outline" className="ml-2 text-2xl" />
          <h1 className="font-bold text-xl ml-2">Addition Help</h1>
          </div>
          <div className="p-2">
          <span className="text-gray-400 font-bold mt-3">Fee</span>
          <p className="text-gray-300 color-gray">Verto does not charge at fees when sending at verto rate.</p>
          </div>
          <div className="p-2">
          <span className="text-gray-400 font-bold mt-3">Delivery Date</span>
          <ul className="list items-center">
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">Delivery date is not guaranteed, but we will try our best to make it in time frames.</li>
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">The sooner we recieve money the faster your recipitient will get their funds.</li>

          </ul>
          </div>
        </div>
      </div>
      <div className="buttons ml-3 flex w-[20rem] justify-evenly">
      <button className="btn btn_1 color_white color_black p-2 w-8 text-white items-center hover:bg-teal-700 rounded-md">Submit</button>
        <button className="btn btn_1 color_white border-2 p-2 border_black items-center hover:text-teal-900 rounded-md">Cancel</button>
       </div>
    </div>
    </>}
    </>
  )
}

export default DesiredRates
