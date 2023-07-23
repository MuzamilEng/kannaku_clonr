import React from 'react'
// import HospitalLayout from '../../../src/layouts/HospitalLayout'
import HospitalLayout from '../../../src/layouts/HospitalLayout'
// import ProfileTabPanel from '../../../views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import ProfileTabPanel from '../../../src/views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import CalendarTabPanel from '../../../src/views/HospitalTabPanels/CalendarTabPanel/CalendarTabPanel'
import Navbar from "../../../src/Compoment/Navbar"
import { topNavigation } from '../../../src/navigation/hospital'
import Link from 'next/link'
import EQualification from './EQualification'
// import CPrice from './cPri=ce'
import BasicDetails from './BasicDetails'
import DropdownList from '../../../src/Compoment/DropdownList'

function EsDetails() {
  return (
    <>
      <Navbar/>
    <div className="flex" style={{fontSize: "1.2rem"}}>
      <div className="">
      <DropdownList />
      </div>
      <div className="w-full_m1">
      <HospitalLayout>
      <BasicDetails />
      <ProfileTabPanel />
    </HospitalLayout>
    
      </div>
    </div>
    </>
    
  )
}

// index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default EsDetails
