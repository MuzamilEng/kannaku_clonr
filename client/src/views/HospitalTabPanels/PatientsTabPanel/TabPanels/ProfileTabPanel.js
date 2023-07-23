import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { TabPanel } from '@mui/lab'
function ProfileTabPanel() {
  const [clients, setClients] = React.useState([])

  const handleChange = event => {
    // setAge([...clients, event.target.value])
    console.log(event.target.value)
  }
  return (
    <TabPanel value='1' sx={{ p: '0px' }}>
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
      <Stack
        direction={'row'}
        spacing={4}
        justifyContent='space-between'
        bgcolor={'white'}
        py='9px'
        px='23px'
        borderBottom='1px solid #F0F0F5'
      >
        <Stack direction={'row'} spacing={4}>
          <FormControl size='small' sx={{ width: '216px' }}>
            <InputLabel id='all-client-label' sx={{ color: 'black' }}>
              All clients
            </InputLabel>
            <Select
              labelId='all-client-label'
              id='all-client'
              value={clients}
              label='All Client'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl size='small' sx={{ width: '216px' }}>
            <InputLabel id='all-male-customer-label' sx={{ color: 'black' }}>
              All male Customer
            </InputLabel>
            <Select
              labelId='all-male-customer-label'
              id='all-male-customer'
              value={clients}
              label='All male Customer'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction={'row'} spacing={2}>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', bgColor: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Print Label
          </Button>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', bgColor: '#14BEF0', borderColor: '#14BEF0' }
            }}
          >
            Merge Client
          </Button>
          <Button
            variant='outlined'
            className='active'
            sx={{
              borderColor: '#C4C4C4',
              color: 'black',
              '&.active': { color: 'white', background: '#14BEF0 !important', borderColor: '#14BEF0' }
            }}
          >
            Add New Client
          </Button>
        </Stack>
      </Stack>

      <Grid container px='8px' py='8px' minHeight='100vh' sx={{ background: 'white', borderTop: '1px solid #F0F0F5' }}>
        <Grid item xs={6} px='8px'>
          <Stack
            direction={'row'}
            border='1px solid #55ACEE'
            borderRadius='4px'
            boxShadow='0px 2px 3px rgba(0, 0, 0, 0.1)'
            px='8px'
            py='8px'
            alignItems='center'
            justifyContent={'space-between'}
            spacing={2}
            sx={{ background: '#CBEDEF' }}
          >
            <Box display='flex' alignItems='center' gap='17px'>
              <img src='/images/avatars/3.png' width={'48px'} height='48px' />
              <Box>
                <Typography variant='h6' color='#000000'>
                  James S.
                </Typography>
                <Typography variant='body2' color='#545454'>
                  Male
                </Typography>
              </Box>
            </Box>
            <Box pr='30px'>
              <Typography variant='body2' color='#545454'>
                12221122
              </Typography>

              <Typography variant='body2' color='#545454'>
                +6282340643333
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6} px='8px'>
          <Stack
            direction={'row'}
            border='1px solid #55ACEE'
            borderRadius='4px'
            boxShadow='0px 2px 3px rgba(0, 0, 0, 0.1)'
            px='8px'
            py='8px'
            alignItems='center'
            justifyContent={'space-between'}
            spacing={2}
            sx={{ background: '#CBEDEF' }}
          >
            <Box display='flex' alignItems='center' gap='17px'>
              <img src='/images/avatars/3.png' width={'48px'} height='48px' />
              <Box>
                <Typography variant='h6' color='#000000'>
                  James S.
                </Typography>
                <Typography variant='body2' color='#545454'>
                  Male
                </Typography>
              </Box>
            </Box>
            <Box pr='30px'>
              <Typography variant='body2' color='#545454'>
                12221122
              </Typography>

              <Typography variant='body2' color='#545454'>
                +6282340643333
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </TabPanel>
  )
}

export default ProfileTabPanel
