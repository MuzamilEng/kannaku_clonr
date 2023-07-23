import React, { useState } from 'react'
import { TabPanel } from '@mui/lab'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import MessageBox from '../ComunicationTabPanel/MessageBox'
// import Headingbar from 'src/layouts/components/hospital/Headingbar'
import Headingbar from '../../../layouts/components/hospital/Headingbar'

function ReportsTabPanel() {
  const [income, setIncome] = useState('Income')
  const [from, setFrom] = useState('08 May 2022')
  const [to, setTo] = useState('13 May 2022')
  function handleChangeIncome(event) {
    setIncome(event.target.income)
  }

  function handleChangeFrom(event) {
    setIncome(event.target.from)
  }

  function handleChangeTo(event) {
    setIncome(event.target.to)
  }
  return (
    <TabPanel value='4' sx={{ p: '0px' }}>
      <Headingbar text={'Reports'} />
      <Box sx={{ px: '24px', py: '16px' }}>
        <Typography variant='subtitle1' color='black' fontWeight={600} mb='16px'>
          Clinic Name
        </Typography>
        <Stack
          direction={'row'}
          spacing={4}
          justifyContent='space-between'
          alignItems={'flex-end'}
          bgcolor={'white'}
          py='9px'
        >
          <Box>
            <Typography>Category :</Typography>
            <FormControl size='small' sx={{ width: '270px' }}>
              <InputLabel id='all-male-customer-1' sx={{ color: 'black' }}>
                Income
              </InputLabel>
              <Select labelId='all-male-customer-1' id='all-male-customer' name='income' onChange={handleChangeIncome}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <Typography>From :</Typography>
            <FormControl size='small' sx={{ width: '270px' }}>
              <InputLabel id='all-male-customer-1' sx={{ color: 'black' }}>
                08 May 2022
              </InputLabel>
              <Select labelId='all-male-customer-1' id='all-male-customer' name='from' onChange={handleChangeFrom}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <Typography>To :</Typography>
            <FormControl size='small' sx={{ width: '270px' }}>
              <InputLabel id='all-male-customer-1' sx={{ color: 'black' }}>
                13 May 2022
              </InputLabel>
              <Select labelId='all-male-customer-1' id='all-male-customer' name='to' onChange={handleChangeTo}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
              Mail
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
              Print
            </Button>
          </Box>
        </Stack>

        <Stack mb={'24px'}>
          <Typography>Summary</Typography>
          <MessageBox defaultValue={true} />
        </Stack>

        <Stack mb={'24px'}>
          <Typography>Details</Typography>
          <MessageBox defaultValue={true} />
        </Stack>
      </Box>
    </TabPanel>
  )
}

export default ReportsTabPanel
