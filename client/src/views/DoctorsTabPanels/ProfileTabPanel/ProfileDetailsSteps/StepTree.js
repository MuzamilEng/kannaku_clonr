import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import CSelect from '../../sharedComponents/CSelect'
import CTextField from '../../sharedComponents/CTextField'
import { Box } from '@mui/system'

function StepTree({ handleNext, handleBack }) {
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
              Education Qualification
            </Typography>
            <Typography variant='subtitle2' color='black' fontWeight={600}>
              Please enter your base level qualification.
            </Typography>
          </Box>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 3/5
          </Typography>
        </Stack>

        <CSelect label={'Degree'} placeholder='Type & Select Degree' />

        <CSelect label='College/Institute' placeholder={'Type & Select College/Institute'} />

        <CSelect label='Year of completion' placeholder={'Type Registration Year of Completion'} />

        <CSelect label='Year of experience' placeholder={'Type Year of experience (0-70 years)'} />

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

export default StepTree
