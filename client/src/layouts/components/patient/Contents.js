import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Stack, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import MedicalRecordsTabPanel from './TabPanels/MedicalRecordsTabPanel'
import Tablist from './Tablist'
import AppointementsTabPanel from './TabPanels/AppointementsTabPanel'
import LabTestTabPanels from './TabPanels/LabTestTabPanels'
import MedicineOrdersTabPanel from './TabPanels/MedicineOrdersTabPanel'
import ArticlesTabPanel from './TabPanels/ArticlesTabPanel'
import OnlineConsultationsTabPanel from './TabPanels/OnlineConsultationsTabPanel'
import FeedbackTabPanel from './TabPanels/FeedbackTabPanel'
import PaymentTabPanel from './TabPanels/PaymentTabPanel'

function Contents() {
  const [value, setValue] = useState('1')

  return (
    <Grid item xs={12}>
      <TabContext value={value}>
        <Box sx={{ display: 'flex' }}>
          <Grid container>
            {/* Tablist */}
            <Grid item xs={2}>
              <Tablist setValue={setValue} />
            </Grid>
            {/* Tab content */}
            <Grid item xs={10}>
              <MedicalRecordsTabPanel />
              <AppointementsTabPanel />
              <LabTestTabPanels />
              <MedicineOrdersTabPanel />
              <OnlineConsultationsTabPanel />
              <ArticlesTabPanel />
              <FeedbackTabPanel />
              <PaymentTabPanel />
            </Grid>
          </Grid>
        </Box>
      </TabContext>
    </Grid>
  )
}

export default Contents
