import React from 'react'

import Grid from '@mui/material/Grid'
import Sidebar from './components/hospital/Sidebar'
import Topbar from './components/hospital/Topbar'
import { TabContext } from '@mui/lab'

function HospitalLayout({ children }) {
  const [value, setValue] = React.useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <Grid container sx={{ background: 'white' }}>
        <Grid item xs={2} sx={{ background: '#28328C' }}>
          <Sidebar currentPageIndex={value} handleChange={handleChange} />
        </Grid>
        <Grid item xs={10}>
          <Topbar />
          {children}
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default HospitalLayout
