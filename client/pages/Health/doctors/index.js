import React from 'react'
import HospitalLayout from '../../../src/layouts/HospitalLayout'
import ProfileTabPanel from '../../../src/views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import CalendarTabPanel from '../../../src/views/HospitalTabPanels/CalendarTabPanel/CalendarTabPanel'
import Navbar from "../../../src/Compoment/Navbar"
import DropdownList from '../../../src/Compoment/DropdownList'

function index() {
  return (
    <>
      <Navbar/>
    <div className="flex" style={{fontSize: "1.2rem"}}>
      <div className="dp_down">
      <DropdownList />
      </div>
      <div className="w-full_m1">
      <HospitalLayout>
      <CalendarTabPanel />
      <ProfileTabPanel />
    </HospitalLayout>
    
      </div>
    </div>
    </>
    
  )
}

// index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default index
