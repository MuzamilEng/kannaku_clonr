import { Icon } from '@iconify/react'
import { TabPanel } from '@mui/lab'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function MedicineOrdersTabPanel() {
  return (
    <TabPanel value='4' sx={{ padding: '3px', width: '100%', height: '100%' }}>
      <Grid container minHeight={'100%'}>
        <Grid item xs={6} minHeight={'100%'}>
          <Stack direction='row' minHeight={'100%'}>
            <Stack
              width={'100%'}
              sx={{
                background: 'white',
                border: '0.5px solid #C4C4C4',
                padding: '32px'
              }}
            >
              <Box mb={'32px'}>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography variant='body2' color='#1B1C1E' fontWeight={600}>
                    Registration Date
                  </Typography>

                  <Icon icon='mdi:dots-vertical' />
                </Stack>
              </Box>

              <Box mb={'32px'}>
                {/* The box heading */}
                <Typography variant='subtitle2' fontWeight='600' color={'#001A4F'} mb='16px'>
                  Ibuprofen
                </Typography>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Dosage
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    400 Mg
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    How Often
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    2 x / Day
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Time of Day Taken
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    1 PM
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Reason
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    Mild Pain
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Prescribing
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    Dr. James Sulivan
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Curently Taking
                  </Typography>

                  <Typography variant='body2' fontWeight={600} color='#3C84F6'>
                    Yes
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={6} minHeight={'100%'}>
          <Stack direction='column' minHeight={'100%'}>
            <Stack
              width={'100%'}
              sx={{
                background: 'white',
                flex: 1,
                border: '0.5px solid #C4C4C4',
                padding: '32px'
              }}
            >
              <Typography variant='h6' fontWeight='600' color='black' marginBottom={'16px'}>
                Records
              </Typography>

              <Stack direction='column' gap='8px'>
                {/* Record */}
                <Stack
                  direction='row'
                  justifyContent={'space-between'}
                  alignItems='center'
                  border={'2px solid #C4C4C4'}
                  paddingX='16px'
                  paddingY={'12px'}
                  borderRadius='4px'
                  sx={{
                    '&.active,&:hover': {
                      borderColor: '#55ACEE'
                    }
                  }}
                  className='active'
                >
                  <Typography variant='subtitle2' fontWeight='600' color='black'>
                    Medicine 1
                  </Typography>
                  <Icon icon='mdi:dots-vertical' />
                </Stack>

                {/* Record */}
                <Stack
                  direction='row'
                  justifyContent={'space-between'}
                  alignItems='center'
                  border={'2px solid #C4C4C4'}
                  paddingX='16px'
                  paddingY={'12px'}
                  borderRadius='4px'
                  sx={{
                    '&.active,&:hover': {
                      borderColor: '#55ACEE'
                    }
                  }}
                >
                  <Typography variant='subtitle2' fontWeight='600' color='black'>
                    Medicine 2
                  </Typography>
                  <Icon icon='mdi:dots-vertical' />
                </Stack>

                {/* Record */}
                <Stack
                  direction='row'
                  justifyContent={'space-between'}
                  alignItems='center'
                  border={'2px solid #C4C4C4'}
                  paddingX='16px'
                  paddingY={'12px'}
                  borderRadius='4px'
                  sx={{
                    '&.active,&:hover': {
                      borderColor: '#55ACEE'
                    }
                  }}
                >
                  <Typography variant='subtitle2' fontWeight='600' color='black'>
                    Medicine 3
                  </Typography>
                  <Icon icon='mdi:dots-vertical' />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </TabPanel>
  )
}

export default MedicineOrdersTabPanel
