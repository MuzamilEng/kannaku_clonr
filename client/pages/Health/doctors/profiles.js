import React from 'react'
import HospitalLayout from '../../../src/layouts/HospitalLayout'
import ProfileTabPanel from '../../../src/views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import Navbar from "../../../src/Compoment/Navbar"
import Profile from './Profile'
import DropdownList from '../../../src/Compoment/DropdownList'

function profiles() {
  return (
    <>
      <Navbar/>
    <div className="flex" style={{fontSize: "1.2rem"}}>
      <div className="">
        <DropdownList />
      </div>
      <div className="w-full">
      <HospitalLayout>
        <Profile />
      <ProfileTabPanel />
    </HospitalLayout>
    
      </div>
    </div>
    </>
    
  )
}

// index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default profiles
