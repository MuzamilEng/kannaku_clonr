import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import { Box } from '@mui/system'
import CRadioButton from '../../sharedComponents/CRadioButton'
import { Icon } from '@iconify/react'

function StepTen({ handleNext, handleBack, handleGoBack }) {
  return (
    <Grid container spacing={2} p={'32px'}>
      <Grid item xs={6}>
        <Stack direction={'column'} justifyContent={'space-between'} spacing={2} maxWidth='420px' mb='56px'>
          <Typography variant='h6' color='black' fontWeight={600}>
            Great Progress!
          </Typography>

          <Typography variant='subtitle2' color='#000000'>
            Your profile is just few steps away from going live.
          </Typography>
        </Stack>

        <Stack direction={'column'} justifyContent={'space-between'} spacing={2} maxWidth='420px' mb='56px'>
          <Typography variant='subtitle2' color='#A7A7A7' fontWeight={600}>
            Section A: Profile details
          </Typography>

          <Typography variant='subtitle2' color='#000000'>
            Doctor’s basic details, medical registration,
            <br /> education qualification, establishment details etc.
          </Typography>

          <Stack
            direction='row'
            alignItems={'center'}
            spacing={2}
            onClick={() => handleGoBack(0)}
            sx={{ cursor: 'pointer', maxWidth: 'fit-content' }}
          >
            <Icon icon='material-symbols:check-circle' color='#0fa958' width='14' height='14' />
            <Typography variant='subtitle2' color='#14BEF0' fontWeight={600}>
              Change
            </Typography>
          </Stack>
        </Stack>

        <Box maxWidth={'390px'} height='1px' bgcolor={'#D8D8D8'} mb='24px'></Box>

        <Stack direction={'column'} justifyContent={'space-between'} spacing={2} maxWidth='420px' mb='56px'>
          <Typography variant='subtitle2' color='#A7A7A7' fontWeight={600}>
            Section B: Profile verification
          </Typography>

          <Typography variant='subtitle2' color='#000000'>
            Doctor’s basic details, medical registration,
            <br /> education qualification, establishment details etc.
          </Typography>

          <Stack
            direction='row'
            alignItems={'center'}
            spacing={2}
            onClick={() => handleGoBack(0)}
            sx={{ cursor: 'pointer', maxWidth: 'fit-content' }}
          >
            <Icon icon='material-symbols:check-circle' color='#0fa958' width='14' height='14' />
            <Typography variant='subtitle2' color='#14BEF0' fontWeight={600}>
              Change
            </Typography>
          </Stack>
        </Stack>

        <Box maxWidth={'390px'} height='1px' bgcolor={'#D8D8D8'} mb='24px'></Box>

        <Stack direction={'column'} justifyContent={'space-between'} spacing={2} maxWidth='420px' mb='56px'>
          <Typography variant='subtitle2' color='#A7A7A7' fontWeight={600}>
            Step C: Start getting patients
          </Typography>

          <Typography variant='subtitle2' color='#000000'>
            Location, Timings, Fees
          </Typography>

          <CButton maxWidth='206px' onClick={handleNext}>
            Continue
          </CButton>
        </Stack>

        <Box maxWidth={'390px'} height='1px' bgcolor={'#D8D8D8'} mb='24px'></Box>

        <Grid item xs={6} display='flex' alignItems={'center'} justifyContent={'center'}>
          <Box
            sx={{
              background: '#DFF8F6',
              border: '2px solid #ACE5DF',
              borderRadius: '4px',
              color: '#40B09C',
              maxWidth: '390px',
              p: '18px'
            }}
          >
            <img src='/svg/lightbulb.png' alt='' />
            <br />
            Basic details about your practice helps patients reach you easily for appointment booking and inquiries.
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={6} display='flex' alignItems={'center'} justifyContent={'center'}>
        <img
          src='/images/pages/doctor-profile-snapshot.png'
          alt=''
          style={{ maxWidth: '541px', width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default StepTen
