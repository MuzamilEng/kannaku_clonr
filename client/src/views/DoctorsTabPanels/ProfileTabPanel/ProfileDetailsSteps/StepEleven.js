import React from 'react'
import { Grid, InputAdornment, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import CSelect from '../../sharedComponents/CSelect'
import CTextField from '../../sharedComponents/CTextField'
import { Box } from '@mui/system'

function StepEleven({ handleNext, handleBack }) {
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
          <Box>
            <Typography variant='h6' color='black' fontWeight={600}>
              Map Location
            </Typography>
            <Typography variant='subtitle2' color='black' fontWeight={600}>
              Practice Location
            </Typography>
          </Box>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 1/3
          </Typography>
        </Stack>

        <CTextField
          label={'Phone number'}
          inputText='+6282340291921'
          hiddenLabel
          helperText={'Note: Patient calls will be directed to this number. You can update it later also.'}
          endAdornment={
            <InputAdornment position='end' sx={{ '& .MuiTypography-root': { color: '#0FA958' } }}>
              Verified
            </InputAdornment>
          }
        />

        <Box maxWidth={'420px'} width='100%' height={'1px'} bgcolor='#C4C4C4' mt='34px' mb='16px'></Box>

        <CTextField label={'Email Address'} placeholder='Enter Email Address' hiddenLabel />

        <CSelect label={'Street address'} placeholder='Type Street Address' />

        <Typography variant='subtitle2' color='black' mb='8px'>
          Drag n drop the pin to your location:
        </Typography>

        <Typography variant='subtitle2' color='#14BEF0' mb='15px'>
          USE CURRENT LOCATION
        </Typography>

        <img src='/images/pages/user-location.png' alt='' />

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
          On Practo, doctors are listed under the relevant specializations based on their academic degrees. Both,
          education and years of experience, showcase doctor’s expertise and are among the top 3 things that patients
          consider while making their decision
        </Box>
      </Grid>
    </Grid>
  )
}

export default StepEleven
