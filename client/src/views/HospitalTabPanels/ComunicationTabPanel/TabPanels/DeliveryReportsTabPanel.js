import { TabPanel } from '@mui/lab'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Icon } from '@iconify/react'
import moment from 'moment'
import MessageBox from '../MessageBox'
// import ReactApexcharts from 'src/@core/components/react-apexcharts'
import ReactApexcharts from '../../../../@core/components/react-apexcharts'

const series = [44, 55, 13, 33]
const options = {
  chart: {
    width: 228,
    type: 'donut'
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }
  ],
  legend: {
    show: false,
    position: 'right',
    offsetY: 0,
    height: 230
  }
}
function DeliveryReportsTabPanel() {
  const [clients, setClients] = useState(['Transactional SMS 1'])

  const handleChange = event => {
    // setAge([...clients, event.target.value])
    console.log(event.target.value)
  }

  const [date, setDate] = React.useState(moment().format('DDD MMMM YYYY'))

  const handleChangeDate = event => {
    setAge(event.target.value)
  }
  return (
    <TabPanel value='2' sx={{ p: '0px' }}>
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
        justifyContent='flex-end'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='1px solid #F0F0F5'
      >
        <Stack direction='row' alignItems={'center'} gap='20px' flex={1} pl={'20px'}>
          <Stack direction='row' alignItems={'center'} gap='20px' pl={'20px'}>
            <Icon icon='material-symbols:calendar-month-outline' color='black' />
            <select
              id='date'
              value={date}
              onChange={handleChangeDate}
              label='Age'
              style={{
                background: 'none',
                outline: 'none',
                border: '0',
                color: 'black',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              <option value={date}>{date}</option>
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </select>
          </Stack>
          <FormControl size='small' sx={{ width: '216px' }}>
            <InputLabel id='all-male-customer-l' sx={{ color: 'black' }}>
              Transactional SMS
            </InputLabel>
            <Select labelId='all-male-customer-l' id='all-male-customer' onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Button
          variant='outlined'
          className='active'
          sx={{
            borderColor: '#C4C4C4',
            color: 'black',
            '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0', textTransform: 'capitalize' }
          }}
        >
          Add New Campaign
        </Button>
      </Stack>
      <Box px='8px' py='8px' minHeight='100vh' sx={{ background: 'white', borderTop: '1px solid #F0F0F5' }}>
        <Typography variant='subtitle2' fontWeight={600} color='black'>
          Delivery Reports
        </Typography>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          pt='34px'
          pb='112px'
          px='102px'
          sx={{
            border: '1px solid #A7A7A7',
            filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))',
            borderRadius: '4px'
          }}
        >
          <Box maxWidth={'228px'}>
            <ReactApexcharts options={options} series={series} type='donut' width={228} />
          </Box>
          <Stack
            direction='row'
            justifyContent={'space-around'}
            alignItems={'center'}
            width='100%'
            borderTop={'2px solid #A7A7A7'}
            pt='30px'
            mt='46px'
          >
            <Box>
              <Typography variant='subtitle1' color='#545454'>
                SMS Sent
              </Typography>
              <Typography variant='subtitle1' color='black'>
                100
              </Typography>
            </Box>
            <Box>
              <Typography variant='subtitle1' color='#545454'>
                Today
              </Typography>
              <Typography variant='subtitle1' color='black'>
                50
              </Typography>
            </Box>
            <Box>
              <Typography variant='subtitle1' color='#545454'>
                Last 30 Days
              </Typography>
              <Typography variant='subtitle1' color='black'>
                50
              </Typography>
            </Box>
            <Box>
              <Typography variant='subtitle1' color='#545454'>
                Delivered
              </Typography>
              <Typography variant='subtitle1' color='black'>
                100
              </Typography>
            </Box>
            <Box>
              <Typography variant='subtitle1' color='#545454'>
                Failed
              </Typography>
              <Typography variant='subtitle1' color='black'>
                50
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Typography variant='subtitle2' fontWeight={600} color='black'>
          Messages
        </Typography>
        <Stack spacing={2} mt='19px'>
          <MessageBox />

          <MessageBox defaultValue={true} />
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default DeliveryReportsTabPanel
