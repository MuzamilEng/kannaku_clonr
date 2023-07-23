import { Icon } from '@iconify/react'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function UploadRecordBar() {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          height: '70px',
          backgroundColor: 'white',
          border: '0.5px solid #C4C4C4'
        }}
      >
        <Grid container height='100%'>
          <Grid item xs={2} height='100%' display='flex' alignItems={'center'} paddingX='24px'>
            <Typography variant='h6' fontWeight='600'>
              Your Drive
            </Typography>
          </Grid>
          <Grid item xs={10} height='100%' paddingX='24px'>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Box
                  sx={{
                    width: '43px',
                    height: '43px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#CCCCCC'
                  }}
                >
                  <Icon icon='clarity:avatar-solid' color='white' width='30' height='30' />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'
                  }}
                >
                  <Typography variant='caption' color='#000'>
                    Jamhur Ghifari
                  </Typography>
                  <Typography variant='caption' color='#A7A7A7'>
                    +6282340743231
                  </Typography>
                </Box>
              </Box>
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#14BEF0'
                }}
              >
                Upload records
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

export default UploadRecordBar
