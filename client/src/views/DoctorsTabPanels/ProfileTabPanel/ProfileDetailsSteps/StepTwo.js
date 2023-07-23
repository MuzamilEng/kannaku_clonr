import React from 'react'
import { Alert, Divider, Grid, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import CRadioButton from '../../sharedComponents/CRadioButton'
import CSelect from '../../sharedComponents/CSelect'
import CTextField from '../../sharedComponents/CTextField'
import { Box } from '@mui/system'

function StepTwo({ handleNext, handleBack }) {
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }
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
            Medical Registration
          </Typography>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 2/5
          </Typography>
        </Stack>

        <CTextField label={'Registration Number'} placeholder='Type Registration Number' />

        <CSelect label='Registration Council' placeholder={'Type & Select Registration Council'} />

        <CSelect label='Registration Year' placeholder={'Type Registration Year'} />

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
          This information helps us perform critical checks to ensure that only licensed and genuine medical
          practitioners are listed on Practo. Your profile will get a “Verified” badge on verification. Doctors with
          verified profiles get 95% more patient views on Practo.
        </Box>
      </Grid>
    </Grid>
  )
}

export default StepTwo
