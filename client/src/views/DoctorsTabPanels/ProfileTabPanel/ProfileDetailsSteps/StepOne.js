import { Grid, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../sharedComponents/CButton'
import CRadioButton from '../../sharedComponents/CRadioButton'
import CSelect from '../../sharedComponents/CSelect'
import CTextField from '../../sharedComponents/CTextField'
function StepOne({ handleNext, handleBack }) {
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }
  return (
    <Grid container spacing={2} p={'32px'}>
      <Grid item xs={6}>
        <Typography variant='h6' color='black' fontWeight={600} mb='8px'>
          Hello Dr. Jamhur Ghifari! Lets <br /> build your dedicated profile.
        </Typography>

        <Typography variant='subtitle2' color='black' mb='10px'>
          Section A: Profile details
        </Typography>

        <CTextField label={'Name'} withLeftComponent={true} leftComponentText='Dr./Mr./Ms.' />

        <CSelect label='Specialization' placeholder={'Select Specialization'} />

        <CRadioButton
          label={'Gender'}
          radioButtons={[
            {
              label: 'Male',
              value: 'male'
            },
            {
              label: 'Female',
              value: 'female'
            },
            {
              label: 'Other',
              value: 'other'
            }
          ]}
        />

        <CSelect label='City' placeholder={'Select City'} />

        <CButton onClick={handleNext}>Continue</CButton>
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

export default StepOne
