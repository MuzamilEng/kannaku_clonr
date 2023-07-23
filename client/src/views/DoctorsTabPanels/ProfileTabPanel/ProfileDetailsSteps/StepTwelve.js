import React from 'react'
import { Grid, InputAdornment, Stack, Typography } from '@mui/material'
import CButton from '../../sharedComponents/CButton'
import CSelect from '../../sharedComponents/CSelect'
import CTextField from '../../sharedComponents/CTextField'
import { Box } from '@mui/system'

function StepTwelve({ handleNext, handleBack }) {
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
              Establishment Timings
            </Typography>
            <Typography variant='subtitle2' color='black' fontWeight={600}>
              Practice Name
            </Typography>
          </Box>

          <Typography variant='subtitle2' color='#A7A7A7'>
            Step 2/3
          </Typography>
        </Stack>

        <Box maxWidth={'420px'} mb='32px'>
          <Typography variant='subtitle2' color='black' mb='10px'>
            Days{' '}
          </Typography>
          <Stack direction={'row'} justifyContent='space-between'>
            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Mo"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Mo"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Tu"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"We"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Th"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Fr"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Sa"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>

            <Box
              width={'38px'}
              height={'38px'}
              bgcolor='#F0DA14'
              borderRadius={'38px'}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '"Su"',
                  color: '#FFFFFF',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)'
                }
              }}
            ></Box>
          </Stack>
        </Box>

        <Box>
          <Typography variant='subtitle2' color='black'>
            Sessions 1
          </Typography>
          <Stack direction={'row'} maxWidth='420px'>
            <CSelect lplaceholder='Type Street Address' placeholder={'09:00 AM'} />
            <CSelect lplaceholder='Type Street Address' placeholder={'09:00 PM'} />
          </Stack>
        </Box>

        <Box>
          <Typography variant='subtitle2' color='black'>
            Sessions 2
          </Typography>
          <Stack direction={'row'} maxWidth='420px'>
            <CSelect lplaceholder='Type Street Address' placeholder={'09:00 AM'} />
            <CSelect lplaceholder='Type Street Address' placeholder={'09:00 PM'} />
          </Stack>
        </Box>

        <Box maxWidth={'420px'} width='100%' height={'1px'} bgcolor='#C4C4C4' mt='34px' mb='16px'></Box>

        <Typography variant='subtitle2' color='#14BEF0'>
          + ADD TIMING FOR REMAINING DAYS
        </Typography>

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

export default StepTwelve
