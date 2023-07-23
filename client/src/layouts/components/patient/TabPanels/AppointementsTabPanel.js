import { TabPanel } from '@mui/lab'
import { Box } from '@mui/material'
import React from 'react'

function AppointementsTabPanel() {
  return (
    <TabPanel value='2' sx={{ padding: '3px', width: '100%', height: '100%' }}>
      <Box sx={{ background: 'white', border: '0.5px solid #C4C4C4', width: '100%', height: '100%' }}></Box>
    </TabPanel>
  )
}

export default AppointementsTabPanel
