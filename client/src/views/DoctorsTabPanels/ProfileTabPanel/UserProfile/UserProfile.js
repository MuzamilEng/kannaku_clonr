import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Icon } from '@iconify/react'
import UserProfileInfoTab from './UserProfileTabPanels/UserProfileInfoTab'
import UserProfileFeedbackTab from './UserProfileTabPanels/UserProfileFeedbackTab'

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

function UserProfile() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Box width={'100%'}>
        <img src='/images/pages/profile-cover.png' alt='' style={{ width: '100%', height: 'auto' }} />
      </Box>

      <Stack direction={'column'} alignItems='center' mt='-85px'>
        <Box
          width='156px'
          height={'156px'}
          sx={{ borderRadius: '156px', border: '4px solid #14BEF0', overflow: 'hidden' }}
        >
          <img src='/images/pages/profile-avatar.png' alt='' style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Typography variant='h4' fontWeight={600} color='black' mb='16px'>
          Jamhur Ghifari
        </Typography>

        <Typography variant='body2' fontWeight={600} color='black' mb='26px' align='center' maxWidth={'377px'}>
          D.B.S (Ind), D.D.S(USA), Fellowship in Implantology(USA), <br />
          CBM(USA), PGDMLE(Ind), Fellowship in Orthodntics
          <br />
          Denstist.
        </Typography>

        <Stack direction={'row'} gap='5px' alignItems={'center'}>
          <Icon icon='bxs:like' color='#14bef0' width={'25px'} height='25px' />
          <Typography variant='body1' fontWeight={600} color='#14bef0'>
            95%
          </Typography>

          <Typography variant='caption' fontWeight={600} color='black'>
            (120 votes)
          </Typography>
        </Stack>
      </Stack>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='icon position tabs example'
        centered
        sx={{ borderBottom: 0 }}
      >
        <Tab
          icon={<Icon icon='majesticons:paper-fold-text-line' />}
          iconPosition='start'
          label='Info'
          sx={{ textTransform: 'capitalize' }}
        />
        <Tab
          icon={<Icon icon='fluent:person-feedback-16-filled' />}
          iconPosition='start'
          label='Feedback'
          sx={{ textTransform: 'capitalize' }}
        />
        <Tab
          icon={<Icon icon='wpf:medical-doctor' />}
          iconPosition='start'
          label='Consult Q&A'
          sx={{ textTransform: 'capitalize' }}
        />
        <Tab
          icon={<Icon icon='material-symbols:dynamic-feed' />}
          iconPosition='start'
          label='Health Feed'
          sx={{ textTransform: 'capitalize' }}
        />
      </Tabs>
      <UserProfileInfoTab value={value} />
      <UserProfileFeedbackTab value={value} />
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </>
  )
}

export default UserProfile
