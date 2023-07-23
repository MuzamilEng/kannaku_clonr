import React, { useState } from 'react'
import Input1 from './Input1'
import Input2 from './Input2'
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../../store/authStore';

const CommonSidebar = ({title}) => {
  const [toggle, setToggle] = useState(true)
  const { openSidebar,
    closeSidebar,
    isSidebarOpen,
    setIsSidebarOpen } = useGlobalContext()
  return (
    <>
    {toggle && <>
      <div className='bg-white mt-4 p-4'>
         <div className="flex input_verto_container justify_between">
         <Icon icon="mdi:cancel-box-outline" className='text-2xl text-gray-400 ml-2' onClick={()=> setToggle(false)} />
          <div className="">
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</h1>
            <p style={{ color: 'gray', marginLeft: '1rem' }}>To</p>
            <div style={{display: "flex", alignItems: "center"}} className="flex items-center">
              <Input1 />
              <Input2 />
            </div>
            <p style={{ color: 'gray', marginLeft: '1rem' }}>From</p>
            <div className="flex">
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
    </>}
    </>
    
  )
}

export default CommonSidebar
