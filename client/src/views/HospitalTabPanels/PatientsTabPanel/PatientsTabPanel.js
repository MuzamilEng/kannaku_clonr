import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Box,
  Collapse,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Typography
} from '@mui/material'
import { allClientsNavigation } from '../../../navigation/hospital'
// import ProfileTabPanel from 'src/views/HospitalTabPanels/PatientsTabPanel/TabPanels/ProfileTabPanel'
import ProfileTabPanel from '../../../views/HospitalTabPanels/PatientsTabPanel/TabPanels/ProfileTabPanel'

import AppointementTabPanel from './TabPanels/AppointementTabPanel'
import ClientNotesTabPanel from './TabPanels/ClientNotesTabPanel'
import ThreatmentPlanTabPanel from './TabPanels/ThreatmentPlanTabPanel'
import CompletedProceduresTabPanel from './TabPanels/CompletedProceduresTabPanel'
import FilesTabPanel from './TabPanels/FilesTabPanel'
import PrescriptionTabPanel from './TabPanels/PrescriptionTabPanel'
import TimeLineTabPanel from './TabPanels/TimeLineTabPanel'
import InvoicesTabPanel from './TabPanels/InvoicesTabPanel'
import PaymentsTabPanel from './TabPanels/PaymentsTabPanel'
import LedgerTabPanel from './TabPanels/LedgerTabPanel'
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'


function PatientsTabPanel() {
  const [value, setValue] = useState('1')
  const [open, setOpen] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const AllClientsList = () => {
    const handleClick = () => {
      setOpen(!open)
    }
    return (
      <List component='nav'>
        {allClientsNavigation().map(client => {
          return (
            <Box key={client.title}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={client.title} sx={{ color: '#28328C !important' }} />
                  {(client.children || client.children.length) && (
                    <Icon icon={open ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
                  )}
                </ListItemButton>
              </ListItem>

              {(client.children || client.children.length) && (
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <TabList
                    orientation='vertical'
                    onChange={handleChange}
                    aria-label='vertical tabs example'
                    sx={{ mr: '0px', borderRightWidth: '0px' }}
                  >
                    {client.children.map((item, i) => (
                      <Tab
                        value={item.value}
                        label={item.title}
                        key={item.title}
                        sx={{
                          alignItems: 'flex-start',
                          textAlign: 'left',
                          px: '45px',
                          color: value === item.value ? '#FFFFFF !important' : '#A7A7A7 !important',
                          background: value === item.value ? '#14BEF0 !important' : 'transparent !important'
                        }}
                      />
                    ))}
                  </TabList>
                </Collapse>
              )}
            </Box>
          )
        })}
      </List>
    )
  }
  return (
    <TabPanel value='2' sx={{ p: '0px' }}>
      <Headingbar text={'Clients'} />
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
              All Clients
            </Typography>

            <AllClientsList />
          </Grid>
          <Grid item xs={10}>
            <ProfileTabPanel />
            <AppointementTabPanel />
            <ClientNotesTabPanel />
            <ThreatmentPlanTabPanel />
            <CompletedProceduresTabPanel />
            <FilesTabPanel />
            <PrescriptionTabPanel />
            <TimeLineTabPanel />
            <InvoicesTabPanel />
            <PaymentsTabPanel />
            <LedgerTabPanel />
          </Grid>
        </Grid>
      </TabContext>
    </TabPanel>
  )
}

export default PatientsTabPanel
