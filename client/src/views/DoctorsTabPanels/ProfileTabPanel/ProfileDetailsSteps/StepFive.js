import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import CSelect from '../../sharedComponents/CSelect'
import { Box } from '@mui/system'
import CTextField from '../../sharedComponents/CTextField'

function StepFive({ handleNext, handleBack }) {
  return (
    <Grid container spacing={2} p={'32px'}>
      <Grid item xs={6}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          spacing={2}
          maxWidth='420px'
          mb='56px'
        >
          <Typography variant='h6' color='black' fontWeight={600}>
            Establishment basic details
          </Typography>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 5/5
          </Typography>
        </Stack>

        <CTextField label={'Establishment name'} placeholder='Type Registration Establishment name' />

        <CSelect label={'City'} placeholder='Type & Select City' />

        <CSelect label={'Locality'} placeholder='Select Locality' />

        <Box maxWidth={'420px'} width='100%' height={'1px'} bgcolor='#C4C4C4' mt='34px' mb='16px'></Box>

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
          Basic details about your practice helps patients reach you easily for appointment booking and inquiries.
        </Box>
      </Grid>
    </Grid>
  )
}

export default StepFive
