import { TabPanel } from '@mui/lab'
import { Box } from '@mui/material'
import React from 'react'
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'

import UserProfile from './UserProfile/UserProfile'
import StepsHandler from './ProfileDetailsSteps/StepsHandler'

function ProfileTabPanel() {
  return (
    <TabPanel value='7' sx={{ p: '0px' }}>
      <Headingbar text={'Profile'} />
      <Box sx={{ width: '100%' }}>
        <StepsHandler />
        {/* <UserProfile /> */}
      </Box>
    </TabPanel>
  )
}

export default ProfileTabPanel
