import React, { useState } from 'react'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import { Box, Collapse, Grid, Icon, List, ListItem, ListItemButton, ListItemText, Tab, Typography } from '@mui/material'
// import { comunicationNavigation } from 'src/navigation/hospital'
import { comunicationNavigation } from '../../../navigation/hospital'

import CampaignTabPanel from './TabPanels/CampaignTabPanel'
import DeliveryReportsTabPanel from './TabPanels/DeliveryReportsTabPanel'
import UpcomingFollowupTabPanel from './TabPanels/UpcomingFollowupTabPanel'
import SMSCenterTabPanel from './TabPanels/SMSCenterTabPanel'
import UsageReportTabPanel from './TabPanels/UsageReportTabPanel'
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'


function ComunicationTabPanel() {
  const [value, setValue] = useState('1')
  const [open, setOpen] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const ComunicationList = () => {
    const handleClick = () => {
      setOpen(!open)
    }
    return (
      <TabList
        orientation='vertical'
        onChange={handleChange}
        aria-label='vertical tabs example 1'
        sx={{ mr: '0px', borderRightWidth: '0px' }}
      >
        {comunicationNavigation().map(cm => {
          return (
            <Tab
              value={cm.value}
              label={cm.title}
              key={cm.title}
              sx={{
                alignItems: 'flex-start',
                textAlign: 'left',
                color: value === cm.value ? '#FFFFFF !important' : '#A7A7A7 !important',
                background: value === cm.value ? '#14BEF0 !important' : 'transparent !important'
              }}
            />
          )
        })}
      </TabList>
    )
  }
  return (
    <TabPanel value='3' sx={{ p: '0px' }}>
      <Headingbar text={'Comunications'} />
      <TabContext value={value}>
        <Grid container>
          <Grid item xs={2} bgcolor='white' pl='0px !important' sx={{ borderRight: '2px solid #F0F0F5' }}>
            <Typography
              variant='subtitle2'
              color='#28328C'
              px='24px'
              py='16px'
              borderBottom='2px solid #F0F0F5'
              position={'relative'}
              sx={{
                '&::after': {
                  content: '""',
                  width: '2px',
                  height: '100%',
                  position: 'absolute',
                  left: '100%',
                  top: '0px',
                  background: 'white'
                }
              }}
            >
              Clinic Name
            </Typography>

            <ComunicationList />
          </Grid>
          <Grid item xs={10}>
            {/* TAB PANELS */}

            <CampaignTabPanel />
            <DeliveryReportsTabPanel />
            <UpcomingFollowupTabPanel />
            <SMSCenterTabPanel />
            <UsageReportTabPanel />
          </Grid>
        </Grid>
      </TabContext>
    </TabPanel>
  )
}

export default ComunicationTabPanel
