import React from 'react'
import { TabPanel } from '@mui/lab'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Link from '@mui/material/Link'
function TimeLineTabPanel() {
  return (
    <TabPanel value='8' sx={{ p: '0px' }}>
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
              Email Case Sheet
            </Button>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#C4C4C4',
                color: 'black',
                '&.active': { color: 'white', background: '#14BEF0', borderColor: '#14BEF0' }
              }}
            >
              Dot Matrix Print
            </Button>
            <Button
              variant='outlined'
              sx={{
                borderColor: '#C4C4C4',
                color: 'black',
                '&.active': { color: 'white', background: '#14BEF0 !important', borderColor: '#14BEF0' }
              }}
            >
              Costumize Print
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
              Print Case Sheet
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Grid container spacing={2} px='20px' py='40px'>
        <Grid item xs={5}>
          <Typography variant='h6' fontWeight={600} color='black'>
            Types
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Appointment'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px', fontWeight: 500 } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Files'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px', fontWeight: 500 } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Client Notes'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px', fontWeight: 500 } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Prescriptions'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px', fontWeight: 500 } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Treatment Plans'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px', fontWeight: 500 } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Procedures'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px', fontWeight: 500 } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Invoices'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px' } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  disableRipple={true}
                  icon={<Icon icon='material-symbols:check-box-outline-blank' color='#A7A7A7' width='24' height='24' />}
                  checkedIcon={
                    <Icon icon='material-symbols:check-box-outline' color='#14bef0' width='24' height='24' />
                  }
                />
              }
              label='Payments'
              sx={{ '& .MuiFormControlLabel-label': { ml: '18px' } }}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={7}>
          <Timeline
            sx={{
              [`& .MuiTimelineItem-root::before`]: {
                flex: '0 !important',
                padding: 0
              },
              '& .MuiTimelineDot-outlined': {
                m: 0,
                position: 'absolute',
                top: '28px',
                left: '-5px',
                background: 'white'
              },
              '& .MuiTimelineContent-root': {
                ml: '14px'
              }
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  '& .MuiTypography-root': {
                    ml: '14px'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      background: '#FFFFFF',
                      border: '1px solid #55ACEE',
                      boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
                      borderRadius: '4px',
                      p: '24px',
                      zIndex: 2,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        display: 'inline-block',
                        position: 'absolute',
                        top: '16px',
                        left: '-1px',
                        zIndex: 3,
                        height: '18px',
                        width: '3px',
                        backgroundColor: 'white'
                      }
                    }}
                  >
                    <Typography variant='h6' fontWeight={600} mb='16px'>
                      13 May 2022
                    </Typography>
                    <Typography>Client Notes Added</Typography>
                    <Link href='#' underline='none'>
                      Show More
                    </Link>
                  </Box>
                  <Icon
                    icon='fluent:triangle-left-32-regular'
                    color='#14bef0'
                    width='24'
                    height='24'
                    style={{ position: 'absolute', top: '14px', right: '99%', zIndex: 1 }}
                  />
                </Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </TabPanel>
  )
}

export default TimeLineTabPanel
