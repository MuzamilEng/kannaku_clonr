import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import { Box } from '@mui/system'
import { Icon } from '@iconify/react'

function StepEight({ handleNext, handleBack }) {
  return (
    <Grid container spacing={2} p={'32px'}>
      <Grid item xs={6}>
        <Stack direction={'row'} justifyContent={'space-between'} maxWidth='420px'>
          <Stack direction={'column'} justifyContent={'space-between'} spacing={2} mb='56px'>
            <Typography variant='h6' color='black' fontWeight={600}>
              Medical Registration Proof
            </Typography>

            <Typography variant='subtitle2' color='#000000'>
              Jamhur Ghifari
            </Typography>
          </Stack>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 2/3
          </Typography>
        </Stack>

        <Box
          sx={{
            background: '#F0F0F5',
            borderRadius: '4px',
            maxWidth: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '14px',
            p: '32px',
            mb: '24px'
          }}
        >
          <Icon icon='ion:cloud-upload-outline' width='23' height='26' />
          <Typography variant='subtitle2' color='#A7A7A7'>
            Drop or Upload Identity Proof
          </Typography>
          <Button
            variant='outlined'
            sx={{
              background: '#FFFFFF',
              borderColor: '#C4C4C4',
              borderRadius: '4px',
              color: 'black'
            }}
          >
            Upload
          </Button>
        </Box>

        <Typography variant='subtitle2' color='#A7A7A7' mb='16px'>
          Please upload your medical registration proof. Only licensed <br />
          and genuine doctors are listed on Practo.
          <br />
          Acceptable documents <br />
          Medical Registration Certification <br />
          d12333123222132 Delhi State Dental Council
        </Typography>

        <Box maxWidth={'420px'} height='1px' bgcolor={'#D8D8D8'} mb='16px'></Box>

        <Typography variant='subtitle2' color='#A7A7A7' mb='53px'>
          Extra proofs required to be uploaded: <br />
          1. Establishment Proof
        </Typography>

        <Box maxWidth={'420px'} height='1px' bgcolor={'#D8D8D8'} mb='16px'></Box>

        <Stack direction={'row'} maxWidth='420px' spacing={2}>
          <CButton bgColor='white' onClick={handleBack}>
            Back
          </CButton>
          <CButton onClick={handleNext}>Continue</CButton>
        </Stack>
      </Grid>
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
          2.5M patients are looking for a doctor on Practo. Verify your credentials and reach out to them
        </Box>
      </Grid>
    </Grid>
  )
}

export default StepEight
