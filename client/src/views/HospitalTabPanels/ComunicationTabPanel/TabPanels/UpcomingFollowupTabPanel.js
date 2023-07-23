import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { TabPanel } from '@mui/lab'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Icon } from '@iconify/react'
function UpcomingFollowupTabPanel() {
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
    <TabPanel value='3' sx={{ p: '0px' }}>
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
      </Stack>
      <Stack
        direction={'row'}
        spacing={4}
        justifyContent='flex-start'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='1px solid #F0F0F5'
      >
        <Box>
          <Typography sx={{ mb: 2, fontWeight: 500 }}>From :</Typography>
          <FormControl sx={{ width: '270px' }} size='small'>
            <InputLabel id='demo-multiple-name-label1'>08 May 2022</InputLabel>
            <Select id='demo-multiple-name1' onChange={handleChangeFrom} labelId='demo-multiple-name-label1'>
              <MenuItem value={'08 May 2022'}>08 May 2022</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography sx={{ mb: 2, fontWeight: 500 }}>To :</Typography>
          <FormControl sx={{ width: '270px' }} size='small'>
            <InputLabel id='demo-multiple-name-label2'>13 May 2022</InputLabel>
            <Select id='demo-multiple-name2' onChange={handleChangeTo} labelId='demo-multiple-name-label2'>
              <MenuItem value={'08 May 2022'}>{to}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Box px='8px' py='8px' minHeight='100vh' sx={{ background: 'white', borderTop: '1px solid #F0F0F5' }}>
        <Typography variant='subtitle2' fontWeight={600} color='black'>
          Receiver
        </Typography>
        <Stack spacing={2} mt='32px'>
          {/* ROW */}
          <Stack
            direction={'row'}
            border='1px solid #55ACEE'
            borderRadius='4px'
            boxShadow='0px 2px 3px rgba(0, 0, 0, 0.1)'
            px='8px'
            py='15px'
            alignItems='center'
            justifyContent={'space-between'}
            spacing={2}
          >
            <Box display='flex' alignItems='center' gap='17px' flex='0.4'>
              <img src='/images/avatars/3.png' width={'48px'} height='48px' />
              <Box>
                <Typography variant='h6' color='#000000'>
                  James S.
                </Typography>
                <Typography variant='subtitle2' color='#545454'>
                  Male, 13 Years
                </Typography>
              </Box>
            </Box>

            <Box pr='30px' flex='0.4'>
              <Typography variant='body2' color='#545454'>
                8 May 2021 04:00 PM
              </Typography>
            </Box>

            <Typography variant='body2' color='#000000' flex='0.4'>
              12221122
            </Typography>

            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* END ROW */}

          {/* ROW */}
          <Stack
            direction={'row'}
            border='1px solid #55ACEE'
            borderRadius='4px'
            boxShadow='0px 2px 3px rgba(0, 0, 0, 0.1)'
            px='8px'
            py='15px'
            alignItems='center'
            justifyContent={'space-between'}
            spacing={2}
          >
            <Box display='flex' alignItems='center' gap='17px' flex='0.4'>
              <img src='/images/avatars/3.png' width={'48px'} height='48px' />
              <Box>
                <Typography variant='h6' color='#000000'>
                  James S.
                </Typography>
                <Typography variant='subtitle2' color='#545454'>
                  Male, 13 Years
                </Typography>
              </Box>
            </Box>

            <Box pr='30px' flex='0.4'>
              <Typography variant='body2' color='#545454'>
                8 May 2021 04:00 PM
              </Typography>
            </Box>

            <Typography variant='body2' color='#000000' flex='0.4'>
              12221122
            </Typography>

            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* END ROW */}
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default UpcomingFollowupTabPanel
