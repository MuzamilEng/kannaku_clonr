import { Icon } from '@iconify/react'
import { TabPanel } from '@mui/lab'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function OnlineConsultationsTabPanel() {
  return (
    <TabPanel value='5' sx={{ padding: '3px', width: '100%', height: '100%' }}>
      <Stack
        spacing={4}
        direction={'column'}
        justifyContent='center'
        alignItems='center'
        sx={{ background: 'white', border: '0.5px solid #C4C4C4', width: '100%', height: '100%' }}
      >
        <Icon icon='healthicons:doctor-male' color='#55acee' width={67} height={67} />
        <Typography variant='body2' color='#353535'>
          You do not have any consultations yet
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#14BEF0'
          }}
        >
          Ask a Doctor
        </Button>
      </Stack>
    </TabPanel>
  )
}

export default OnlineConsultationsTabPanel
