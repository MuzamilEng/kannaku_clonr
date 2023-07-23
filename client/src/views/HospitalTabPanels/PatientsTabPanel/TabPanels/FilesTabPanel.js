import React from 'react'
import { TabPanel } from '@mui/lab'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import moment from 'moment'
function FilesTabPanel() {
  const [files, setFiles] = React.useState(['File 1'])

  const handleChange = event => {
    setFiles(event.target.value)
  }
  return (
    <TabPanel value='6' sx={{ p: '0px' }}>
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
          <select
            id='files'
            value={files}
            placeholder='All Files'
            onChange={handleChange}
            label='All files'
            style={{
              background: 'none',
              border: '1px solid #C4C4C4',
              borderRadius: '4px',
              color: 'black',
              fontSize: '14px',
              padding: '7px 16px',
              maxWidth: '216px',
              width: '100%',
              fontWeight: 500
            }}
          >
            <option value={files[0]}>{files[0]}</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </select>
        </Stack>

        <Stack spacing={8} direction='row'>
          <Stack direction={'row'} spacing={2}>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#C4C4C4',
                color: 'black',
                '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
              }}
            >
              Add Medical Certificate
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
              Add
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap='8px' pl='8px' pt='8px'>
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
            <Typography variant='h6' color='#000000'>
              James S.
            </Typography>
          </Box>

          <Box pr='30px' flex='0.4'>
            <Typography variant='body2' color='#545454'>
              Male, 13 Years
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
            <Typography variant='h6' color='#000000'>
              James S.
            </Typography>
          </Box>

          <Box pr='30px' flex='0.4'>
            <Typography variant='body2' color='#545454'>
              Male, 13 Years
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
            <Typography variant='h6' color='#000000'>
              James S.
            </Typography>
          </Box>

          <Box pr='30px' flex='0.4'>
            <Typography variant='body2' color='#545454'>
              Male, 13 Years
            </Typography>
          </Box>

          <Typography variant='body2' color='#000000' flex='0.4'>
            12221122
          </Typography>

          <Icon icon='mdi:dots-vertical' width='25' height='25' />
        </Stack>
        {/* END ROW */}
      </Stack>
    </TabPanel>
  )
}

export default FilesTabPanel
