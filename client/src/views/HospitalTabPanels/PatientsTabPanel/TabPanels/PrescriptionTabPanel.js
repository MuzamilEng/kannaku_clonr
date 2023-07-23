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
import Checkbox from '@mui/material/Checkbox'

function createData(drugs, frequency, duration, instruction) {
  return {
    drugs,
    frequency,
    duration,
    instruction
  }
}

const headCells = [
  {
    id: 'drugs',
    numeric: false,
    disablePadding: true,
    label: 'Drugs'
  },
  {
    id: 'frequency',
    numeric: false,
    disablePadding: false,
    label: 'Frequency'
  },
  {
    id: 'duration',
    numeric: false,
    disablePadding: false,
    label: 'Duration'
  },
  {
    id: 'instruction',
    numeric: true,
    disablePadding: false,
    label: 'Instruction'
  }
]

const rows = [createData('Aqua Astringent', '2/1', '1 week', 200), createData('Aqu Glycerin', '2/1', '1 week', 200)]

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox' sx={{ borderBottom: '0px !important' }}>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
            sx={{ '& svg': { width: '20px', height: '20px', borderBottom: '0px !important' } }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'drugs' ? 'left' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{
              flex: headCell.id === 'drugs' || headCell.id === 'instruction' ? '0 0 1' : '0 0 0.25',
              width: headCell.id === 'drugs' || headCell.id === 'instruction' ? '250px' : 'auto',
              borderBottom: '0px'
            }}
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
    <TableContainer>
      <Table sx={{ minWidth: '100%' }} aria-labelledby='tableTitle'>
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
                key={row.procedures}
                hover
                onClick={event => handleClick(event, row.name)}
                role='checkbox'
                aria-checked={isItemSelected}
                tabIndex={-1}
                selected={isItemSelected}
              >
                <TableCell
                  padding='checkbox'
                  sx={{ borderBottom: index + 1 !== rows.length ? '0px' : '1px solid #A7A7A7' }}
                >
                  <Checkbox
                    color='primary'
                    checked={isItemSelected}
                    inputProps={{
                      'aria-labelledby': labelId
                    }}
                    sx={{ '& svg': { width: '20px', height: '20px' } }}
                  />
                </TableCell>
                <TableCell align='left' sx={{ borderBottom: index + 1 !== rows.length ? '0px' : '1px solid #A7A7A7' }}>
                  {row.drugs}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ borderBottom: index + 1 !== rows.length ? '0px' : '1px solid #A7A7A7' }}
                >
                  {row.frequency}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ borderBottom: index + 1 !== rows.length ? '0px' : '1px solid #A7A7A7' }}
                >
                  {row.duration}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ borderBottom: index + 1 !== rows.length ? '0px' : '1px solid #A7A7A7' }}
                >
                  {row.instruction}
                </TableCell>
              </TableRow>
            )
          })}
          <TableRow tabIndex={-1}>
            <TableCell padding='checkbox' sx={{ borderBottom: '0px', visibility: 'hidden' }}>
              <Checkbox
                color='primary'
                inputProps={{
                  'aria-labelledby': 'enhanced-table-checkbox-end-row'
                }}
                sx={{ '& input': { display: 'none' } }}
              />
            </TableCell>
            <TableCell align='left' sx={{ borderBottom: '0px' }}>
              Planed by Jamhur Ghifari
            </TableCell>
            <TableCell align='center' sx={{ borderBottom: '0px' }}></TableCell>
            <TableCell align='center' sx={{ borderBottom: '0px' }}></TableCell>
            <TableCell align='center' sx={{ borderBottom: '0px' }}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
function PrescriptionTabPanel() {
  const [date, setDate] = React.useState(moment().format('DDD MMMM YYYY'))

  const handleChange = event => {
    setDate(event.target.value)
  }
  return (
    <TabPanel value='7' sx={{ p: '0px' }}>
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
          <Stack direction={'row'} spacing={2}>
            <Button
              variant='outlined'
              className='active'
              sx={{
                borderColor: '#C4C4C4',
                color: 'black',
                '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
              }}
            >
              Day
            </Button>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#C4C4C4',
                color: 'black',
                '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
              }}
            >
              Month
            </Button>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#C4C4C4',
                color: 'black',
                '&.active': { color: 'white', background: '#14BEF0 !important', borderColor: '#14BEF0' }
              }}
            >
              Week
            </Button>
          </Stack>

          <Button
            variant='outlined'
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Add New Appontment
          </Button>
        </Stack>
      </Stack>
      <Stack gap='8px' pl='8px' pt='8px'>
        {/* ROW */}
        <Stack px={'24px'} py='15px' border='1px solid #55ACEE' borderRadius='4px'>
          {/* Client name row */}
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h6' color='#000000'>
              James S.
            </Typography>
            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* End Client name row */}
          {/* Table */}
          <EnhancedTable />
        </Stack>
        {/* END ROW */}

        {/* ROW */}
        <Stack px={'24px'} py='15px' border='1px solid #55ACEE' borderRadius='4px'>
          {/* Client name row */}
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h6' color='#000000'>
              James S.
            </Typography>
            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* End Client name row */}
          {/* Table */}
          <EnhancedTable />
        </Stack>
        {/* END ROW */}

        {/* ROW */}
        <Stack px={'24px'} py='15px' border='1px solid #55ACEE' borderRadius='4px'>
          {/* Client name row */}
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h6' color='#000000'>
              James S.
            </Typography>
            <Icon icon='mdi:dots-vertical' width='25' height='25' />
          </Stack>
          {/* End Client name row */}
          {/* Table */}
          <EnhancedTable />
        </Stack>
        {/* END ROW */}
      </Stack>
    </TabPanel>
  )
}

export default PrescriptionTabPanel
