import React from 'react'
import { TabPanel } from '@mui/lab'
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import moment from 'moment'

function LedgerTabPanel() {
  const [date, setDate] = React.useState(moment().format('DDD MMMM YYYY'))

  const handleChange = event => {
    setDate(event.target.value)
  }
  return (
    <TabPanel value='11' sx={{ p: '0px' }}>
      <Box py='9px' px='23px' borderBottom='2px solid #F0F0F5' sx={{ background: 'white', minHeight: '56px' }}>
        <input
          type='text'
          placeholder='Search Client Name / Id / Phone'
          style={{
            background: '#F1F1F1',
            border: '1px solid #E5E5E5',
            borderRadius: '4px',
            padding: '7px 16px',
            width: '291px'
          }}
        />
      </Box>
      <Stack direction='row' alignItems={'center'} py='9px' borderBottom='2px solid #F0F0F5'>
        <Stack direction='row' alignItems={'center'} gap='20px' flex={1} pl={'20px'}>
          <Icon icon='material-symbols:calendar-month-outline' color='black' />
          <select
            id='date'
            value={date}
            onChange={handleChange}
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

        <Stack spacing={8} direction='row'>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Add Payment
          </Button>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Add Invoices
          </Button>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Print
          </Button>
          <Button
            variant='outlined'
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Send Payment Peminder
          </Button>
        </Stack>
      </Stack>
      <Stack direction={'row'} gap='8px' pl='8px' pt='8px'>
        <Checkbox
          disableRipple={true}
          icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
          checkedIcon={<Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />}
        />
        <Stack
          spacing={4}
          flex={1}
          sx={{
            background: 'white'
          }}
        >
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
            <Box display='flex' alignItems='center' gap='17px'>
              <Typography variant='subtitle2' color='#14BEF0'>
                INV000000000001
              </Typography>
            </Box>

            <Box pr='30px' flex='0.25'>
              <Typography variant='caption' color='#000000'>
                Anti Acne Treatments
              </Typography>
            </Box>

            <Typography variant='subtitle2' color='#545454'>
              Invoices
            </Typography>

            <Box display='flex' alignItems='center' flexDirection={'column'} gap='5px'>
              <Typography variant='subtitle2' color='#000000'>
                Balance
              </Typography>
              <Typography variant='caption' color='#14BEF0'>
                200
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' flexDirection={'column'} gap='5px'>
              <Typography variant='subtitle2' color='#000000'>
                Total
              </Typography>
              <Typography variant='caption' color='#000000'>
                0,00
              </Typography>
            </Box>

            <Box display='flex' flexDirection={'column'} alignItems='center' gap='5px'>
              <Typography variant='subtitle2' color='#000000'>
                Paid
              </Typography>
              <Typography variant='caption' color='#000000'>
                0,00
              </Typography>
            </Box>

            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* END ROW */}
        </Stack>
      </Stack>

      <Stack direction={'row'} gap='8px' pl='8px' pt='8px'>
        <Checkbox
          disableRipple={true}
          icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
          checkedIcon={<Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />}
        />
        <Stack
          spacing={4}
          flex={1}
          sx={{
            background: 'white'
          }}
        >
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
            <Box display='flex' alignItems='center' gap='17px'>
              <Typography variant='subtitle2' color='#14BEF0'>
                INV000000000001
              </Typography>
            </Box>

            <Box pr='30px' flex='0.25'>
              <Typography variant='caption' color='#000000'>
                Anti Acne Treatments
              </Typography>
            </Box>

            <Typography variant='subtitle2' color='#545454'>
              Invoices
            </Typography>

            <Box display='flex' alignItems='center' flexDirection={'column'} gap='5px'>
              <Typography variant='subtitle2' color='#000000'>
                Balance
              </Typography>
              <Typography variant='caption' color='#14BEF0'>
                200
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' flexDirection={'column'} gap='5px'>
              <Typography variant='subtitle2' color='#000000'>
                Total
              </Typography>
              <Typography variant='caption' color='#000000'>
                0,00
              </Typography>
            </Box>

            <Box display='flex' flexDirection={'column'} alignItems='center' gap='5px'>
              <Typography variant='subtitle2' color='#000000'>
                Paid
              </Typography>
              <Typography variant='caption' color='#000000'>
                0,00
              </Typography>
            </Box>

            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* END ROW */}
        </Stack>
      </Stack>
    </TabPanel>
  )
}

export default LedgerTabPanel
