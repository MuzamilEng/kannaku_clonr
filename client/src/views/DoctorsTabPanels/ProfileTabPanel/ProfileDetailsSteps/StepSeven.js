import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import { Box } from '@mui/system'
import { Icon } from '@iconify/react'

function StepSeven({ handleNext, handleBack }) {
  return (
    <Grid container spacing={2} p={'32px'}>
      <Grid item xs={6}>
        <Stack direction={'row'} justifyContent={'space-between'} maxWidth='420px'>
          <Stack direction={'column'} justifyContent={'space-between'} spacing={2} mb='56px'>
            <Typography variant='h6' color='black' fontWeight={600}>
              Identity Proof
            </Typography>

            <Typography variant='subtitle2' color='#000000'>
              Jamhur Ghifari
            </Typography>
          </Stack>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 1/3
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
            p: '32px'
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
          Please upload your identity proof to ensure that the ownership
          <br /> of your profile remains with only you.
        </Typography>

        <Typography variant='subtitle2' color='#A7A7A7' mb='16px'>
          Acceptable documents <br />• Aadhar Card <br />• Driving License <br />• Voter Card <br />• Any other Govt. ID
        </Typography>

        <Box maxWidth={'420px'} height='1px' bgcolor={'#D8D8D8'} mb='16px'></Box>

        <Typography variant='subtitle2' color='#A7A7A7' mb='53px'>
          Extra proofs required to be uploaded: <br />
          1. Medical Registration Proof <br />
          2. Establishment Proof
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

export default StepSeven
