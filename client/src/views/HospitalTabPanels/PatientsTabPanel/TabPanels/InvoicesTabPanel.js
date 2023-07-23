import React from 'react'
import { TabPanel } from '@mui/lab'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import moment from 'moment'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
function createDataT1(procedures, cost, discount, tax, total, completedBy) {
  return { procedures, cost, discount, tax, total, completedBy }
}

function createDataT2(balance, total, paid) {
  return { balance, total, paid }
}

const rowsT1 = [
  createDataT1('Anti Acne Treatments', 200, '0,00 (0%)', 0, 200, 'Completed by Jamhur Ghifari'),
  createDataT1(
    'Anti Acne Treatments	nti Acne Treatments	nti Acne Treatments',
    200,
    '0,00 (0%)',
    0,
    200,
    'Completed by Jamhur Ghifari'
  )
]

const rowsT2 = [createDataT2(200, '0.00', '0.00')]

function InvoicesTabPanel() {
  const [date, setDate] = React.useState(moment().format('DDD MMMM YYYY'))

  const handleChange = event => {
    setDate(event.target.value)
  }
  return (
    <TabPanel value='9' sx={{ p: '0px' }}>
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
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Add
          </Button>
        </Stack>
      </Stack>
      <Stack gap='8px' pl='8px' pt='8px'>
        {/* Table */}
        <Stack
          width={'100%'}
          height={'100%'}
          spacing={4}
          sx={{
            background: 'white'
          }}
        >
          <Stack sx={{ border: '1px solid #55ACEE', borderRadius: '4px', px: '24px', py: '15px' }}>
            <Stack direction='row' alignItems={'center'} justifyContent='space-between'>
              <Stack direction='row' alignItems={'center'} gap={'16px'} mb='17px'>
                <Typography variant='body' fontWeight={500} color='#14BEF0'>
                  INV000000000001
                </Typography>
                <Typography variant='body' fontWeight={500} color='#A7A7A7'>
                  13 May 2022
                </Typography>
              </Stack>
              <Icon icon='mdi:dots-vertical' width='24' height='24' />
            </Stack>

            <TableContainer>
              <Table sx={{ minWidth: '100%' }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' padding='none'>
                      Procedures
                    </TableCell>
                    <TableCell align='center'>Cost ($)</TableCell>
                    <TableCell align='center'>Discount</TableCell>
                    <TableCell align='center'>Tax</TableCell>
                    <TableCell align='center'>Total</TableCell>
                    <TableCell align='center'></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsT1.map(row => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '& .MuiTableCell-body': {
                          color: 'black',
                          textTransform: 'capitalize',
                          maxWidth: '240px'
                        },
                        '& .MuiTableCell-body:first-child': {
                          paddingLeft: '0px !important'
                        },
                        '& .MuiTableCell-body:last-child': {
                          paddingRight: '0px !important'
                        }
                      }}
                    >
                      <TableCell align='left'>{row.procedures}</TableCell>
                      <TableCell align='center'>{row.cost}</TableCell>
                      <TableCell align='center'>{row.discount}</TableCell>
                      <TableCell align='center'>{row.tax}</TableCell>
                      <TableCell align='center'>{row.total}</TableCell>
                      <TableCell align='center'>{row.completedBy}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer>
              <Table sx={{ maxWidth: '500px', mt: '30px' }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center' sx={{ border: 0, padding: 0 }}>
                      Balance
                    </TableCell>
                    <TableCell align='center' sx={{ border: 0, padding: 0 }}>
                      Total
                    </TableCell>
                    <TableCell align='center' sx={{ border: 0, padding: '0px !important' }}>
                      Paid
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsT2.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        '& .MuiTableCell-body': {
                          color: 'black',
                          textTransform: 'capitalize',
                          maxWidth: '240px'
                        },
                        '& .MuiTableCell-body:first-child': {
                          paddingLeft: '0px !important'
                        },
                        '& .MuiTableCell-body:last-child': {
                          paddingRight: '0px !important'
                        },
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}
                    >
                      <TableCell align='center' sx={{ px: 0 }}>
                        {row.balance}
                      </TableCell>
                      <TableCell align='center' sx={{ px: 0 }}>
                        {row.total}
                      </TableCell>
                      <TableCell align='center' sx={{ px: 0 }}>
                        {row.paid}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
      </Stack>
    </TabPanel>
  )
}

export default InvoicesTabPanel
