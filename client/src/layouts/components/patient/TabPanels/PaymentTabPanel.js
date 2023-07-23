import { TabPanel } from '@mui/lab'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
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

function PaymentTabPanel() {
  return (
    <TabPanel value='8' sx={{ padding: '3px', width: '100%', height: '100%' }}>
      <Stack
        width={'100%'}
        height={'100%'}
        spacing={4}
        sx={{
          background: 'white',
          border: '0.5px solid #C4C4C4',
          padding: '32px'
        }}
      >
        <Stack sx={{ maxWidth: '906px', border: '1px solid #55ACEE', borderRadius: '4px', px: '24px', py: '15px' }}>
          <Stack direction='row' alignItems={'center'} gap={'16px'} mb='17px'>
            <Typography variant='body' fontWeight={500} color='#14BEF0'>
              INV000000000001
            </Typography>
            <Typography variant='body' fontWeight={500} color='#A7A7A7'>
              13 May 2022
            </Typography>
          </Stack>

          <TableContainer>
            <Table sx={{ minWidth: '100%' }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Procedures</TableCell>
                  <TableCell align='right'>Cost ($)</TableCell>
                  <TableCell align='right'>Discount</TableCell>
                  <TableCell align='right'>Tax</TableCell>
                  <TableCell align='right'>Total</TableCell>
                  <TableCell align='right'></TableCell>
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
                    <TableCell component='th' scope='row'>
                      {row.procedures}
                    </TableCell>
                    <TableCell align='right'>{row.cost}</TableCell>
                    <TableCell align='right'>{row.discount}</TableCell>
                    <TableCell align='right'>{row.tax}</TableCell>
                    <TableCell align='right'>{row.total}</TableCell>
                    <TableCell align='right'>{row.completedBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer>
            <Table sx={{ maxWidth: '500px', mt: '30px' }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Balance</TableCell>
                  <TableCell align='center'>Total</TableCell>
                  <TableCell align='center'>Paid</TableCell>
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
                    <TableCell component='th' scope='row'>
                      {row.balance}
                    </TableCell>
                    <TableCell align='center'>{row.total}</TableCell>
                    <TableCell align='center'>{row.paid}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>

        <Stack direction={'row'} gap='8px'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#14BEF0',
              textTransform: 'capitalize'
            }}
          >
            Accept Payment
          </Button>

          <Button
            variant='outlined'
            sx={{
              textTransform: 'capitalize',
              color: 'black',
              borderColor: 'black'
            }}
          >
            Decline Payment
          </Button>
        </Stack>
      </Stack>
    </TabPanel>
  )
}

export default PaymentTabPanel
