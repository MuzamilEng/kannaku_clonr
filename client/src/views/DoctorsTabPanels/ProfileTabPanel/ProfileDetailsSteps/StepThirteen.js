import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Icon } from '@iconify/react'

function StepThirteen({ handleNext, handleBack, handleGoBack }) {
  return (
    <Grid container spacing={2} p={'32px'}>
      <Grid item xs={6}>
        <Stack direction={'column'} justifyContent={'space-between'} spacing={2} maxWidth='420px' mb='56px'>
          <Stack direction={'row'} spacing={2} alignItems='center'>
            <Icon icon='ic:baseline-warning-amber' color='#ffc700' width='25' height='25' />
            <Typography variant='h6' color='black' fontWeight={600}>
              Profile is under verification!
            </Typography>
          </Stack>

          <Typography variant='subtitle2' color='#000000'>
            As our team is facing heavy surge in requests due to covid-19, kindly give us 7 working days to verify the
            information which you have provided.
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

export default StepThirteen
