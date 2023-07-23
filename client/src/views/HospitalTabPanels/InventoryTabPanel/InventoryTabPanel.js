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
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'

function createData(name, itemCode, type, retailPrice, totalStock, availableStock, expiredStock, reorderLevel, Icon) {
  return {
    name,
    itemCode,
    type,
    retailPrice,
    totalStock,
    availableStock,
    expiredStock,
    reorderLevel,
    Icon
  }
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name'
  },
  {
    id: 'itemCode',
    numeric: false,
    disablePadding: true,
    label: 'Item Code'
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: true,
    label: 'Type'
  },
  {
    id: 'retailPrice',
    numeric: false,
    disablePadding: true,
    label: 'Retail Price'
  },
  {
    id: 'totalStock',
    numeric: false,
    disablePadding: true,
    label: 'Total Stock'
  },
  {
    id: 'availableStock',
    numeric: false,
    disablePadding: true,
    label: 'Available Stock'
  },
  {
    id: 'expiredStock',
    numeric: false,
    disablePadding: true,
    label: 'Expired Stock'
  },
  {
    id: 'reorderLevel',
    numeric: false,
    disablePadding: true,
    label: 'Reorder Level'
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
    'Broom Handle',
    'ITM0000001',
    'Equipment',
    '50,00',
    '20 Pcs',
    '2 Pcs',
    '20 Pcs',
    '20 Pcs',
    <Icon icon='mdi:dots-vertical' width='20' height='20' />
  ),
  createData(
    'Broom Handle',
    'ITM0000001',
    'Equipment',
    '50,00',
    '20 Pcs',
    '2 Pcs',
    '20 Pcs',
    '20 Pcs',
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
                    {row.name}
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
                    {row.itemCode}
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
                    {row.type}
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
                    {row.retailPrice}
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
                    {row.totalStock.split(' ').map((el, i) => {
                      return (
                        <Typography color={i === 0 ? '#0FA958' : '#545454'} display='inline-block'>
                          {el}
                        </Typography>
                      )
                    })}
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
                    {row.availableStock}
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
                    {row.expiredStock}
                  </Typography>
                </TableCell>
                <TableCell align='left' padding='none' sx={{ borderBottom: '0px' }}>
                  <Typography
                    sx={{
                      borderTop: '1px solid #A7A7A7',
                      borderBottom: '1px solid #A7A7A7',
                      py: '12px',
                      mb: '8px',
                      height: '53px'
                    }}
                  >
                    {row.reorderLevel}
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

function InventoryTabPanel() {
  const [stockLevel, setStockLevel] = useState('Stock Level')
  const [type, setType] = useState('Type')

  const handleChangeStockLevel = () => {
    console.log('first')
  }
  const handleChangeType = () => {
    console.log('first')
  }
  return (
    <TabPanel value='5' sx={{ p: '0px' }}>
      <Headingbar text={'Inventory'} />
      <Box sx={{ px: '24px', py: '16px' }}>
        <Typography variant='subtitle1' color='black' fontWeight={600} mb='16px'>
          Clinic Name
        </Typography>
        <Stack direction='row' alignItems={'stretch'} gap='10px' justifyContent={'space-between'}>
          <input
            type='text'
            placeholder='Search Product Name / Id'
            style={{
              background: '#F1F1F1',
              border: '1px solid #E5E5E5',
              borderRadius: '4px',
              padding: '7px 16px',
              width: '238px'
            }}
          />

          <FormControl size='small' sx={{ width: '158px' }}>
            <InputLabel id='stock-level-label' sx={{ color: 'black' }}>
              Stock Level
            </InputLabel>
            <Select labelId='stock-level-label' id='stock-level' name='stock-level' onChange={handleChangeStockLevel}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl size='small' sx={{ width: '158px' }}>
            <InputLabel id='type-label' sx={{ color: 'black' }}>
              Type
            </InputLabel>
            <Select labelId='type-label' id='type' name='type' onChange={handleChangeType}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              minHeight: '100%',
              '&.active': {
                color: 'white',
                background: '#14BEF0',
                borderColor: '#14BEF0',
                textTransform: 'capitalize'
              }
            }}
          >
            <Icon icon='icon-park:email-push' width='20' height='18' />
          </Button>

          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              minHeight: '100%',
              '&.active': {
                color: 'white',
                background: '#14BEF0',
                borderColor: '#14BEF0',
                textTransform: 'capitalize'
              }
            }}
          >
            <Icon icon='material-symbols:print-outline' width='20' height='18' />
          </Button>

          <Button
            variant='outlined'
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
            Consume Stock
          </Button>

          <Button
            variant='outlined'
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
            Add Stock
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
            Add New Campaign
          </Button>
        </Stack>
        <EnhancedTable />
      </Box>
    </TabPanel>
  )
}

export default InventoryTabPanel
