import React, { useState } from 'react'
import Input1 from './Input1'
import Input2 from './Input2'
import { Icon } from '@iconify/react';
// import CommonSidebar from './CommonSidebar';
import { useGlobalContext } from '../../store/authStore';

const VertoRate = () => {
  const [show, setShow] = useState(true)

  const { openSidebar,
    closeSidebar,
    isSidebarOpen,
    setIsSidebarOpen } = useGlobalContext()
  return (
   <>
   {show && <>
    <div className='bg-white'>
      <div className="container verto_container z-50 flex justify-evenly m-2 p-2">
        {/* <CommonSidebar title="Send Money At Verto Rate"/> */}
        <div className='bg-white mt-4'>
         <div className="flex input_verto_container justify_between">
         <Icon icon="mdi:cancel-box-outline" className='text-2xl text-gray-400 ml-2' onClick={()=> setShow(false)} />
          <div className="">
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Send Money At Verto Rate</h1>
            <p style={{ color: 'gray', marginLeft: '1rem' }}>To</p>
            <div className="flex items-center">
              <Input1 />
              <Input2 />
            </div>
            <p style={{ color: 'gray', marginLeft: '1rem' }}>From</p>
            <div className="flex items-center">
              <Input1 />
              <Input2 />
            </div>
            <div className="input items-center">
                <label htmlFor="reference" className='font-bold text-gray-900'>Reference (optional)</label> <br />
                <input type="text" name='reference' placeholder='Reference' className='ref_container border-gray-400 border-2 rounded-md p-2 m-2' />
            </div>
            <div className="mt-4">
            <h1 className="flex text-gray-600 font-bold ml-2 p-2">At (Rate) </h1>
            <h1 className="flex text-gray-600 font-bold ml-2 p-2">1GBP = 1.17 AUD</h1>
            <h1 className="flex text-gray-600 font-bold ml-2 p-2">1 EAD = 0.09873 GBP</h1>

            </div>
            <div className="mt-4 pt-2">
            <div className="buttons ml-3 flex w-[20rem] justify-evenly">
            <button className="btn btn_1 color_white color_black p-2 w-8 text-white items-center hover:bg-teal-700 rounded-md">Submit</button>
        <button className="btn btn_1 color_white border-2 p-2 border_black items-center hover:text-teal-900 rounded-md">Cancel</button>
       </div>
            </div>
          </div>
        </div>
    </div>
        <div className="information1 w-fit bg-gray-100 mt-4">
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
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">Delivery date is not guaranteed, but we will try our best to make it in time frames.</li>
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">Delivery date is not guaranteed, but we will try our best to make it in time frames.</li>
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">Delivery date is not guaranteed, but we will try our best to make it in time frames.</li>
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">Delivery date is not guaranteed, but we will try our best to make it in time frames.</li>
            <li className="text-gray-300 list-disc color-gray p-2 mt-2">Delivery date is not guaranteed, but we will try our best to make it in time frames.</li>

          </ul>
          </div>
        </div>
      </div>
    </div>
   </>}
   </>
  )
}

export default VertoRate
