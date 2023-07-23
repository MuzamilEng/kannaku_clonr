import React from 'react'
import HospitalLayout from '../../../src/layouts/HospitalLayout'
import CalendarTabPanel from '../../../src/views/HospitalTabPanels/CalendarTabPanel/CalendarTabPanel'
import ComunicationTabPanel from '../../../src/views/HospitalTabPanels/ComunicationTabPanel/ComunicationTabPanel'
import ExpensesTabPanel from '../../../src/views/HospitalTabPanels/ExpensesTabPanel/ExpensesTabPanel'
import InventoryTabPanel from '../../../src/views/HospitalTabPanels/InventoryTabPanel/InventoryTabPanel'
import PatientsTabPanel from '../../../src/views/HospitalTabPanels/PatientsTabPanel/PatientsTabPanel'
import ReportsTabPanel from '../../../src/views/HospitalTabPanels/ReportsTabPanel/ReportsTabPanel'
import Navbar from '../../../src/Compoment/Navbar'
import DropdownList from '../../../src/Compoment/DropdownList'

function index() {
  return (
    <>
      <Navbar />
    <div className="flex" style={{fontSize: "1.2rem"}}>
      <div className="dp_down">
        <DropdownList />
      </div>
      <div className="w-full_m1">
      <HospitalLayout>
      <CalendarTabPanel />
      <PatientsTabPanel />
      <ComunicationTabPanel />
      <ReportsTabPanel />
      <InventoryTabPanel />
      <ExpensesTabPanel />
    </HospitalLayout>
      </div>
    </div>
    </>
   
  )
}

// index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default index
