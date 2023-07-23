import React from 'react'
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
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
function UserProfileFeedbackTab({ value }) {
  return (
    <TabPanel value={value} index={1}>
      <Box px='40px' py='48px' borderBottom='1px solid #A7A7A7'>
        <Stack direction={'row'} alignItems='center' spacing={8} mb='18px'>
          <Box flex={1}>
            <Typography variant='subtitle2' color='black'>
              St. Imam Bonjo, Denpasar
            </Typography>
            <Typography variant='subtitle1' color='#14BEF0'>
              Scaling and Teeth Whitening
            </Typography>

            <Typography variant='subtitle2' color='black' fontStyle={'italic'}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris,
              mauris, nulla.”
            </Typography>
          </Box>

          <Box flex={0.5}>
            <Stack direction={'row'} alignItems='center' gap={'2px'}>
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Typography variant='subtitle'>5.0</Typography>
            </Stack>
            <Typography variant='subtitle2' color='black'>
              Jun 10, 2021 - Jun 15, 2021
            </Typography>
          </Box>

          <Box flex={0.5}>
            <Typography variant='subtitle1' color='#14BEF0'>
              $ 1000
            </Typography>
            <Typography variant='subtitle2' color='black'>
              / Appointment
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box px='40px' py='48px' borderBottom='1px solid #A7A7A7'>
        <Stack direction={'row'} alignItems='center' spacing={8} mb='18px'>
          <Box flex={1}>
            <Typography variant='subtitle2' color='black'>
              St. Imam Bonjo, Denpasar
            </Typography>
            <Typography variant='subtitle1' color='#14BEF0'>
              Scaling and Teeth Whitening
            </Typography>

            <Typography variant='subtitle2' color='black' fontStyle={'italic'}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris,
              mauris, nulla.”
            </Typography>
          </Box>

          <Box flex={0.5}>
            <Stack direction={'row'} alignItems='center' gap={'2px'}>
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Icon icon='ic:round-star' color='#14bef0' width={'28px'} height={'28px'} />
              <Typography variant='subtitle'>5.0</Typography>
            </Stack>
            <Typography variant='subtitle2' color='black'>
              Jun 10, 2021 - Jun 15, 2021
            </Typography>
          </Box>

          <Box flex={0.5}>
            <Typography variant='subtitle1' color='#14BEF0'>
              $ 1000
            </Typography>
            <Typography variant='subtitle2' color='black'>
              / Appointment
            </Typography>
          </Box>
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default UserProfileFeedbackTab
