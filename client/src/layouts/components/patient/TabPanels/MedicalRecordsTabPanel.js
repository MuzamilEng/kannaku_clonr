import { Icon } from '@iconify/react'
import { TabPanel } from '@mui/lab'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function MedicalRecordsTabPanel() {
  return (
    <TabPanel value='1' sx={{ padding: '3px' }}>
      <Grid container>
        <Grid item xs={7}>
          <Stack direction='row'>
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
                {/* The box heading */}
                <Typography variant='h6' fontWeight='600' color='black' marginBottom={'16px'}>
                  Record Detail
                </Typography>
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

              {/* Section */}
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
                  <Typography variant='body2' color='#7C7C7C'></Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    9705 Tunnel Ave. New York, NY 10016
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'></Typography>

                  <Typography variant='body2' color={'#FF4C4D'}>
                    Swelling of the Face or Lips
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Known Allergen
                  </Typography>

                  <Typography variant='body2' color={'#FFBB37'}>
                    Bee Sting
                  </Typography>
                </Stack>
              </Box>

              {/* Section */}
              <Box mb={'32px'}>
                {/* The box heading */}
                <Typography variant='subtitle2' fontWeight='600' color='#1B1C1E'>
                  Legal Guardian
                </Typography>
                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'></Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    John Loomish
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2' color='#7C7C7C'>
                    Relationship
                  </Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    Parent
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2'></Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    9705 Tunnel Ave. New York, NY 10016
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2'>Emergency Contact</Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    646-435-3163
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb='8px'>
                  <Typography variant='body2'>Known Allergen</Typography>

                  <Typography variant='body2' color='#1B1C1E'>
                    Bee Sting
                  </Typography>
                </Stack>
              </Box>

              {/* Section */}
              <Box mb={'32px'}>
                {/* The box data */}
                <Stack direction='column' alignItems='flex-end'>
                  <Typography variant='body2' color='#1B1C1E' mb='8px'>
                    11-12-2020
                  </Typography>

                  <Typography variant='body2' color='#FF4C4D' mb='8px'>
                    Swelling of the Face or Lips
                  </Typography>
                </Stack>

                {/* The box data */}
                <Stack direction='column' alignItems='flex-end'>
                  <Typography variant='body2' color='#1B1C1E' mb='8px'>
                    11-12-2020
                  </Typography>

                  <Typography variant='body2' color='#FF4C4D' mb='8px'>
                    Swelling of the Face or Lips
                  </Typography>
                </Stack>
              </Box>
            </Stack>
            <Box></Box>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack direction='column' flex='1'>
            <Stack
              width={'100%'}
              sx={{
                background: 'white',
                border: '0.5px solid #C4C4C4',
                padding: '32px'
              }}
            >
              <Typography variant='h6' fontWeight='600' color='black' marginBottom={'16px'}>
                Record Detail
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
                    Record Detail
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
                    Record Detail
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
                    Record Detail
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

export default MedicalRecordsTabPanel
