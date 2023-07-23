import { TabPanel } from '@mui/lab'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'

function createData(date, expensesType, vendor, modeOfPayment, amount, notes, Icon) {
  return {
    date,
    expensesType,
    vendor,
    modeOfPayment,
    amount,
    notes,
    Icon
  }
}

const headCells = [
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'Date'
  },
  {
    id: 'expensesType',
    numeric: false,
    disablePadding: true,
    label: 'Expenses Type'
  },
  {
    id: 'vendor',
    numeric: false,
    disablePadding: true,
    label: 'Vendor'
  },
  {
    id: 'modeOfPayment',
    numeric: false,
    disablePadding: true,
    label: 'Mode of Payment'
  },
  {
    id: 'amount',
    numeric: false,
    disablePadding: true,
    label: 'Amount'
  },
  {
    id: 'notes',
    numeric: false,
    disablePadding: true,
    label: 'Notes'
  },
  {
    id: 'icon',
    numeric: false,
    disablePadding: true,
    label: ''
  }
]

const rows = [
  createData(
    '11 May 2022',
    'Lab Charges',
    '-',
    'IDR 1,00',
    '-',
    <Icon icon='mdi:dots-vertical' width='20' height='20' />
  ),
  createData(
    '11 May 2022',
    'Lab Charges',
    '-',
    'IDR 1,00',
    '-',
    <Icon icon='mdi:dots-vertical' width='20' height='20' />
  )
]

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox' sx={{ borderBottom: '0px' }}>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ borderBottom: '0px' }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

function EnhancedTable() {
  const [selected, setSelected] = React.useState([])

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.name)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const isSelected = name => selected.indexOf(name) !== -1

  return (
    <TableContainer sx={{ mt: '55px' }}>
      <Table aria-labelledby='tableTitle' size='medium'>
        <EnhancedTableHead
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={rows.length}
        />
        <TableBody>
          {rows.map((row, index) => {
            const isItemSelected = isSelected(row.name)
            const labelId = `enhanced-table-checkbox-${index}`

            return (
              <TableRow
                onClick={event => handleClick(event, row.name)}
                role='checkbox'
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell padding='checkbox' sx={{ borderBottom: '0px' }}>
                  <Checkbox
                    color='primary'
                    checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId
                    }}
                  />
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      borderLeft: '1px solid #A7A7A7',
                      borderTopLeftRadius: '4px',
                      borderBottomLeftRadius: '4px',
                      py: '13px',
                      pl: '12px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.date}
                  </Typography>
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      py: '13px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.expensesType}
                  </Typography>
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      py: '13px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.vendor}
                  </Typography>
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    color='#0FA958'
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      py: '13px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.modeOfPayment}
                  </Typography>
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      py: '13px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.amount}
                  </Typography>
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      py: '13px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.notes}
                  </Typography>
                </TableCell>
                <TableCell align='right' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      borderRight: '1px solid #A7A7A7',
                      borderTopRightRadius: '4px',
                      borderBottomRightRadius: '4px',
                      py: '12px',
                      pr: '12px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.Icon}
                  </Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function ExpensesTabPanel() {
  const [stockLevel, setStockLevel] = useState('Stock Level')
  const [type, setType] = useState('Type')

  const handleChangeStockLevel = () => {
    console.log('first')
  }
  const handleChangeType = () => {
    console.log('first')
  }
  return (
    <TabPanel value='6' sx={{ p: '0px' }}>
      <Headingbar text={'Expenses'} />
      <Box sx={{ px: '24px', py: '16px' }}>
        <Typography variant='subtitle1' color='black' fontWeight={600} mb='16px'>
          Clinic Name
        </Typography>
        <Stack direction='row' alignItems={'stretch'} gap='10px' justifyContent={'space-between'}>
          <FormControl size='small' sx={{ width: '247px' }}>
            <InputLabel id='stock-level-label' sx={{ color: 'black' }}>
              All Expenses
            </InputLabel>
            <Select labelId='stock-level-label' id='stock-level' name='stock-level' onChange={handleChangeStockLevel}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl size='small' sx={{ width: '247px' }}>
            <InputLabel id='type-label' sx={{ color: 'black' }}>
              All Payment Modes
            </InputLabel>
            <Select labelId='type-label' id='type' name='type' onChange={handleChangeType}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label='From'
              sx={{ '& .MuiInputBase-input': { py: '8.5px' }, '& .MuiInputLabel-root': { top: '-7px' } }}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label='To'
              sx={{ '& .MuiInputBase-input': { py: '8.7px' }, '& .MuiInputLabel-root': { top: '-5px' } }}
            />
          </LocalizationProvider>

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
            Add New Campaign
          </Button>
        </Stack>
        <EnhancedTable />
      </Box>
    </TabPanel>
  )
}

export default ExpensesTabPanel
