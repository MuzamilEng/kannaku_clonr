import { TabPanel } from '@mui/lab'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function LabTestTabPanels() {
  return (
    <TabPanel value='3' sx={{ padding: '3px', width: '100%', height: '100%' }}>
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
              {/* Section */}
              <Box mb={'32px'}>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Registration Date
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    12-03-2021
                  </Typography>
                </Stack>
              </Box>

              <Box mb={'32px'}>
                {/* The box heading */}
                <Typography variant='subtitle2' fontWeight='600' color={'#1B1C1E'} mb='16px'>
                  Personal Data
                </Typography>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Patient Name
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    Clinton Loomish
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Date of Birth
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    01-01-1998
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Address
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    9705 Tunnel Ave. New York, NY 10016
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Medical Case
                  </Typography>

                  <Typography variant='body2' color={'#FF4C4D'}>
                    Heart Attack
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Grid>

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
                {/* The box heading */}
                <Typography variant='subtitle2' fontWeight='600' color={'#1B1C1E'} mb='16px'>
                  Laboratory Test Result
                </Typography>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Time
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    25, May 2021
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Rate
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    90
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Rate
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    90
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Rate
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    90
                  </Typography>
                </Stack>
              </Box>

              <Box mb={'32px'}>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Signed by
                  </Typography>

                  <Typography variant='body2' fontWeight={600} color='#3C84F6'>
                    Dr. Bryan O’Conor
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </TabPanel>
  )
}

export default LabTestTabPanels
