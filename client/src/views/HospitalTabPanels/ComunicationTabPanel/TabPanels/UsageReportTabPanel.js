import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { TabPanel } from '@mui/lab'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Icon } from '@iconify/react'
function UsageReportTabPanel() {
  const [upcomingBirthday, setUpcomingBirthday] = React.useState('')
  const [from, setFrom] = React.useState('08 May 2022')
  const [to, setTo] = React.useState('13 May 2022')

  const handleChangeUpcomingBirthday = event => {
    setUpcomingBirthday(event.target.value)
  }

  const handleChangeFrom = event => {
    setFrom(event.target.value)
  }

  const handleChangeTo = event => {
    setTo(event.target.value)
  }
  return (
    <TabPanel value='5' sx={{ p: '0px' }}>
      <Stack
        direction={'row'}
        minHeight='56px'
        spacing={4}
        justifyContent='flex-end'
        alignItems='center'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='2px solid #F0F0F5'
      >
        <Typography variant={'subtitle2'} color='#A7A7A7'>
          Communication Credits : <span style={{ color: '#28328C' }}>0 SMS Free, 144 SMS Paid</span>
        </Typography>
      </Stack>
      <Stack
        direction={'row'}
        spacing={4}
        justifyContent='space-between'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='1px solid #F0F0F5'
      >
        <FormControl size='small' sx={{ width: '216px' }}>
          <InputLabel id='all-male-customer-2' sx={{ color: 'black' }}>
            Upcoming Birthday
          </InputLabel>
          <Select labelId='all-male-customer-2' id='all-male-customer' onChange={handleChangeUpcomingBirthday}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <Button
            variant='outlined'
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              mr: '10px',
              '&.active': {
                color: 'white',
                background: '#14BEF0',
                borderColor: '#14BEF0',
                textTransform: 'capitalize'
              }
            }}
          >
            Add Receiver
          </Button>
          <Button
            variant='outlined'
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': {
                color: 'white',
                background: '#14BEF0',
                borderColor: '#14BEF0',
                textTransform: 'capitalize'
              }
            }}
          >
            Creat Message
          </Button>
        </Box>
      </Stack>

      <Box px='8px' py='8px' minHeight='100vh' sx={{ background: 'white', borderTop: '1px solid #F0F0F5' }}>
        <Typography variant='subtitle2' fontWeight={600} color='black'>
          Usage Report
        </Typography>
        <Stack spacing={2} mt='32px' direction='row' justifyContent={'center'}>
          <FormControl size='small' sx={{ width: '216px' }}>
            <InputLabel id='all-male-customer-3' sx={{ color: 'black' }}>
              08 May 2022
            </InputLabel>
            <Select labelId='all-male-customer-3' id='all-male-customer' onChange={handleChangeUpcomingBirthday}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant='outlined'
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': {
                color: 'white',
                background: '#14BEF0',
                borderColor: '#14BEF0',
                textTransform: 'capitalize'
              }
            }}
          >
            Send Report
          </Button>
        </Stack>
        <Stack alignItems={'center'} mt='77px'>
          <Icon icon='bi:send-check' color='#0fa958' width='100' height='100' />
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default UsageReportTabPanel
