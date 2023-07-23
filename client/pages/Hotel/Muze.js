// import Sidebars from '../component/Sidebars'
import Sidebars from '../../vertoComponents/component/Sidebars'
import Headers from '../../vertoComponents/component/Headers'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import { Searchs, dashboard_icon } from '../../vertoComponents/Data'
import Link from 'next/link'
// import Search from '../component/Search';
import VertoRate from '../../vertoComponents/component/VertoRate';
import { useGlobalContext } from '../../store/authStore';
import DesiredRates from '../../vertoComponents/component/DesiredRates';
import CommonSidebar from '../../vertoComponents/component/CommonSidebar';

const Muze = () => {
  const [show, setShow] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');
  const { openSidebar,
    closeSidebar,
    isSidebarOpen,
    setIsSidebarOpen } = useGlobalContext()
    let component;
    let title;
    
    switch (selectedOption) {
      case 'Send Money At Verto Rate':
        title = 'Send Money At Verto Rate';
        component = <VertoRate />;
        break;
      case 'Send Money At Desired Rate':
        title = 'Send Money At Desired Rate';
        component = <DesiredRates />;
        break;
      case 'Convert Within Wallet':
        title = 'Convert Within Your Wallet';
        component = <CommonSidebar title={title} />;
        break;
        case 'Add Beneficiary Account':
        title = 'Add Beneficiary Account';
        component = <CommonSidebar title={title} />;
        break;
      default:
        title = '';
        component = null;
    }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShow(false)
    // setSelectedOption('')
  };
  const optionsSize = Searchs.length;
  return (
    <div className="w-screen overflow-hidden h-screen">
      <div className=''>
      <Headers />
      {component && (
      <div className="absolute toggle_components right-0 top-18">
        {component}
      </div>
    )}
      <div className="content w-100 h-full flex">
        <div className="sideBar_Container">
          <Sidebars />
        </div>
        <div className="flex height_container justify-center items-center flex-col p-1 bg-gray-100 rounded-l-lg">
          <div className="">
            <h1 className="font-bold pt-10 pl-4 text-2xl p-3">What do you want to do today?</h1>
            <div className="dashbord_center rounded-lg text-center z-30 bg-teal-500 shadow-lg shadow-teal-300/50">
              <div className="relative">
                <h1 className='text-white relative text-3xl flex'>I want to {(!show && selectedOption === '') ? <span className='text-4xl ml-3 text-white border-b-2 border-dashed'>Select</span> : ''} <span className='text-4xl ml-3 text-white border-b-2 border-dashed' onClick={openSidebar}>{selectedOption}</span>
                  <Icon icon="bxs:down-arrow" className="text-white relative text-3xl ml-3" onClick={() => setShow(!show)} /></h1>
                {show && <div className='absolute right-0 z-40'>
                  <select onChange={handleOptionChange} size={optionsSize} className='bg-teal-700 p-2 rounded-md text-white focus:outline-none search_results'>
                    {Searchs?.map((item) => {
                      const { id, title } = item;
                      return (
                        <option key={id} value={title} className='text-white hover:bg-gray-400 rounded-md p-3'>
                          {title}
                        </option>
                      );
                    })}
                  </select>
                </div>}
              </div>
              <div className="mt-5 flex max-w-6xl items-center pt-3 relative">
                <div className="border-b-2 border-white w-screen"></div>
                <p className='text-white p-2 border-2 border-white rounded-full w-[45rem]'>You can try any of the following</p>
                <div className="border-b-2 border-white w-screen"></div>
              </div>
              <div className="manage_icons flex">
                {dashboard_icon?.map((item) => {
                  const { id, title, url, purpose, icon } = item;
                  return <main key={id} className='mt-4 pt-3 flex items-center'>
                    <Link href={url}>
                      <div className="align_items1 m-3">
                        <span className='text-white text-4xl'>{icon}</span>
                        <p className='text-white'>{purpose}</p>
                        <p className='text-white'>{title}</p>
                      </div>
                    </Link>
                  </main>
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Muze
