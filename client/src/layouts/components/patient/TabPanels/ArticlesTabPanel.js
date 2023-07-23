import { Icon } from '@iconify/react'
import { TabPanel } from '@mui/lab'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function ArticlesTabPanel() {
  return (
    <TabPanel value='6' sx={{ padding: '3px', width: '100%', height: '100%' }}>
      <Stack
        direction={'column'}
        justifyContent='center'
        alignItems='center'
        sx={{ background: 'white', border: '0.5px solid #C4C4C4', width: '100%', height: '100%' }}
      >
        <Icon icon='material-symbols:folder-open' color='#55acee' width={67} height={67} />
        <Typography variant='body2' color='#353535'>
          Sorry, no articles shared yet
        </Typography>
      </Stack>
    </TabPanel>
  )
}

export default ArticlesTabPanel
