import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function UserProfileInfoTab({ value }) {
  return (
    <TabPanel value={value} index={0}>
      <Box px='40px' py='48px' borderBottom='1px solid #A7A7A7'>
        <Stack direction={'row'} alignItems='flex-start' spacing={8} mb='18px'>
          <Box flex={1}>
            <Typography variant='subtitle2' color='black'>
              St. Imam Bonjo, Denpasar
            </Typography>
            <Typography variant='subtitle1' color='#14BEF0'>
              Maria Dharma Perfect Dental Care
            </Typography>
          </Box>

          <Box>
            <Typography variant='subtitle1' color='black' fontWeight={600}>
              MON - FRI
            </Typography>
            <Typography variant='subtitle2' color='black'>
              08:00 AM - 05:00 PM
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography variant='subtitle1' color='#14BEF0'>
              $ 1000
            </Typography>
            <Typography variant='subtitle2' color='black'>
              / Appointment
            </Typography>
          </Box>
        </Stack>

        <Stack direction={'row'} alignItems='flex-start' spacing={8} mb='18px'>
          <Box flex={1}>
            <Stack direction={'row'} gap='5px' alignItems={'center'}>
              <Icon icon='bxs:like' color='#14bef0' width={'25px'} height='25px' />
              <Typography variant='body1' fontWeight={600} color='#14bef0'>
                95%
              </Typography>

              <Typography variant='caption' fontWeight={600} color='black'>
                (120 votes)
              </Typography>
            </Stack>
            <Typography variant='subtitle2' color='black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris, mauris,
              nulla.
            </Typography>
          </Box>

          <Box>
            <Typography variant='subtitle1' color='black' fontWeight={600}>
              SAT
            </Typography>
            <Typography variant='subtitle2' color='black'>
              08:00 AM - 05:00 PM
            </Typography>
          </Box>

          <Box flex={1}></Box>
        </Stack>

        <Stack direction={'row'} alignItems='flex-end' spacing={8} mb='18px'>
          <Box flex={1}>
            <Typography variant='subtitle2' color='#14BEF0'>
              GET DIRECTION
            </Typography>
            <Stack direction={'row'} spacing={2}>
              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-1.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-2.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-3.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-4.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box
                width={'32px'}
                height={'32px'}
                bgcolor='#D8D8D8'
                sx={{
                  position: 'relative',
                  borderRadius: '4px',
                  '&::after': {
                    content: '"+1"',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }
                }}
              ></Box>
            </Stack>
          </Box>

          <Box>
            <Button variant='contained' sx={{ background: '#14BEF0' }}>
              Book Apointment
            </Button>
          </Box>

          <Box flex={1}></Box>
        </Stack>
      </Box>

      <Box px='40px' py='48px' borderBottom='1px solid #A7A7A7'>
        <Stack direction={'row'} alignItems='flex-start' spacing={8} mb='18px'>
          <Box flex={1}>
            <Typography variant='subtitle2' color='black'>
              St. Imam Bonjo, Denpasar
            </Typography>
            <Typography variant='subtitle1' color='#14BEF0'>
              Maria Dharma Perfect Dental Care
            </Typography>
          </Box>

          <Box>
            <Typography variant='subtitle1' color='black' fontWeight={600}>
              MON - FRI
            </Typography>
            <Typography variant='subtitle2' color='black'>
              08:00 AM - 05:00 PM
            </Typography>
          </Box>

          <Box flex={1}>
            <Typography variant='subtitle1' color='#14BEF0'>
              $ 1000
            </Typography>
            <Typography variant='subtitle2' color='black'>
              / Appointment
            </Typography>
          </Box>
        </Stack>

        <Stack direction={'row'} alignItems='flex-start' spacing={8} mb='18px'>
          <Box flex={1}>
            <Stack direction={'row'} gap='5px' alignItems={'center'}>
              <Icon icon='bxs:like' color='#14bef0' width={'25px'} height='25px' />
              <Typography variant='body1' fontWeight={600} color='#14bef0'>
                95%
              </Typography>

              <Typography variant='caption' fontWeight={600} color='black'>
                (120 votes)
              </Typography>
            </Stack>
            <Typography variant='subtitle2' color='black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris, mauris,
              nulla.
            </Typography>
          </Box>

          <Box>
            <Typography variant='subtitle1' color='black' fontWeight={600}>
              SAT
            </Typography>
            <Typography variant='subtitle2' color='black'>
              08:00 AM - 05:00 PM
            </Typography>
          </Box>

          <Box flex={1}></Box>
        </Stack>

        <Stack direction={'row'} alignItems='flex-end' spacing={8} mb='18px'>
          <Box flex={1}>
            <Typography variant='subtitle2' color='#14BEF0'>
              GET DIRECTION
            </Typography>
            <Stack direction={'row'} spacing={2}>
              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-1.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-2.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-3.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box width={'32px'} height={'32px'}>
                <img src='/images/pages/user-4.png' alt='' style={{ width: '100%', height: '100&' }} />
              </Box>

              <Box
                width={'32px'}
                height={'32px'}
                bgcolor='#D8D8D8'
                sx={{
                  position: 'relative',
                  borderRadius: '4px',
                  '&::after': {
                    content: '"+1"',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }
                }}
              ></Box>
            </Stack>
          </Box>

          <Box>
            <Button variant='contained' sx={{ background: '#14BEF0' }}>
              Book Apointment
            </Button>
          </Box>

          <Box flex={1}></Box>
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default UserProfileInfoTab
