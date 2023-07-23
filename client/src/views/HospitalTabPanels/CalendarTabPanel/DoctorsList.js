import React, { useState } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { Icon } from '@iconify/react'

const doctors = ['Jamhur Ghifari', 'James Ghun', 'Betty Cooper', 'Cheryl Blossom']
const CustomListView = () => {
  return (
    <List>
      {doctors.map((item, i) => {
        const randColor = '#' + Math.floor(Math.random() * 16777216).toString(16)
        return (
          <ListItem disablePadding key={i}>
            <ListItemButton>
              <ListItemIcon>
                <Icon icon='carbon:dot-mark' color={randColor} />
              </ListItemIcon>
              <ListItemText primary={item} sx={{ color: '#353535', fontSize: '16px', fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

function DoctorsList() {
  return (
    <>
      <Typography variant='subtitle2' color='#28328C' px='24px' py='16px' borderBottom='1px solid #F0F0F5'>
        All Clients
      </Typography>
      <Box borderBottom='2px solid #F0F0F5'>
        <Stack direction={'row'} spacing={2} alignItems='center' justifyContent={'space-between'} px='24px' py='16px'>
          <Typography variant='subtitle1' color='#28328C'>
            Doctors
          </Typography>
          <Typography variant='subtitle2' color='#353535' fontWeight={600}>
            4
          </Typography>
        </Stack>
        <CustomListView />
      </Box>
    </>
  )
}

export default DoctorsList
