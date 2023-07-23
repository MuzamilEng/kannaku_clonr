import { TabPanel } from '@mui/lab'
import { Grid } from '@mui/material'
import React from 'react'
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'

import CustomCalendar from './CustomCalendar'
import DoctorsList from './DoctorsList'

function CalendarTabPanel() {
  return (
    <>
      <TabPanel value='1' sx={{ p: '0px' }}>
        <Headingbar text={'Calendar'} />
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <DoctorsList />
          </Grid>
          <Grid item xs={10}>
            <CustomCalendar />
          </Grid>
        </Grid>
      </TabPanel>
    </>
  )
}

export default CalendarTabPanel
