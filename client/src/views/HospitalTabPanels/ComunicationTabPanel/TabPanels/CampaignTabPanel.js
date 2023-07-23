import React, { useState } from 'react'
import { TabPanel } from '@mui/lab'
import { Box, Button, Stack, Typography } from '@mui/material'
import MessageBox from '../MessageBox'

function CampaignTabPanel() {
  return (
    <TabPanel value='1' sx={{ p: '0px' }}>
      <Stack
        direction={'row'}
        minHeight='56px'
        spacing={4}
        justifyContent='flex-end'
        alignItems='center'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='2px solid #F0F0F5'
      >
        <Typography variant={'subtitle2'} color='#A7A7A7'>
          Communication Credits : <span style={{ color: '#28328C' }}>0 SMS Free, 144 SMS Paid</span>
        </Typography>
      </Stack>
      <Stack
        direction={'row'}
        spacing={4}
        justifyContent='flex-end'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='1px solid #F0F0F5'
      >
        <Button
          variant='outlined'
          className='active'
          sx={{
            borderColor: '#C4C4C4',
            color: 'black',
            '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0', textTransform: 'capitalize' }
          }}
        >
          Add New Campaign
        </Button>
      </Stack>
      <Box px='8px' py='8px' minHeight='100vh' sx={{ background: 'white', borderTop: '1px solid #F0F0F5' }}>
        <Typography variant='subtitle2' fontWeight={600} color='black'>
          Campaign History
        </Typography>
        <Stack spacing={2} mt='19px'>
          <MessageBox />

          <MessageBox defaultValue={true} />
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default CampaignTabPanel
